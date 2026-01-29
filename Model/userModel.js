import db from '../Db/db.js';
const table="users";

class UserModel{
    static async createUser({name,email,password}){
        const sql=`INSERT INTO ${table} (name,email,password) VALUES (?,?,?)`;
        const [result]=await db.query(sql,[name,email,password]);
        return result.insertId;
    }
    static async getAllUsersModel(){
        const sql=`SELECT * FROM ${table}`;
        const [rows]=await db.execute(sql);
        return rows;
    }
    static async updateUserPasswordModel(id, {password}){
        const sql=`UPDATE ${table} SET password=? WHERE id=?`;
        const[update]=await db.execute(sql,[password,id]);
        return update.affectedRows;
    }
    static async deleteUserModel(id){
        const sql=`DELETE FROM ${table} WHERE id=?`;
        const [delteUser]=await db.execute(sql,[id]);
        return delteUser.affectedRows;
    }
}
export default UserModel;       