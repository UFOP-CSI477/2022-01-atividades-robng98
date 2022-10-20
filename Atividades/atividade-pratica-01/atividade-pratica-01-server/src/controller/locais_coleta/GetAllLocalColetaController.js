import { prismaClient } from '../../database/client.js'

export class GetAllLocalColetaController {


    async handle(request, response) {

        const local_Coleta = await prismaClient.local_Coleta.findMany();

        return response.json(local_Coleta);

    }

}