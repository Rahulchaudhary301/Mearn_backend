
const Usermodel=require('../model/userModel')

const CreateUser = async function(req , res){
   
    try{
        let data=req.body;
        const {name,age,mobile,email}= data
        if(!name) return res.status(400).send({status:false,msg:"Please enter Name"})
        if(!age) return res.status(400).send({status:false,msg:"Please enter Age"})
        if(!mobile) return res.status(400).send({status:false,msg:"Please enter Mobile Number"})
        if(!email) return res.status(400).send({status:false,msg:"Please enter Email"})
       const userFound= await Usermodel.find({name:name})
        if(userFound.length) return res.status(400).send({status:false,msg:"User Name is Found In DB"})
        let result= await Usermodel.create(data)
        res.status(201).send({state: true, data:result})
    }
    catch(err){
        res.status(500).send({state: false, msg:err.message})
    }


}


const GetUser=async function(req,res){
    try{
        let data=await Usermodel.find()
        res.status(200).send({state: true, data:data})
    }
  catch(err){
    res.status(500).send({state: false, msg:err.message})
  }
}






module.exports={CreateUser,GetUser}