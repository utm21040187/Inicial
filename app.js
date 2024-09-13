
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { test } from "./backend/controllers/alumno.controller.js";

dotenv.config();

mongoose.connect(process.env.urlbd)
.then(()=>{
    console.log("funciona la conexión a la base de datos")
})

.catch ((error)=>{
    console.log("No funciona la conexión a la base de datos", error)
})

const app=express();
app.use(cors())

app.listen(4000, ()=>{
    console.log("se escucha correctamente el servidor, no se escucha borroso")
})

test()