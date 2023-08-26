const {Token} = require('../models/Token')

module.exports= async function updateRefreshToken(user_id,token){
    try {
        await Token.updateOne({user_id:user_id},{refresh_token:token})
    } catch (error) {
        console.error(error)
    }
}