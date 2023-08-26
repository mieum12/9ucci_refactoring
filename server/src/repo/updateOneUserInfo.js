const { UserInfo } = require('../models/UserInfo')

module.exports= async function updateUserInfo(user,req){
    try {
        // console.log(user)
        // console.log(req.body)
        const userinfo = await UserInfo.updateOne({user_id:user.user_id},req.body)
        return userinfo
    } catch (error) {
        console.error(error)
        return false
    }
}
