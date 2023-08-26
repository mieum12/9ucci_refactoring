const {User} = require('../models/User')

module.exports= async function findOneUser (email){
    try {
        const user = await User.findOne({email:email})
        return user
    } catch (error) {
        throw error
    }
}
