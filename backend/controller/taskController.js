
import sql_createTask_table from "../schemas/taskSchema.js";
import { db } from "../db/connection.js";

export const createTables=async(req,res)=>{
    db.query(sql_createTask_table,(err,result)=>{
        if(err){
            throw err;
        }
        console.log(result);
    });
    
    res.send("Successfully created tables");
}



export const addTask=(req,res)=>{
    const taskInfo=req.body;
    const dataToInsert={task_name:taskInfo.task};
    const sql="INSERT INTO tasks SET ?";

    db.query(sql,dataToInsert,(err,result)=>{
        if(err)throw err;
        console.log("new task added:",taskInfo.task);
    });
}

export const getAllTasks=(req,res)=>{
    const sql="SELECT task_name FROM tasks";
    db.query(sql,(err,result)=>{
        if(err)throw err;
        res.status(201).json(result);
    });
}

export const deleteTask=(req,res)=>{
    const taskname=req.params.task;
    const conditions={task_name:taskname};
    const sql="DELETE FROM tasks WHERE ?";
    db.query(sql,conditions,(err,result)=>{
        if(err)throw err;
        console.log("deleted task");
        res.status(201).json({message:"Successfully deleted task."});
    });
}