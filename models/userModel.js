const mongoose=require('mongoose')

const userModel=mongoose.Schema({
    userName:{type:String},
    email:{type:String},
    password:{type:String}

})


const User=mongoose.model('User',userModel)

module.exports=User