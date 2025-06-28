import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()


const connectDB= async()=> {
try{

await mongoose.connect(process.env.MONGO_URI)
}catch(err){
console.log("failed to connect to db");

}
}

export default connectDB;