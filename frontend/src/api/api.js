import axios from "axios";

const URL="";
export const getAllTasks=async()=>{
    try {
        const response=await axios.get(URL+"/getAllTasks");
        return response;
    } catch (error) {
        console.log("Error while fetching tasks:",error);
        return error;
    }
}