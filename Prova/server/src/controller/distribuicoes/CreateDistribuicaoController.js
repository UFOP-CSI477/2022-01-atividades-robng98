import { prismaClient } from "../../database/client.js";

export class CreateDistribuicaoController {

    // async/await 
    async handle(request, response) {

        const { produto_id, unidade_id } = request.body;

        const data = new Date().toISOString();

        const distribuicao = await prismaClient.distribuicao.create({
            data: {
                produto_id,
                unidade_id,
                data
            }
        });
        
        return response.json(distribuicao);

    }

}