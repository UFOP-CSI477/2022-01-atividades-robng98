import {Router} from "express";
import {CreateTipoSanguineoController} from '../controller/tipos_sanguineos/CreateTipoSanguineoController.js';
import {GetAllTipoSanguineoController} from '../controller/tipos_sanguineos/GetAllTipoSanguineoController.js';
import {GetByIdTipoSanguineoController} from '../controller/tipos_sanguineos/GetByIdTipoSanguineoController.js';
import {UpdateTipoSanguineoController} from '../controller/tipos_sanguineos/UpdateTipoSanguineoController.js';
import {DeleteTipoSanguineoController} from '../controller/tipos_sanguineos/DeleteTipoSanguineoController.js';

const tipo_SanguineoRouter = Router();

const createTipoSanguineoController = new CreateTipoSanguineoController();
const getAllTipoSanguineoController = new GetAllTipoSanguineoController();
const getByIdTipoSanguineoController = new GetByIdTipoSanguineoController();
const updateTipoSanguineoController = new UpdateTipoSanguineoController();
const deleteTipoSanguineoController = new DeleteTipoSanguineoController();

tipo_SanguineoRouter.post('/tipos_sanguineos', createTipoSanguineoController.handle);
tipo_SanguineoRouter.get('/tipos_sanguineos', getAllTipoSanguineoController.handle);
tipo_SanguineoRouter.get('/tipos_sanguineos/id/:id', getByIdTipoSanguineoController.handle);

tipo_SanguineoRouter.put('/tipos_sanguineos', updateTipoSanguineoController.handle);

tipo_SanguineoRouter.delete('/tipos_sanguineos', deleteTipoSanguineoController.handle);

export {tipo_SanguineoRouter}