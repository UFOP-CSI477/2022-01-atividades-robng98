import { prismaClient } from '../../database/client.js'

export class GetAllPessoaController {


    async handle(request, response) {

        const pessoa = await prismaClient.pessoa.findMany({
            include: {
                doacao: true
            }
        });

        return response.json(pessoa);

    }

}