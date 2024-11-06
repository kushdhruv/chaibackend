import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
        unique: true,
        lowercase : true,
    },
    email:{
        type : String,
        required : true,
        unique : true,
    },
    password:{
        type : String,
        required : [true,"Password is must"],//if password not written then this mssage will be passed
        //THere are CUSTOM VALIDATORS also...refer GFG
    }
},{timestamps: true})
//this timestamps is built in object of mongoose which helps to track created_at and updated_at func.   
export const User = mongoose.model("User", userSchema) //<--("name in mongoose server",based on what)