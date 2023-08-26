const {Order} = require('../models/Order')

module.exports = function findAllOrder() {
    try{
        return Order.find({})
    } catch (error) {
        throw error
    }    
}