const jwt = require ('jsonwebtoken')
const { JWT_TOKEN_KEY } = require('../config/index')
module.exports = async (token)=>{
   try{
    // console.log(token)
    const decoded = await jwt.verify(token,JWT_TOKEN_KEY)
    return decoded
   }catch(e){
    return false
   }
}