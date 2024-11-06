import mongoose from "mongoose"

const nameSchema=new mongoose.Schema({
    //here we define all contents , etc
},{timestamps:true}/* this is written to track the time createdAt and updatedAt*/)

export const  Name/*Name by which it will be saved in mongoose*/= mongoose.model("Name"/*Name by which it will be saved in mongoose*/,nameSchema /*which was defined earlier*/)


//this is basic structure followed in every schema