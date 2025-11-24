const mongoose=require('mongoose')
const ConnectDB=async()=>{
    try {
      await  mongoose.connect(process.env.UriDB)
      console.log('db conn')
    } catch (error) {
        console.log(error)
    }
}
module.exports=ConnectDB