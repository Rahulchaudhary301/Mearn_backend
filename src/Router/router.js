const express=require("express")
const route=express.Router()
const UserController=require('../controller/user')


route.get('/getUser' ,function(req,res){
     res.send({status:true, msg:"Sucessfully"})
})

route.post('/CreateUser', UserController.CreateUser)

route.get('/getUsers',UserController.GetUser)




module.exports=route