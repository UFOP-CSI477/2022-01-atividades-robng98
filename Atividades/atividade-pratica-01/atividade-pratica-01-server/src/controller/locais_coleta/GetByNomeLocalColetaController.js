import { prismaClient } from "../../database/client.js";

export class GetByNomeLocalColetaController {

    async handle(request, response) {
        const { nome } = request.params;

        const local_Coleta = await prismaClient.local_Coleta.findMany({
            where: {
                nome: nome
            }
        });

        return response.json(local_Coleta);
    }
}