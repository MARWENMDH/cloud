
const express=require('express')
const User = require('../Model/User')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const { validSingUp, validation, validSingIn } = require('../Middelwares/Validation')
const { IsAuth } = require('../Middelwares/IsAuth')
const UserRouter=express.Router()


UserRouter.post('/signup',validSingUp,validation,async(req,res)=>{
    try {
        const {email,password}=req.body
        const found= await User.findOne({email})
        if (found) {
            return res.status(400).send({errors:[{msg:"email exists"}]})
        }
        const newUser= new User(req.body)

        const SaltRounds=10
        const Salt=bcrypt.genSaltSync(SaltRounds)
        const hashedPassword=bcrypt.hashSync(password,Salt)
     newUser.password=hashedPassword

     await newUser.save()

    
     const token=jwt.sign({id:newUser._id},process.env.privateKey)
      res.status(200).send({msg:"succes sign up",newUser,token})
    } catch (error) {
        res.status(500).send({errors:[{msg:"can not sign up"}]})
    }
})

UserRouter.post('/signin',validSingIn,validation,async(req,res)=>{
    try {
        const {email,password}=req.body
        const found= await User.findOne({email})
        if (!found) {
            return res.status(400).send({errors:[{msg:"email does not exists"}]})
        }
        const matched=bcrypt.compareSync(password,found.password)
        if (!matched) {
            return res.status(400).send({errors:[{msg:"wrong password"}]})
        }
        const token=jwt.sign({id:found._id},process.env.privateKey)
         res.status(200).send({msg:"succes sign in",found,token})
    } catch (error) {
         res.status(500).send({errors:[{msg:"can not sign up"}]})
    }
})



UserRouter.get('/current',IsAuth,(req,res)=>res.status(200).send(req.user))








module.exports=UserRouter