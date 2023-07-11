import { validationResult } from "express-validator";
import Tarea from "../models/tarea";

export const crearTarea = async (req, res) => {
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

export const obtenerListaTareas = async (req, res) => {
    try {
        const tareas = await Tarea.find();
        res.status(200).json(tareas);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al intentar obtener las tareas",
        });
    }
};

export const obtenerTarea = async (req, res) => {
    try {
        const producto = await Tarea.findById(req.params.id);
        res.status(200).json(producto);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al intentar obtener la tarea",
        });
    }
};

export const borrarTarea = async (req, res) => {
    try {
        await Tarea.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: "La tarea fue eliminada correctamente",
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error, no se pudo borrar la tarea",
        });
    }
};

export const editarTarea = async (req, res) => {
    try {
        await Tarea.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            mensaje: "La tarea fue actualizada correctamente",
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error, no se pudo borrar el producto",
        });
    }
};