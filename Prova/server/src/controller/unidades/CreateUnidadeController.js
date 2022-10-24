import { prismaClient } from "../../database/client.js";

export class CreateUnidadeController {

    // async/await 
    async handle(request, response) {

        const { nome, numero, complemento } = request.body;

        // const validade_date = new Date(`${validade}`)

        const unidade = await prismaClient.unidade.create({
            data: {
                nome,
                numero,
                complemento
            }
        });

        return response.json(unidade);

    }

}