import express from 'express';
import mongoose from 'mongoose';   
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MONGO DB connected: ${conn.connection.host}` );
    }catch(error){
        console.log("error connecting to MONGO DB: ", error.message);
        process.exit(1); 
    }
}