import { useEffect, useState } from "react";
import React from "react";

import { addData,getAllInfo,deleteIt } from "../controller/controller";



function TaskPage(){
    const [tasks,setTasks]=useState([]);
    const [newTask,setNewTask]=useState("");

    function handleAdd(){
        if(newTask==="")return;
        addData(newTask);
        setNewTask("");
    }

    function handleInputChange(event){
        const value=event.target.value;
        setNewTask(value);
    }

    function handleDelete(event){
        const task_index=event.target.id;
        const task_name=tasks[task_index];
        deleteIt(task_name);
    }

    function enListTask(task,i){
        return (
            <div key={i}>

            <p style={{display:"inline-block"}} id={i} > {task.task_name}</p>
            <button id={i} onClick={handleDelete}>delete</button>

            </div>
        )
    }
    useEffect(()=>{
        getAllInfo(setTasks);
    },[tasks]);

return(
        <>
            <h1>Today</h1>
            <div className="task-sec">
                {
                    tasks.length===0?
                    <p>Looks like you don't have any task today</p>
                    :
                    tasks.map(enListTask)
                }
            </div>

            <div className="task-add-sec">
            <input type="text" name="newTask" value={newTask} onChange={handleInputChange}/>
            <button onClick={handleAdd}>add</button>
            </div>
        </>
    );
}

export default TaskPage;