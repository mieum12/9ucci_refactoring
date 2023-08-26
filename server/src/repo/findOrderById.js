const {Order} = require('../models/Order')

module.exports =  function findOrderById(user_id) {
    try{
        //해당 유저의 주문내역을 최신정보순으로 가져옵니다
        return Order.find({user_id}).sort({create_at:-1})
    } catch (error) {
        throw error
    }    
}