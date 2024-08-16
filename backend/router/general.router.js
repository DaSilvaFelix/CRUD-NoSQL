import {Router} from 'express';
import { CreateEstudiante, deleterAlumnos, getAllStudien, updateAlumnos } from '../controllers/controller.estudiantes.js';

const router = Router();

router.get('/alumnos',getAllStudien);
router.post('/alumnos',CreateEstudiante);
router.delete('/alumnos/:id',deleterAlumnos);
router.put('/alumnos/:id',updateAlumnos)

export {router};