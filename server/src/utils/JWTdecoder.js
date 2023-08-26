const jwt = require ('jsonwebtoken')

const { JWT_TOKEN_KEY } = require('../config/index')

module.exports = async (token)=>{
    try {
        const decoded = await jwt.verify(token,JWT_TOKEN_KEY)
        console.log(decoded)
        return decoded
    } catch (error) {
        throw error
    }
}