import { prismaClient } from '../../database/client.js'

export class GetByIdUnidadeController {

    async handle(request, response) {

        const { id } = request.params;
        const unidade = await prismaClient.unidade.findUnique({
            where: {
                id: parseInt(id)
            },
            include: {
                distribuicao: true
            }
        });

        return response.json(unidade);
    }
}