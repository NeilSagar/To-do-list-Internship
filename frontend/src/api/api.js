import axios from "axios";

const URL="http://localhost:5000";

export const getAllTasks=async()=>{
    try {
        const response=await axios.get(URL+"/getAllTasks");
        return response;
    } catch (error) {
        console.log("Error while fetching tasks:",error);
        return error;
    }
}

export const addTask=async(newTask)=>{
    const data={task:newTask};
    try {
        const response=await axios.post(URL+"/addTask",data);
        return response;
    } catch (error) {
        console.log("Error while adding task:",error);
        return error;
    }
}

export const deleteTask=async(task)=>{
    const taskname=task.task_name;
    console.log(task);
    try {
        const response=await axios.delete(URL+"/deleteTask/"+taskname);
    } catch (error) {
        console.log("Error while deleting task:",error);
    }
}