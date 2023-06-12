import { useEffect, useState } from "react";
import React from "react";
import AddIcon from '@mui/icons-material/Add';

import { addData,getAllInfo } from "../controller/controller";
import Task from "./task";
import styled from "@emotion/styled";




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

    

    function enListTask(task,i){
        return (
            <div key={i} className="task-item">

            <Task index={i} task={task}/>

            </div>
        )
    }
    useEffect(()=>{
        getAllInfo(setTasks);
    },[tasks]);

return(
        <div className="task-component">
            <h1 className="task-heading">Today</h1>
            <div className="task-content">
            <div className="task-sec">
                {
                    tasks.length===0?
                    <p className="message">Looks like you don't have any task today</p>
                    :
                    tasks.map(enListTask)
                }
            </div>
        
            <div className="task-add-sec">
            <input placeholder="What needs be done?" className="task-add-input" type="text" name="newTask" value={newTask} onChange={handleInputChange}/>
            <button className="task-add-button" onClick={handleAdd}><AddIcon/></button>
            </div>
            </div>
        </div>
    );
}

export default TaskPage;