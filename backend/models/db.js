import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

const mongoConnect = ()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{console.log("Connected to database successfully")})
}

export default mongoConnect