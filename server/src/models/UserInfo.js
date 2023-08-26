const mongoose = require('mongoose')

const userInfoSchema = mongoose.Schema({
   user_id: {
        type: String,
        required: true,
    },
    
    phoneNumber: {
        type: String,
        default:"000-0000-0000"
    },
    
    imageKey: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2017/01/10/03/54/avatar-1968236_960_720.png"
    },

    address: {
        type: String,
        default:"00시 00구"
    },
    address2:{
        type: String,
        default:"000동 000호" 
    },

})

const UserInfo = mongoose.model('UserInfo', userInfoSchema)
module.exports = { UserInfo }