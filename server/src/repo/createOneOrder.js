//충분히 고민하셨을 내용일거라고 생각됩니다. 
//일단 Order를 작성하기 위해서 UserInfo와 Product의 db에서 가져와봅시다.

const {Order} = require('../models/Order')
const {Product} = require('../models/Product')
const {User} = require('../models/User')
const {UserInfo} = require('../models/UserInfo')
module.exports = async function findOneOrder(req) {
    try{
        
        const user_id = req.user.user_id
        const req_keys = Object.keys(req.body)
        const req_values = Object.values(req.body)
        // user_id로 필요한값을 파싱해봅시다.
        const {name} = User.findOne({user_id})
        const {phoneNumber,address,address2} = await UserInfo.findOne({user_id})

        // for문을 이용해 req_key의 상품번호를 순차적으로 가져와 product_number_count와 total_price를 만들어 봅시다.
        //product_number_count의 경우 스키마에 설명해두었습니다.
        //임의로 정의해둔내용이라 수정해도 무리는 없습니다.
        //다만 주문내역에서 적어도 상품명/수량을 파악하기 위한 최소한의 장치는 필요할것같아 다음 형식으로 저장해두었습니다.
        let product_number_count=[]
        let total_price = 0
        // forEach를 이용해도 되지만 각각의 상품번호와 수량을 받아와야함으로 그냥 for문을 이용했습니다.
        
        for (let i =0; i<req_keys.length;i++){
            let product_price = 
            (await Product.findOne({product_no:(req_keys[i])})).price
            total_price+=product_price*req_values[i]
            product_number_count.push(
                String(req_keys[i])+"/"+String(req_values[i])
            )
        }
        
        const orders=(await Order.find({}).sort({create_at:-1}))

        let order_no=0
        if (orders.length>0){
        order_no = orders[0].order_no
        }
        // 이제 db를 작성해봅시다.
        const order = Order({
            order_no: order_no+1, 
            user_id: user_id,
            user_name : name,
            user_phone: phoneNumber,
            user_address: address+" "+address2,
            product_number_count:product_number_count,
            total_price: total_price
            //order_status와 create_at의 정보는 create 단계에서 default로 정의되어도 무리없을듯 합니다.
        })
        await order.save()
        //return값을 true/false로 주문정보 생성/실패를 판별합니다.
        return true
    } catch (error) {
        return false
    }    
}