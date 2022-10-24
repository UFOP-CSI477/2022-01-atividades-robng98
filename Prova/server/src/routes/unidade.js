import { Router } from "express";
import { CreateUnidadeController } from '../controller/unidades/CreateUnidadeController.js';
import { GetAllUnidadeController } from '../controller/unidades/GetAllUnidadeController.js';
import { GetByIdUnidadeController } from '../controller/unidades/GetByIdUnidadeController.js';



const unidadeRouter = Router();

const createUnidadeController = new CreateUnidadeController();
const getAllUnidadeController = new GetAllUnidadeController();
const getByIdUnidadeController = new GetByIdUnidadeController();


unidadeRouter.post('/unidades', createUnidadeController.handle);
unidadeRouter.get('/unidades', getAllUnidadeController.handle);
unidadeRouter.get('/unidades/id/:id', getByIdUnidadeController.handle);

export { unidadeRouter }