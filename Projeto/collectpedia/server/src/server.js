import express from "express";
import cors from "cors";
import { mainRouter } from "./routes/main.js";
import { telaInicialRouter } from "./routes/tela_inicial.js";
import { telaSerieRouter } from "./routes/tela_serie.js";

const PORT = 4002;

const app = express();

app.use(express.json());
app.use(cors());

app.use(mainRouter);
app.use(telaInicialRouter);
app.use(telaSerieRouter);

app.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}`);
})
