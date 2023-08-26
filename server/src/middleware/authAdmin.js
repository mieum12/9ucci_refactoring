const jwt = require ('jsonwebtoken')
const { JWT_TOKEN_KEY } = require('../config/index')
const checkAdmin = require('../repo/checkAdmin')
module.exports = async (req,res,next)=>{
    const token = req.cookies.access_token// 프론트엔드에서 요청할때 헤더에 넣어서 보내줘야함
    if(!token){
        return res.status(401).json({message:"접근권한이 없습니다."})
    }
    const user = await jwt.verify(token,JWT_TOKEN_KEY)
    const isAdmin = await checkAdmin(user.user_id)
    if (!isAdmin){
        return res.status(401).json({message:"관리자 권한이 없습니다."})
    }
    next()
}