import { modeloAlumnos } from "../models/alumno.model.js";

modeloAlumnos.create({
    name:"Jessica",
    apepat:"Yañez",
    edad:20
    })

 export const test=()=>{
        console.log("Se está mandando a llamar coreectamente el controlador")
    }