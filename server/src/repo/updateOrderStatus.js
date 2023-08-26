const {Order} = require('../models/Order')

module.exports = async function updateOrderStatus(order_no,status) {
    try{
        //order_no를 통해 해당 주문내역을 조회해 status를 조정합니다.
        await Order.updateOne({order_no: order_no},{order_status:status})
    } catch (error) {
        throw error
    }    
}