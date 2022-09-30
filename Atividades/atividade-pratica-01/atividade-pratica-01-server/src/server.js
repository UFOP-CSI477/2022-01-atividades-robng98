import express from "express";
import { estadoRouter } from "./routes/main.js";
import { cidadeRouter } from "./routes/cidades.js";

import cors from 'cors';

const app = express();
const PORT = 4001;//process.env.PORT;

app.use(express.json());
app.use(cors());

app.use(express.json());
app.use(estadoRouter);
app.use(cidadeRouter);

app.listen(PORT, () =>{
    console.log(`[SERVER] Server is running on port ${PORT}`);
})