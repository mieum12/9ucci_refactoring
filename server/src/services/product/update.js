
const updateOneProduct = require('../../repo/updateOneProduct')
const findOneProduct = require('../../repo/findOneProduct')


const update = async (req, res)=>{

  try {
    const result = await findOneProduct(req);
    if(!result){
        return res.status(403).send({message:"등록되지 않은 상품입니다."})
    }
    const product = await updateOneProduct(req);
    return res.status(200).send({message:"상품 업데이트 성공"});
  } catch (err) {
    console.error(err)        
    return res.status(400).send({ message: "상품 업데이트 실패" });
  }
}
module.exports = update