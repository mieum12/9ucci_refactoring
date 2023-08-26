const {Product} = require('../models/Product')

// module.exports= async function getProduct(category){
//     try {
//         const category_product = await Product.find({category:category})
//         return category_product
//     } catch (error) {
//         throw error
//     }
// }



module.exports= function getProduct(req){
    try {
        return Product.find({category:req.params.id})
    } catch (error) {
        throw error
    }
}

