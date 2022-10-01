import { prismaClient } from '../../database/client.js'

export class GetAllDoacaoController {


    async handle(request, response) {

        const doacao = await prismaClient.doacao.findMany();

        return response.json(doacao);

    }

}