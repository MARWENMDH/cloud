const express=require('express')
const ConnectDB = require('./config/ConnectDB')
const UserRouter = require('./Routes/User')


const app=express()

require('dotenv').config()

ConnectDB()

app.use(express.json())
app.use('/user',UserRouter)






app.listen(process.env.port,console.log(`Server is Running ${process.env.port}`))