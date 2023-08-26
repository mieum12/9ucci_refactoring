const updateRefreshToken = require('../../repo/updateRefreshToken')

const logout = async (req,res)=>{
    const user = req.user
    //로그아웃시 cookie dbtoken 초기화
    await updateRefreshToken(user.user_id,null)
    res.cookie('access_token','',{maxAge:0});
    res.cookie('refresh_token','',{maxAge:0});
    res.status(200).send({message:"complete logout"})
}
module.exports = logout