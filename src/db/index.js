import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";


const connectDB = async ()=>{
    try{
     const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
     console.log(`\n MongoDB connected !! DB host :${
        connectionInstance.connection.host}`);
     
    }
    catch(error){
        console.log("MONGODB connection error", error);
        process.exit(1)   //exit(1) means it process exits with an errorand exit(0) means it exits successfully without any error
        
       
    }
}

export default connectDB