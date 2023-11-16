const express=require("express");
const router=express.Router();

const {login_controller,signup_controller}=require("../controllers/controller")

router.get("/",(req,res)=>{
    res.render("login");
    })

    .get("/signup",(req,res)=>{
        res.render("signup");
    })
    .post("/login",login_controller)
 
    .post("/signup",signup_controller)


    module.exports={
        router
    }