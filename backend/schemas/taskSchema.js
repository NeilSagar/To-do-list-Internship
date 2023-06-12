import mysql from "mysql";

import { db } from "../db/connection.js";

const sql_createTask_table="CREATE TABLE tasks(id int AUTO_INCREMENT, task_name VARCHAR(50), PRIMARY KEY(id))";


export default sql_createTask_table;