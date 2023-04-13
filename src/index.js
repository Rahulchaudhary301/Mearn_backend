const express = require('express')
const app=express()
const router=require("./Router/router")
const {default:mongoose}=require("mongoose")
const cors=require('cors')
const DB=process.env.DATABASE

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://RahulChaudhary:Rahul321@cluster1.42h1ws9.mongodb.net/MEARN_UserRegistration",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("MOngoDb Connected")) 
.catch((err)=>console.log(err.message))

app.use("/",router)

app.listen(3000, function (){
    console.log("Express App is running on 3000 PORT")
})