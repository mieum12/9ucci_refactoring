const {ProductImg} = require('../models/ProductImg')
module.exports= async function findOneProductImg (req){
    try {
        const ProductImg = await ProductImg.findOne({product_id:req.product_id})
        return ProductImg
    } catch (error) {
        throw error
    }
}
