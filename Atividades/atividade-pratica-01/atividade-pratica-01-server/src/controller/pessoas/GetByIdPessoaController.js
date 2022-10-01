import { prismaClient } from '../../database/client.js'

export class GetByIdPessoaController {

    async handle(request, response) {

        const { id } = request.params;
        const pessoa = await prismaClient.pessoa.findUnique({
            where: {
                id: parseInt(id)
            },
            include:{
                doacao: true
            }

        });

        return response.json(pessoa);
    }
}