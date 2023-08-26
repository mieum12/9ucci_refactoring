const bcrypt = require('bcrypt')
const accessJWTGenerator = require('../../utils/accessJWTGenerator')
const refreshJWTGenerator = require('../../utils/refreshJWTGenerator')
const findOneUser = require('../../repo/findOneUser')
const updateRefreshToken = require('../../repo/updateRefreshToken')
const checkAdmin = require('../../repo/checkAdmin')
const login = async (req,res)=>{
    const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    try {
        const {email,password} = req.body
        if (!email||!password){
            return res.status(400).send({message:"빈칸없이 입력해주세요"})
        }
        if(exptext.test(email)===false){
            return res.status(400).send({message:"이메일 형식이 아닙니다."})
        }
        const user = await findOneUser(email)
        if(!user){
            return res.status(403).send({message:"존재하지 않는 이메일이거나 비밀번호가 일치하지 않습니다."})
        }
        const result = await bcrypt.compare(password,user.password)
        //여기서 다시 토큰을 생성해야합니다.
        if (result===false){
            return res.status(403).send({message:"존재하지 않는 이메일이거나 비밀번호가 일치하지 않습니다."})
        }
        const access_token = await accessJWTGenerator(user._id)
        const refresh_token = await refreshJWTGenerator(user)
        const roll = await checkAdmin(user)
        res.cookie("refresh_token",refresh_token,
            // {httpOnly: true,
            // secure: true} // 해당 옵션이 활성화되면 자바에서 접근이 불가능해짐 나중에 배포시 활용할것
            )
        // console.log(refresh_token)
        res.cookie("access_token",access_token)
        await updateRefreshToken(user._id,refresh_token)
        
        return res.status(200).send({message:"로그인 성공",Access_token:access_token, roll : roll})

    } catch (error) {
        return res.status(400).send({message:"로그인 실패"})
    }
}
module.exports = login