
const checkAdmin = require('../../repo/checkAdmin')
const updateOneOrder = require('../../repo/updateOneOrder')
const updateOrderStatus = require('../../repo/updateOrderStatus')

const update = async (req, res)=>{
    
    try {
        //read의 경우와 마찬가지로 isAdmin을 이용해봅시다.
        const user_id = req.user.user_id
        //repo내에 어드민인지 아닌지 체크하는 함수가 있습니다. (true/false를 반환합니다.)
        const isAdmin = await checkAdmin(user_id)
        const order_no = req.params.id
        //기능평가상 어드민은 status만 수정가능하게 하면됩니다.
        //req.body에서 어드민/유저에 따라 전송하는 값이 다르다고 생각해봅시다.
        //어드민은 
        // {
        //     status:"status정보"
        // }
        // 를 전송하며,

        //유저는 
        // {
        //     product_list:{
        //         상품1:수량,
        //         상품2:수량,
        //         ...
        //     },
        //     address:"변경할 주소",
        //     user_phone:'변경할 전화번호'
        // }
        //를 전송한다고 가정해봅시다.
        //참고로 product_list 내부의 오브젝트형식은
        //create시 작성되는 req.body의 json 형식과 같습니다.
        //만약 해당 json 형식을 변경한다면 create와 update 모두 같이 동일하게 로직을 바꾸면되겠죠?

        if(isAdmin){
            await updateOrderStatus(order_no,req.body.status)
            return res.status(200).send({ message: "주문 업데이트 성공(어드민)" });
        }else{
            //어드민은 상관없지만 유저라면 해당 주문의 order_no가 본인의 주문이 맞는지 확인해야겠죠? 
            //updateOneOrder에서 구현해봅시다.
            await updateOneOrder(order_no,req)
            return res.status(200).send({ message: "주문 업데이트 성공(유저)" });
        }

    } catch (err) {
        console.error(err)        
        return res.status(400).send({ message: "주문 업데이트 실패" });
    }
}
module.exports = update