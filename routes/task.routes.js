import { Router } from 'express';
import { completeTask, createTask, deleteTask, editTask, getAllTask } from '../controllers/task.controller.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router = Router();

router.use(verifyJWT);

router.post('/tasks', createTask);

router.get('/tasks', getAllTask);

router.patch('/tasks/:id/complete', completeTask);

router.put('/tasks/:id', editTask);

router.delete('/tasks/:id', deleteTask);

export default router;