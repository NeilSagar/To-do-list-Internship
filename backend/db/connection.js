import mysql from "mysql";

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"tasktodoDB"
});

const connectMysql=async()=>{
    db.connect((err)=>{
        if(err){
            throw err;
        }
        console.log("MySql connected...");
    });
}

export  {connectMysql,db};