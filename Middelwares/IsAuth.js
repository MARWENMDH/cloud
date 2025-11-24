const jwt=require('jsonwebtoken')
const User = require('../Model/User')
exports.IsAuth=async(req,res,next)=>{
    try {
        const token= req.header('authorized')
        const decoded= jwt.verify(token,process.env.privateKey)
        if (!decoded) {
           return res.status(400).send({errors:[{msg:"error token"}]})
        }
        const user= await User.findById(decoded.id)
        req.user=user
        next()
        
    } catch (error) {
         res.status(500).send({errors:[{msg:"error token"}]})
    }
}