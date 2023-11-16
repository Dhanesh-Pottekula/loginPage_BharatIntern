const express = require('express');

const app = express();
app.use(express.json()); 

const {user_model}=require("../model/user_model");


async function login_controller(req,res){
    if (req.body){
        const {email,password}=  req.body;
        const user= await user_model.findOne({email,password});
        if (!user){
            res.render("login",{error:"invalid email or password",
            })
        }
        else{
            res.render("app");
    }
}
else if (!req.body){
    res.render("login",{error:"something was wrong"})
}
}

async function signup_controller(req,res){
    const {name="",email="",password=""}= req.body || {};
   try{
    await user_model.create({
        name,
        email,
        password
    })
    res.render("login")
   }catch(error){res.render("signup",{
    message:"duplicate email is detected"
   });}
    
}

module.exports={login_controller,signup_controller}