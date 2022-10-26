import { Router } from "express";
import { CountExempColController } from "../controllers/Tela_Adm_Colecoes/CountExempColController.js";
import { UpdateNomeColController } from "../controllers/Tela_Adm_Colecoes/UpdateNomeColController.js";
import { DeleteColecaoController } from "../controllers/Tela_Adm_Colecoes/DeleteColecaoController.js";
import { CreateColecaoController } from "../controllers/Tela_Adm_Colecoes/CreateColecaoController.js";


const telaAdmColecoesRouter = Router();

const countExempColController = new CountExempColController();
const updateNomeColController = new UpdateNomeColController();
const deleteColecaoController = new DeleteColecaoController();
const createColecaoController = new CreateColecaoController();


telaAdmColecoesRouter.get('/admCol/countExempColecao', countExempColController.handle);
telaAdmColecoesRouter.get('/admCol/updNomeColecao', updateNomeColController.handle);
telaAdmColecoesRouter.get('/admCol/deleteColecao', deleteColecaoController.handle);
telaAdmColecoesRouter.get('/admCol/createColecao', createColecaoController.handle);

export { telaAdmColecoesRouter };