const {Product} = require('../models/Product')

module.exports = async function(){
    try {
        const result = await (await Product.find({},{_id:0,"category":1})).map(category => category.category)
        // console.log(result)
        const set = new Set(result);
        const uniqueCategory = [...set];
        return uniqueCategory
    } catch (error) {
        throw error
    }
    
}
