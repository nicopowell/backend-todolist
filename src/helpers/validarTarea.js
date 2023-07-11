import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarTarea = [
    check("nombreTarea")
        .notEmpty()
        .withMessage("El nombre de la tarea es un dato obligatorio")
        .isLength({ max: 100 })
        .withMessage("El nombre del producto debe contener como maximo 100 caracteres"),
    (req, res, next) => {
        resultadoValidacion(req, res, next);
    },
];

export default validarTarea;
