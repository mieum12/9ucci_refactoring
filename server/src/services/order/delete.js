const deleteOneOrder = require('../../repo/deleteOneOrder')
const checkAdmin = require('../../repo/checkAdmin')
const deleteOrder = async (req, res)=>{
    try {

        //delete는 생각을 해봐야할거같네요.
        //다시 평가요소를 생각해보면...
        //유저는 주문취소가 가능하고, 어드민은 주문을 삭제할 수 잇다고했습니다!
        //주문취소를 status에 넣을지 아니면 주문자체를 delete할지는 고민이됩니다.
        //해당 문서는 다시 토의해보고 수정을 해야겠네요
        //일단은 어드민만 주문삭제를 가능케 하겠습니다.
        const user_id = req.user.user_id
        const isAdmin = await checkAdmin(user_id)
        console.log(isAdmin)
        const order_no = req.params.id;
        if(isAdmin){
            await deleteOneOrder(order_no)
        }else{
            throw "어드민만 가능한 요청입니다."  

        }


    } catch (err) {
        console.error(err)        
        return res.status(400).send({ message: "오더 삭제 실패" });
    }
}
module.exports = deleteOrder
