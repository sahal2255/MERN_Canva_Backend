const User = require("../models/userModel");

const userRegister = async (req, res) => {
    const data=req.body

    try{
        const {name,email,password}=data
        console.log('destructured data',email,name,password)
        const newUser=new User({
            userName:name,
            email,
            password
        })
        await newUser.save()
        console.log('new user ',newUser)
        res.status(201).json({ message: "User registered successfully", user: newUser });
    }catch(error){
        console.log('error in the user register section',error)
    }
};


const userLogin=async(req,res)=>{
    console.log('hitting to the login section')
    const data=req.body
    console.log('user login data in to the body',data)
    try{
        const {email,password}=data

        const user=await User.findOne({email})
        if(!user){
            console.log('user not found')
            return res.status(400).jsone({message:'user not found'})
        }
        if(user.password!==password){
            console.log('invalid password or email')
            return res.status(400).json({message:'invalid password or email'})
        }

        console.log('user Logged in successfully')
        res.status(200).json({message:'user Logged in success fully',user})

    }catch(error){
        console.log('error in the user login section',error)
    }
}
module.exports = { 
    userRegister ,
    userLogin
};
