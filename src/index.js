import app from './app.js';
import connectDb from './db/database.js';
// require('dotenv').config({path : './env'}) oR;
import dotenv from 'dotenv'; //to use this i have done experimental thing in package,json
dotenv.config({
    path:'./.env'
})

const port = process.env.PORT;

connectDb()
.then(() => {
    app.listen(port,()=>{
        console.log(`Server running successfull on port ${port}`);
    })
    app.on("error",(error) => {
        console.log("Error in running server", error);
    })
})
.catch((e) => {
    console.log("Error in connecting mongoDb",e);
});


