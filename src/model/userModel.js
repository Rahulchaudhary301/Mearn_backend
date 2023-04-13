const mongoose=require("mongoose")

const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim:true
    },
    age:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        trim:true
    },
    mobile:{
        type:String,
        require:true,
        trim:true
    }

},{timestamps:true});

module.exports= mongoose.model('User',UserSchema)