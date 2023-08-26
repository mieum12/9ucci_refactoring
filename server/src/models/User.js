const mongoose =require('mongoose')

const userSchema = mongoose.Schema({
    email:{
        type:String,
        unique:true,
        trim:true,
    },
    name:{
        type:String,
        maxlength:50,
    },
    password:{
        type:String,
        minlength:8,
    },
    role:{
        type:Number,
        default:0,
    },
})

const User = mongoose.model('User',userSchema)
module.exports = {User}