const {Order} = require('../models/Order')
const {Product} = require('../models/Product')

module.exports = async function updateOneOrder(order_no,req) {
    try{
        //우선 해당 order_no의 주문내역이 본인의 것이 맞는지 확인해봅시다.
        //아래 조건문이 길긴한데, 내 주문목록이 맞다면... 이라는 뜻입니다.
        const order = await Order.findOne({order_no:order_no})
        if(order.user_id===req.user.user_id){
            const {product_list,address,user_phone} = req.body
            //상품준비중일 경우에만 유저가 주문내역을 변경할 수 있습니다.
            if (order.order_status==="상품준비중"){
                //!!를 이용한다면 "",undefined,null인 변수 a에 대하여
                // !!a ==>false를 반환합니다.
                // 즉, 해당요소를 입력하지 않더라도 아래 조건문에서 걸러낼 수 있을겁니다.
                if(!!product_list){
                    //아래 로직은 createOneOrder과 같은 로직입니다!
                    const req_keys = Object.keys(product_list)
                    const req_values =Object.values(product_list)
                    let product_number_count=[]
                    let total_price = 0
                    for (let i =0; i<req_keys.length;i++){
                        let product_price = 
                        (await Product.findOne({product_no:Number(req_keys[i])})).price
                        total_price+=product_price*req_values[i]
                        product_number_count.push(
                            String(req_keys[i])+"/"+String(req_values[i])
                        )
                    }
                    await Order.updateOne({order_no: order_no},{
                        product_number_count:product_number_count,
                        total_price:total_price
                    })
                }
                if(!!address){
                    await Order.updateOne({order_no: order_no},{user_address:address})
                }
                if(!!user_phone){
                    await Order.updateOne({order_no: order_no},{user_phone:user_phone})
                }
            }else{
                //상품준비중이 아닌 주문내역은 수정할 수 없음으로 error를 던져줍니다.
                throw "배송이 시작된 주문내역은 수정할 수 없습니다."
            }
        }else{
            // 내 주문목록이 아니라면 에러를 반환하는거겟죠!
            throw "접근 불가능한 API요청입니다."
        }
    } catch (error) {
        throw error
    }    
}