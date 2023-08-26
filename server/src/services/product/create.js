const createProduct = require('../../repo/createProduct');
const findAllProduct =require('../../repo/findAllProduct')

const create = async (req,res)=>{

    try {
        const product = await findAllProduct()
        let cnt = 0;
        if (product.length>0){
            cnt = product[product.length-1].product_no
        }
        const{ title, description, category,price,imgUrl}=req.body
        //테스트시 사용(배포시 주석 제거)
        // if (!title || !description || !category || !price){
        //     return res.status(400).send({message:"빈칸없이 입력해주세요"})
        // }
        const result = createProduct( title,description,category,price,imgUrl,cnt)
        if (result===false){
            return res.status(500).send({message:'상품 등록 실패'})
        }
        return res.status(201).send({message:"상품 등록 성공"})
    } catch (error) {
        console.error(error)
        return res.status(400).send({message:"상품 등록 실패"})
    }

}

module.exports = create;