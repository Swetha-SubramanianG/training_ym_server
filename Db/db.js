import mysql from 'mysql2/promise';
import dotenv from 'dotenv';


dotenv.config();
const db=mysql.createPool({
    host:process.env.SQL_HOST,
    database:process.env.SQL_DB,
    user:process.env.SQL_USER,
    password:process.env.SQL_PASSWORD,
    port:process.env.SQL_PORT,
    waitForConnections:true,
    connectionLimit:10,
    querylimit:0
});

export const connectDB=async()=>{
    try{
        const connection=await db.getConnection();//connecting express and mysql
        console.log('Database connected successfully');
        connection.release();

    }
    catch(err){
        console.error('Error connecting to the database:', err);
    }
}

export default db;
