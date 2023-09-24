import mongoose from "mongoose"

const mongoConnect = ()=>{
    mongoose.connect('mongodb+srv://UditGoyal0012:Royalboy0012@cluster0.seioabj.mongodb.net/?retryWrites=true&w=majority').then(()=>{console.log("Connected to database successfully")})
}

export default mongoConnect