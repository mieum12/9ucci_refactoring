const {Token} = require('../models/Token')
const jwt = require('jsonwebtoken')
const {JWT_TOKEN_KEY} = require('../config/index')
module.exports= async function checkRefreshToken (user_id,RT){
    try {
        //토큰이 만료되면 에러로 false가 return됨
        await jwt.verify(RT,JWT_TOKEN_KEY)

        const token = await Token.findOne({user_id:user_id})

        //토큰이 null(로그아웃되었다면)이라면 false를 반환함
        if (token.refresh_token===null) {
            return false
        }

        //토큰이 모두 정상적이라면 true를 반환함
        if (RT===token.refresh_token){
            return true
        }
        return false
    } catch (error) {
        return false
    }
}