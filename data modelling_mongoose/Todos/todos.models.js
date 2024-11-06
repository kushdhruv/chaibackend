import mongoose from "mongoose"

const todoSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    complete:{
        type:Boolean,
        default:false,
    },//it act as an check mark and become true if all done
    createdBy:{
        type:mongoose.Schema.Types.ObjectId, // it is written when we have to refer another file
        ref:"User", // just after it we have to enter the name by which it was saved in mongoose by us"
    },//this will track users
    subTodos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"SubTodos"
        }
    ],//here we used [] to make it an array
    //Array of SubTodos
},{timestamps:true})

export const  Todo = mongoose.model("Todo",todoSchema)