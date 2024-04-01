import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
    try {
        const connectInstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
        console.log(`\n MongoDB Connected!! DB HOST: ${connectInstance.connection.host}`)
    } catch (err) {
        console.log("MongoDB Connection Error:", err);
        throw err
    }
}

export default connectDB;