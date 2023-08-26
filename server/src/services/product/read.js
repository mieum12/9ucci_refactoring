const findAllProduct = require('../../repo/findAllProduct');
const findOneProduct = require('../../repo/findOneProduct');
const findCategory = require('../../repo/findCategory')
const findAllCategory = require('../../repo/findAllCategory')

const read = async (req, res)=>{
  //console.log(req.params.id);
  const type_check= req.params.id
  try {
      if(!type_check){
        const product = await findAllProduct();
        return res.status(200).send(product);
      }
      if(type_check==='category'){
        const category = await findAllCategory();
        return res.status(200).send(category);

      }
      if(isNaN(type_check)){
        const category = await findCategory(req);
        if (category.length===0){
          return res.status(403).send({ message: "해당하는 상품이 없습니다." });
        }
      return res.status(200).send(category);
      }

      if(!isNaN(type_check)){
        const result = await findOneProduct(req);
        if (!result) {
          return res.status(403).send({ message: "해당하는 상품이 없습니다." });
        }else{
          return res.status(200).send(result)
        }
      
      }
    
    //아이디로 조회 수정 전
    // const result = await findOneProduct(req);
    // if(result){
    //     return res.status(200).send(result);
    // }
    // const product = await findAllProduct();
    //   return res.status(200).send(product);
    
    
  } catch (err) {
    return res.status(400).send({ message: "전체 상품 조회 실패" });
  }
}
module.exports = read


