const {Product} = require('../models/Product')

module.exports= function getProduct(){
    try {
        return Product.find({}).sort({create_at:-1})
    } catch (error) {
        throw error
    }
}