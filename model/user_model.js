const mongoose=require("mongoose");

const mongoose_schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
},{timeStamps:true});

const user_model=mongoose.model("user_info",mongoose_schema);

module.exports={
    user_model
}