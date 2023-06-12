import { getAllTasks,addTask, deleteTask } from "../api/api";

async function addData(newTask){
    await addTask(newTask);
}

async function getAllInfo(setTasks){
    const response=await getAllTasks();
    if(response.status===201){
        const res_tasks=response.data;
        setTasks(res_tasks);
    }
}

async function deleteIt(task_name){
    await deleteTask(task_name);
}

export {addData,getAllInfo,deleteIt};