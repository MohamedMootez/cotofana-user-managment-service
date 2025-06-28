import mongoose from "mongoose";

const Schema=mongoose.Schema;

const usersSchema = new Schema({

    username:{
        type:String,
        required:true,
    },
    roles:{
        User:{
            type:Number,
            default:2001
        },
        Editor:Number,
        Admin:Number,

    },
    password:{
        type:String,
        required:true,
    },
    refreshToken:{
        type:String,
        required:false,
    }
})
export default mongoose.model("User",usersSchema)