const bcrypt = require('bcrypt')
const findOneUser = require('../../repo/findOneUser')
const createUser = require('../../repo/createUser')
const register = async (req,res)=>{
    const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    try {
        const{name,email,password}=req.body
        if (!name || !email || !password){
            return res.status(400).send({message:"빈칸없이 입력해주세요"})
        }
        if(exptext.test(email)===false){
            return res.status(400).send({message:"이메일 형식이 아닙니다."})
        }
        const user = await findOneUser(email)
        if (user){
            return res.status(400).send({message:"이미 등록된 이메일입니다."})
        }
        const hashpw = await bcrypt.hash(req.body.password,10);
        const result = createUser(name,email,hashpw)
        if (result===false){
            return res.status(500).send({message:'유저 생성 실패'})
        }
        return res.status(201).send({message:"회원가입 성공"})
    } catch (error) {
        console.error(error)
        return res.status(400).send({message:"회원가입 실패"})
    }

}
module.exports = register