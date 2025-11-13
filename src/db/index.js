import mongoose from "mongoose";
import app from "../app.js";
import {DB_NAME} from "../constants.js"
import dotenv from "dotenv";
dotenv.config();


const connectDB = async()=>{
    try{
        const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`db connected successfully to ${connectioninstance.connection.host}`)
        app.on('error',(error)=>{
            console.error("error",error)
            process.exit(1);
        })

        
    }
    catch(error){
        console.error("could not connect to db",error);
        process.exit(1);
    }
}
export default connectDB;