const jwt = require('jsonwebtoken')
const {JWT_TOKEN_KEY} = require('../config/index')
module.exports = async (user)=>{
const refresh_token = await jwt.sign({user_id:user._id,email:user.email},JWT_TOKEN_KEY,{expiresIn:'24h'})
return refresh_token
}