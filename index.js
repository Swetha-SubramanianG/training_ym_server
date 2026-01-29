import {connectDB} from './Db/db.js';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoute from './Routes/userRoutes.js';


dotenv.config();
const app=express();
const PORT=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



connectDB();
app.use('/api/users',userRoute);
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});