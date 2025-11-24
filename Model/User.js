const mongoose=require('mongoose')
const  UserSchema=mongoose.Schema({
    name:String,
    email:{type:String,unique:true,required:true},
    password:{required:true,type:String}
})
module.exports=mongoose.model('hello',UserSchema)