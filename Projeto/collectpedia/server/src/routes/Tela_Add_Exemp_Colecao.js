import { Router } from "express";
import { CreateExempColController } from "../controllers/Tela_Add_Exemp_Colecao/CreateExempColController.js";
import { CreateAgregaExempController } from "../controllers/Tela_Add_Exemp_Colecao/CreateAgregaExempController.js";

// import { AuthMiddleware } from "../middleware/AuthMiddleware.js"

const telaAddExempColecaoRouter = Router();

const createExempColController = new CreateExempColController();
const createAgregaExempController = new CreateAgregaExempController();

// const authMiddleware = new AuthMiddleware();

telaAddExempColecaoRouter.post('/addExempColecao', createExempColController.handle);
telaAddExempColecaoRouter.post('/agregaExempColecao', createAgregaExempController.handle);

export { telaAddExempColecaoRouter };