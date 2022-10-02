import { Router } from "express";
import { CreateLocalColetaController } from '../controller/locais_coleta/CreateLocalColetaController.js';
import { GetAllLocalColetaController } from '../controller/locais_coleta/GetAllLocalColetaController.js';
import { GetByIdLocalColetaController } from '../controller/locais_coleta/GetByIdLocalColetaController.js';
import { GetByNomeLocalColetaController } from "../controller/locais_coleta/GetByNomeLocalColetaController.js";
import { UpdateLocalColetaController } from '../controller/locais_coleta/UpdateLocalColetaController.js';
import { DeleteLocalColetaController } from '../controller/locais_coleta/DeleteLocalColetaController.js';

const local_ColetaRouter = Router();

const createLocalColetaController = new CreateLocalColetaController();
const getAllLocalColetaController = new GetAllLocalColetaController();
const getByIdLocalColetaController = new GetByIdLocalColetaController();
const getByNomeLocalColetaController = new GetByNomeLocalColetaController();
const updateLocalColetaController = new UpdateLocalColetaController();
const deleteLocalColetaController = new DeleteLocalColetaController();

local_ColetaRouter.post('/locais_coleta', createLocalColetaController.handle);
local_ColetaRouter.get('/locais_coleta', getAllLocalColetaController.handle);
local_ColetaRouter.get('/locais_coleta/id/:id', getByIdLocalColetaController.handle);
local_ColetaRouter.get('/locais_coleta/nome/:nome', getByNomeLocalColetaController.handle);

local_ColetaRouter.put('/locais_coleta', updateLocalColetaController.handle);

local_ColetaRouter.delete('/locais_coleta', deleteLocalColetaController.handle);

export { local_ColetaRouter }