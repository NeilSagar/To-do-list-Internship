import express from "express";


import { getAllTasks,addTask ,createTables,deleteTask} from "../controller/taskController.js";

const router=express.Router();



router.get("/createTables",createTables);

router.get("/getAllTasks",getAllTasks);
router.post("/addTask",addTask);
router.delete("/deleteTask/:task",deleteTask);

export default router;