// require('dotenv').config({path:'./env'});
import dotenv from 'dotenv'
import connectDB from "./db/index.js";

import express from 'express';
const app = express()

dotenv.config({ path: './env' })

connectDB();
//1st way to connect to DB
//IFE function->to execute immediately
// ;(async()=>{
//     try{
//         await mongoose.connect(`${process.env.PORT}/${DB_NAME}`)

//         //if app couldn't able to connect to db for some purpose then give that erro
//         app.on("error",(error)=>{
//             console.log("Error in DB Connection:",error)
//             throw error
//         })

//         //If db connection is successfull
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening in Port ${process.env.PORT}`)
//         })

//     }catch(err){
//         console.log("Error:",err);
//          throw err
//     }
// })()


