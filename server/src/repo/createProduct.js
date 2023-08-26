const {Product} = require('../models/Product')

module.exports= async function createProduct(title,description,category,price,imgUrl, cnt){
    try {
        const product = Product({
            title:title,
            description : description,
            category: category,
            price: price,
            imgUrl:imgUrl,
            product_no:Number(cnt)+1

        })
        await product.save()
        return true
    } catch (error) {
        console.error(error)
        return false
    }
}