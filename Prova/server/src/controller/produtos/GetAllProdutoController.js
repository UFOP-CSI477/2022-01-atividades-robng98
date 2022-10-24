import { prismaClient } from '../../database/client.js'

export class GetAllProdutoController {


    async handle(request, response) {

        const produtos = await prismaClient.produto.findMany({
            orderBy: [
                {
                    etiqueta: 'asc'
                },
                {
                    validade: 'asc'
                }
            ],
            include: {
                distribuicao: true
            }
        });

        return response.json(produtos);

    }

}