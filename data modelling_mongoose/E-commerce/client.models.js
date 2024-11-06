import mongoose from "mongoose"

const clientSchema = new mongoose.Schema({
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
        required : [true,"Password is must"],
    }
},{timestamps: true})   
export const Client = mongoose.model("Client", clientSchema)