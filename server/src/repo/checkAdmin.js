const {User} = require('../models/User')

module.exports= async function checkAdmin (user_id){
    try {
        const user = await User.findOne({_id:user_id})
        // console.log(user)
        if (user.role===1){
            return true
        }
        return false
    } catch (error) {
        return false
    }
}