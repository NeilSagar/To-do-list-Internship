import { useEffect, useState } from "react";
import React from "react";

import { getAllTasks,addTask, deleteTask } from "../api/api";



function TaskPage(){
    const [tasks,setTasks]=useState([]);
    const [newTask,setNewTask]=useState("");
    async function handleAdd(){
        if(newTask==="")return;
        const task={task:newTask};
        await addTask(task);
    }
    async function getAllInfo(){
        const response=await getAllTasks();
        if(response.status===201){
            const res_tasks=response.data;
            setTasks(res_tasks);
        }
    }
    function handleInputChange(event){
        const value=event.target.value;
        setNewTask(value);
    }

    async function handleDelete(event){
        const task_index=event.target.id;
        const task_name=tasks[task_index];
        
        await deleteTask(task_name);
    }

    useEffect(()=>{
        getAllInfo();
    },[tasks]);

return(
        <>
            <h1>Today</h1>
            <div className="task-sec">
                {
                    tasks.length===0?<>Looks like you don't have any task today</>:
                    tasks.map((task,i)=>{
                    return (
                        <div key={i}>

                        <p style={{display:"inline-block"}} id={i} > {task.task_name}</p>
                        <button id={i} onClick={handleDelete}>delete</button>

                        </div>
                        )
                })}
            </div>
            <input type="text" name="newTask" value={newTask} onChange={handleInputChange}/>
            <button onClick={handleAdd}>add</button>
        </>
    );
}

export default TaskPage;