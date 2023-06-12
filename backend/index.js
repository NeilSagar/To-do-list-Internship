import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import router from "./Routes/routes.js"
import {connectMysql} from "./db/connection.js";

const app=express();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use("/",router);



const PORT=5000;

connectMysql();

app.listen(PORT,console.log("bankend-server started at "+PORT));