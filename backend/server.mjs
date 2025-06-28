import express from "express"
const app=express();
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();
import connectDB from "./config/connectDB.mjs"

import registerRouter from "./routes/register.mjs"
import corsOptions from "./config/corsOptions.mjs";
import cors from "cors"
import logEvents from "./middleware/logger.js"
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
connectDB();
const PORT=process.env.PORT
const HOST=process.env.HOST
app.use((req,res,next)=>{
logEvents(`Request ${req.method} from ${req.origin} requesting : ${req.url} `,"events.log")
next();
})

app.use("/signup",registerRouter)

app.use((err, req, res, next) => {
  console.error(`An error occurred: ${err.message}`);
  logEvents(
    `Error ${err.message}, caused by ${err.origin} ${err.stack}`,
    "error.log"
  );

  res.status(500).json({ message: "Internal Server Error" });
});


mongoose.connection.once("open",()=>{
    console.log(`✅ Connected to MONGODB`);
    app.listen(PORT,()=>{
    console.log(`✅ Server Running on http://${HOST}:${PORT}`);
    
})
    
})
