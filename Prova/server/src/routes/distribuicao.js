import { Router } from "express";
import { CreateDistribuicaoController } from '../controller/distribuicoes/CreateDistribuicaoController.js';
import { GetAllDistribuicaoController } from '../controller/distribuicoes/GetAllDistribuicaoController.js';
import { GetByIdDistribuicaoController } from '../controller/distribuicoes/GetByIdDistribuicaoController.js'


const distribuicaoRouter = Router();

const createDistribuicaoController = new CreateDistribuicaoController();
const getAllDistribuicaoController = new GetAllDistribuicaoController();
const getByIdDistribuicaoController = new GetByIdDistribuicaoController();

distribuicaoRouter.post('/distribuicoes', createDistribuicaoController.handle);
distribuicaoRouter.get('/distribuicoes', getAllDistribuicaoController.handle);
distribuicaoRouter.get('/distribuicoes/id/:id', getByIdDistribuicaoController.handle);


export { distribuicaoRouter }