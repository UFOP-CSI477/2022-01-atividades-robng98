import { Router } from "express";
import { CreatePessoaController } from '../controller/pessoas/CreatePessoaController.js';
import { GetAllPessoaController } from '../controller/pessoas/GetAllPessoaController.js';
import { GetByIdPessoaController } from '../controller/pessoas/GetByIdPessoaController.js';
import { GetByNomePessoaController } from "../controller/pessoas/GetByNomePessoaController.js";
import { UpdatePessoaController } from '../controller/pessoas/UpdatePessoaController.js';
import { DeletePessoaController } from '../controller/pessoas/DeletePessoaController.js';



const pessoaRouter = Router();

const createPessoaController = new CreatePessoaController();
const getAllPessoaController = new GetAllPessoaController();
const getByIdPessoaController = new GetByIdPessoaController();
const getByNomePessoaController = new GetByNomePessoaController();
const updatePessoaController = new UpdatePessoaController();
const deletePessoaController = new DeletePessoaController();


pessoaRouter.post('/pessoas', createPessoaController.handle);
pessoaRouter.get('/pessoas', getAllPessoaController.handle);
pessoaRouter.get('/pessoas/id/:id', getByIdPessoaController.handle);
pessoaRouter.get('/pessoas/nome/:nome', getByNomePessoaController.handle);
pessoaRouter.put('/pessoas', updatePessoaController.handle);

pessoaRouter.delete('/pessoas', deletePessoaController.handle);

export { pessoaRouter }