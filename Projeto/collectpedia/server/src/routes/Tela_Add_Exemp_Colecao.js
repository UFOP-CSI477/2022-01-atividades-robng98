import { Router } from "express";
import { CreateExempColController } from "../controllers/Tela_Add_Exemp_Colecao/CreateExempColController.js";

import { AuthMiddleware } from "../middleware/AuthMiddleware.js"

const telaAddExempColecaoRouter = Router();

const createExempColController = new CreateExempColController();

const authMiddleware = new AuthMiddleware();

telaAddExempColecaoRouter.get('/addExempColecao', createExempColController.handle);

export { telaAddExempColecaoRouter };