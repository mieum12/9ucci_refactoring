const jwt = require('jsonwebtoken')
const {JWT_TOKEN_KEY} = require('../config/index')
module.exports = async (user_id)=>{
const access_token = await jwt.sign({user_id:user_id},JWT_TOKEN_KEY,{expiresIn:'600s'})

return access_token
}