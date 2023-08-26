const {Product} = require('../models/Product')

module.exports= async function updateProduct(req){
    try {
        await Product.updateOne({product_no: req.params.id},req.body)
        return true
    } catch (error) {
        console.error(error)
        return false
    }
}