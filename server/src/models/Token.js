const mongoose =require('mongoose')

const tokenSchema = mongoose.Schema({
    user_id:{
        type:String,
        unique:true,
        trim:true,
    },
    refresh_token:{
        type:String,
    }
})

const Token = mongoose.model('Token',tokenSchema)
module.exports = {Token}