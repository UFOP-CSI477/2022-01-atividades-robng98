import { prismaClient } from "../../database/client.js";

export class CreateDistribuicaoController {

    
    async handle(request, response) {

        const { produto_id, unidade_id } = request.body;

        const data = new Date().toISOString();

        const distribuicao = await prismaClient.distribuicao.create({
            data: {
                produto_id: parseInt(produto_id),
                unidade_id: parseInt(unidade_id),
                data
            }
        });
        
        return response.json(distribuicao);

    }

}