import cors from "cors"
import dotenv from "dotenv"
dotenv.config();

const allowed_origins=process.env.allowed_origins.split(",")

const corsOptions={
origin:(origin,callback)=>{
    if(!origin||allowed_origins.includes(origin)){
        callback(null,true)
    }
    else{
        console.log(`the origin : ${origin}`);
        
        callback(new Error("Not allowed by CORS"))
    }
},
optionsSuccessStatus:200,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
}
export default corsOptions;


