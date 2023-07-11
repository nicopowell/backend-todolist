import mongoose, { Schema } from "mongoose";

const tareaSchema = new Schema({
    nombreTarea:{
        type: String,
        requiered: true,
        maxLenght: 100
    }
})

const Tarea = mongoose.model("tarea", tareaSchema)

export default Tarea