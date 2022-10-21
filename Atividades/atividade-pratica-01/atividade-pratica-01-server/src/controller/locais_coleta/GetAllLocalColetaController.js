import { prismaClient } from '../../database/client.js'

export class GetAllLocalColetaController {


    async handle(request, response) {

        const local_Coleta = await prismaClient.local_Coleta.findMany({
            include: {
                doacao: true
            }

        });

        return response.json(local_Coleta);

    }

}