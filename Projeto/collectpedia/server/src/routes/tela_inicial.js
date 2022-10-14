import { Router } from "express";
import { BuscaComicsController } from "../controllers/Tela_Inicial/BuscaComicsController.js";
import { BuscaMangaController } from "../controllers/Tela_Inicial/BuscaMangaController.js";
import { HQsRecentesController} from "../controllers/Tela_Inicial/HQsRecentesController.js";

const telaInicialRouter = Router();

const buscaComicsController = new BuscaComicsController();
const buscaMangaController = new BuscaMangaController();
const hqsRecentesController = new HQsRecentesController();

telaInicialRouter.get('/b_comics/:busca', buscaComicsController.handle);
telaInicialRouter.get('/b_manga/:busca', buscaMangaController.handle);
telaInicialRouter.get('/recentes', hqsRecentesController.handle);

export { telaInicialRouter };