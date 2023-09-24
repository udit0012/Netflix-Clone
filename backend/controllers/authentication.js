import User from "../models/User.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

export const emailChecker = async(req,res)=>{
    const {email} = req.body
    try {
        const user = await User.findOne({email})
        if(user){
            return res.status(200).json({msg:"Success",data:{userExists:true,error:null}});
        }
        return res.status(200).json({msg:"Success",data:{userExists:false},error:null});
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:"Failed",data:null,error:{serverError:true}})
    }
}
export const login = async(req,res)=>{
    const {email,password} = req.body
    try {
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({msg:"Failed",data:null,error:{userExists:false}})
        }
        const pass = await bcrypt.compare(password,user.password);
        if(!pass){
            return res.status(400).json({msg:"Failed",data:null,error:{password:false}})

        }
        const data = {
            user:{
                id:user.id
            }
        }
        const authToken = jwt.sign(data,process.env.JWT_SECRET_KEY);
        return res.status(200).json({msg:"Success",data:{authToken,email},error:null})

    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:"Failed",data:null,error:{serverError:true}})
    }
}
export const register = async(req,res)=>{
    const {email,password} = req.body
    const session = await mongoose.startSession()
    try {
        session.startTransaction()
        let user = await User.findOne({email}).session(session)
        if(user){
            await session.abortTransaction()
            session.endSession()
            return res.status(400).json({msg:"Failed",data:null,error:{userExists:true}})
        }
        const hashPass = await bcrypt.hash(password,10);
        user = await User.create([{
            email,password:hashPass
        }],{session})
        
        const data = {
            user:{
                id:user[0].id
            }
        }
        const authToken = jwt.sign(data,process.env.JWT_SECRET_KEY);
        await session.commitTransaction()
        session.endSession()
        return res.status(200).json({msg:"Success",data:{authToken,email},error:null})

    } catch (error) {
        console.log(error);
        await session.abortTransaction()
        session.endSession()
        return res.status(500).json({msg:"Failed",data:null,error:{serverError:true}})
    }
}