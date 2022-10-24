import { Router } from "express";
import { CreateProdutoController } from '../controller/produtos/CreateProdutoController.js';
import { GetAllProdutoController } from '../controller/produtos/GetAllProdutoController.js';
import { GetByIdProdutoController } from '../controller/produtos/GetByIdProdutoController.js';



const produtoRouter = Router();

const createProdutoController = new CreateProdutoController();
const getAllProdutoController = new GetAllProdutoController();
const getByIdProdutoController = new GetByIdProdutoController();


produtoRouter.post('/produtos', createProdutoController.handle);
produtoRouter.get('/produtos', getAllProdutoController.handle);
produtoRouter.get('/produtos/id/:id', getByIdProdutoController.handle);

export { produtoRouter }