const {User} = require('../models/User')
const {UserInfo} = require("../models/UserInfo")
const {Token} = require("../models/Token")
module.exports= async function createUser(name,email,hashpw){
    try {
        const user = User({name:name,email:email,password:hashpw})
        await user.save()
        const userinfo = UserInfo({user_id:user._id})
        await userinfo.save()
        const token = Token({user_id:user._id})
        await token.save()
        return true
    } catch (error) {
        console.error(error)
        return false
    }
}
