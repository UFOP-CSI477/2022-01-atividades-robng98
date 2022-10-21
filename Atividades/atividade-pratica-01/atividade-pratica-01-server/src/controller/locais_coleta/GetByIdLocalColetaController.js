import { prismaClient } from '../../database/client.js'

export class GetByIdLocalColetaController {

    async handle(request, response) {

        const { id } = request.params;
        const local_Coleta = await prismaClient.local_Coleta.findUnique({
            where: {
                id: parseInt(id)
            },
            include: {
                doacao: true
            }
        });

        return response.json(local_Coleta);
    }
}