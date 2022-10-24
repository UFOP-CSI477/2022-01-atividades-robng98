import { prismaClient } from '../../database/client.js'

export class GetAllDistribuicaoController {


    async handle(request, response) {

        const distribuicoes = await prismaClient.distribuicao.findMany({
            orderBy: [
                {
                    id: 'asc'
                },
                {
                    produto_id: 'asc'
                },
                {
                    unidade_id: 'asc'
                },
                {
                    data: 'asc'
                }
            ]
        });

        return response.json(distribuicoes);

    }

}