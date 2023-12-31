import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true,
    }
},{
    timestamps:true
})

const User = mongoose.model('User',UserSchema);
export default User