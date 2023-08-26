
const createOneOrder = require('../../repo/createOneOrder')


const create = async (req,res)=>{

    try {

        //req.body에 어떤정보가 담겨질지 미지수입니다.
        //req.body에서 여러 정보를 가져오지 않고
        //{
        // 상품1의 상품번호:상품의 수량,
        // 상품2의 상품번호:상품의 수량,
        // ...
        // }
        //이런 형식으로 정보가 담겨 있다고 가정해보고 작성하겠습니다.

        const isCreated = await createOneOrder(req)
        if (isCreated){
            return res.status(200).send({message:"주문 등록 성공"})
        }else{
            return res.status(400).send({message:"주문 등록 실패"})

        }
    } catch (error) {
        console.error(error)
        return res.status(400).send({message:"주문 등록 실패"})
    }

}
module.exports = create

