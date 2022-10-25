import { Router } from "express";
import { ColecoesInfoController } from "../controllers/Tela_Usuario/ColecoesInfoController.js";
import { StatusEditNumExempController } from "../controllers/Tela_Usuario/StatusEditNumExempController.js";
import { CountStatusPubController } from "../controllers/Tela_Usuario/CountStatusPubController.js";
import { CountColGeneroController } from "../controllers/Tela_Usuario/CountColGeneroController.js";
import { CountRoteiristaController } from "../controllers/Tela_Usuario/CountRoteiristaController.js";
import { CountMangakaController } from "../controllers/Tela_Usuario/CountMangakaController.js";
import { CountDesenhistaController } from "../controllers/Tela_Usuario/CountDesenhistaController.js";
import { CountDemografiaController } from "../controllers/Tela_Usuario/CountDemografiaController.js";
import { CountExempMesController } from "../controllers/Tela_Usuario/CountExempMesController.js";


const telaUsuarioRouter = Router();

const colecoesInfoController = new ColecoesInfoController();
const statusEditNumExempController = new StatusEditNumExempController();
const countStatusPubCController = new CountStatusPubController();
const countColGeneroController = new CountColGeneroController();
const countRoteiristaController = new CountRoteiristaController();
const countMangakaController = new CountMangakaController();
const countDesenhistaController = new CountDesenhistaController();
const countDemografiaController = new CountDemografiaController();
const countExempMesController = new CountExempMesController();


telaUsuarioRouter.get('/colecoes/:email', colecoesInfoController.handle);
telaUsuarioRouter.get('/editExemp/', statusEditNumExempController.handle);
telaUsuarioRouter.get('/countStatusPub/', countStatusPubCController.handle);
telaUsuarioRouter.get('/countGeneros/', countColGeneroController.handle);
telaUsuarioRouter.get('/countRoteirista/', countRoteiristaController.handle);
telaUsuarioRouter.get('/countMangaka/', countMangakaController.handle);
telaUsuarioRouter.get('/countDesenhista/', countDesenhistaController.handle);
telaUsuarioRouter.get('/countDemografia/', countDemografiaController.handle);
telaUsuarioRouter.get('/countExempMes/', countExempMesController.handle);


export { telaUsuarioRouter };