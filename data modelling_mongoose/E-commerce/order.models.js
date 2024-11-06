import mongoose from "mongoose"

//mini Schema for items
const orderItemSchema=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:true
    }
})

const orderSchema=mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Client"
    },
    orderItems:{
      type:[orderItemSchema]  
    },
    address:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:["CANCELLED","PENDING","DELIVERED"], //IT IS USED TO GIVE CHOICES THAT...IN STRING ONLY ENUM VALUES CAN BE GIVEN...NOTHING ELSE
        default:"PENDING",
    }
},{timestamps:true})

export const Order=mongoose.model("Order",orderSchema)