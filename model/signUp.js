const mongoose=require('mongoose');
const signUpTemplate=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        contact:{
            type:String,
            required:true,
        },
        age:{
            type:String,
            required:true,
        },
        city:{
            type:String,
            required:true,
        },
        Date:{
            type:Date,
            default:Date.now,
        },
    }
)

module.exports=mongoose.model('Signup_form',signUpTemplate) //colection name : signup_form