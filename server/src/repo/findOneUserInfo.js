const {UserInfo} = require('../models/UserInfo')
module.exports= async function findOneUserInfo (user){
    try {
        const userinfo = await UserInfo.findOne({user_id:user.user_id})
        return userinfo
    } catch (error) {
        throw error
    }
}
