import { prismaClient } from '../../database/client.js'

export class GetAllDoacaoController {


    async handle(request, response) {

        const doacao = await prismaClient.doacao.findMany({
            include: {
                pessoa: true,
                local_coleta: true
            }
        });

        return response.json(doacao);

    }

}