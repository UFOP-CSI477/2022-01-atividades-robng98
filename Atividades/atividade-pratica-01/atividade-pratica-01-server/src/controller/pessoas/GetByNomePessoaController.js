import { prismaClient } from "../../database/client.js";


export class GetByNomePessoaController {

    async handle(request, response) {
        const { nome } = request.params;

        const pessoa = await prismaClient.pessoa.findMany({
            where: {
                nome: nome
            },
            include:{
                tipo_sanguineo: true
            }
        });

        return response.json(pessoa);
    }
}