import { prismaClient } from '../../database/client.js'

export class GetAllUnidadeController {


    async handle(request, response) {

        const unidades = await prismaClient.unidade.findMany({
            orderBy: [
                {
                    nome: 'asc'
                },
                {
                    numero: 'asc'
                },
                {
                    complemento: 'asc'
                }
            ],
            include: {
                distribuicao: true
            }
        });

        return response.json(unidades);

    }

}