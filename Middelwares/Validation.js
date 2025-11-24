const { validationResult,body } = require("express-validator")

validationResult
exports.validSingUp=[
    body("email","wrong email").isEmail(),
    body('password',"wrong password").isLength({min:6})
    
]
exports.validSingIn=[
    body("email","wrong email").isEmail(),
    body('password',"wrong password").isLength({min:6})]
exports.validation=(req,res,next)=>{
    const errors =validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).send(errors)
    }
    next()
}


