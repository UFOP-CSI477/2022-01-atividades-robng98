import express from 'express';
import { mainRouter } from './routes/main.js';
import { tipo_SanguineoRouter } from './routes/tipo_Sanguineo.js';
import { local_ColetaRouter } from './routes/local_Coleta.js';
import { pessoaRouter } from './routes/pessoa.js';
import { doacaoRouter } from './routes/doacao.js';

import cors from 'cors';

const PORT = 4001; //process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.use(mainRouter);
app.use(tipo_SanguineoRouter);
app.use(local_ColetaRouter);
app.use(pessoaRouter);
app.use(doacaoRouter);
// app.use(cidadeRouter);

app.listen(PORT, () =>{
    console.log(`[SERVER] Server is running on port ${PORT}`);
})