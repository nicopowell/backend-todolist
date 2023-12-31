import { Router } from "express";
import { check } from "express-validator";
import validarTarea from "../helpers/validarTarea";
import { borrarTarea, crearTarea, editarTarea, obtenerListaTareas, obtenerTarea } from "../controllers/tareas.controllers";

const router = Router();

router.route("/").get(obtenerListaTareas).post(validarTarea, crearTarea)
router.route("/:id").get(obtenerTarea).delete(borrarTarea).put(editarTarea)

export default router