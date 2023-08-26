const accessJWTGenerator = require('../utils/accessJWTGenerator')
const checkRefreshToken = require('../repo/checkRefreshToken')
const verifyToken = require('../utils/verifyToken')
// const JWTdecoder = require('../utils/JWTdecoder')
module.exports = async (req,res,next)=>{
    // const token = req.headers.token// 프론트엔드에서 요청할때 헤더에 넣어서 보내줘야함
    const decoded_access_token = await verifyToken(req.cookies.access_token)
    const decoded_refresh_token = await verifyToken(req.cookies.refresh_token) // 이부분은 나중에 프론트엔드에서 어떻게 토큰을 발송하는지에 따라 달라질거같아요
                                                    // 현재는 확인을위해서 쿠키에서 토큰을 이용하게 되어있습니다!

    if(!decoded_access_token){
        if(!decoded_refresh_token){
            return  res.status(400).send({ message: "API 접근권한이 없습니다.(AT,RT)" });
        }else{
            if(await checkRefreshToken(decoded_refresh_token.user_id,req.cookies.refresh_token)){
                const new_access_token = await accessJWTGenerator(decoded_refresh_token.user_id)
                req.user= await verifyToken(new_access_token)
                req.cookies.access_token=new_access_token
                next()
            }
            else{
                return  res.status(400).send({ message: "API 접근권한이 없습니다.(RT불일치)" });
            }
        }
    }else{
        if(!decoded_refresh_token){
            return  res.status(400).send({ message: "API 접근권한이 없습니다.(RT)" });
            // refresh 토큰이 없을때 재발급을 해준다고는 하지만 정리가 안되서 차단했습니다.
            // 원래의 개념이라면 refresh토큰을 재발급해주어야하지만
            // access token을 탈취당한 경우에 해당 토큰만을 가지고 요청할 때
            // refresh토큰을 할당해준다면 결국 refresh토큰도 부여받아 악용할 수 있기에
            // 그냥 막아버렸습니다...
        }
        else{
            if(await checkRefreshToken(decoded_refresh_token.user_id,req.cookies.refresh_token)){
                req.user=decoded_access_token
                next()
            }
            else{
                return  res.status(400).send({ message: "API 접근권한이 없습니다.(RT불일치)" });
            }
        }
    }

}