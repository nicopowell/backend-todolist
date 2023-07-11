import { validationResult } from "express-validator";
import Tarea from "../models/tarea";

export const crearProducto = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errores: errors.array(),
            });
        }

        const nuevaTarea = new Tarea(req.body);
        await nuevaTarea.save();
        res.status(201).json({
            mensaje: "La tarea fue creada correctamente",
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al intentar crear una tarea",
        });
    }
};