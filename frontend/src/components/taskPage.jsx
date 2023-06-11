import { useEffect, useState } from "react";
import React from "react";

function TaskPage(){
    const [tasks,setTasks]=useState(["Exercise","meditation","DSA revision"]);

return(
        <>
            <h1>Today</h1>
            <div className="task-sec">
                {
                    tasks.length==0?<>Looks like you don't have any task today</>:
                    tasks.map((task,i)=>{
                    return (<p key={i}>
                        {task}
                    </p>)
                })}
            </div>
            <input type="text"/>
            <button>add</button>
        </>
    );
}

export default TaskPage;