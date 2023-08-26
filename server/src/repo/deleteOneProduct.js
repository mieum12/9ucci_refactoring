const {Product} = require('../models/Product')

module.exports= async function deleteProduct(req){
    try {
        await Product.deleteOne({product_no:req.params.id})
        return true
    } catch (error) {
        console.error(error)
        return false
    }
}