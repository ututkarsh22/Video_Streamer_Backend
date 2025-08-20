import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async () => {
    try{
        const connectionHost = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Database connected successfully!!  DB_HOST : ${connectionHost.connection.host}`) //ye connection host ka information deta h
    }
    catch(e)
    {
        console.log("Mongo connection error",e);
        process.exit(1); //exit ke baare me pdhna h 
    }
}

export default connectDb;