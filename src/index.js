import app from './app.js';
import connectDb from './db/database.js';
// require('dotenv').config({path : './env'}) oR;
import dotenv from 'dotenv'; //to use this i have done experimental thing in package,json
dotenv.config({
    path:'./.env'
})

connectDb();


const port = process.env.PORT;

app.listen(port,()=>{
  
        console.log(`Server Successfully running on port ${port}`);
        app.on("error", (err) => {
        console.error("Server error:", err);
        process.exit(1);
    });
})

