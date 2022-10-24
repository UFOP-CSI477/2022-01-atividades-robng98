import express from 'express';
import { mainRouter } from './routes/main.js';

import cors from 'cors';
import { produtoRouter } from './routes/produto.js';
import { distribuicaoRouter } from './routes/distribuicao.js'
import { unidadeRouter } from './routes/unidade.js'

const PORT = process.env.PORT || 5009;

const app = express();

app.use(express.json());
app.use(cors());

app.use(mainRouter);
app.use(produtoRouter);
app.use(distribuicaoRouter);
app.use(unidadeRouter);

app.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}`);
})