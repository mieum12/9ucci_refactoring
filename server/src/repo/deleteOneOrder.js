const {Order} = require('../models/Order')

module.exports = async function deleteOneOrder(order_no) {
    try{
        await Order.deleteOne({order_no:order_no})
    } catch (error) {
        throw error
    }    
}