import { prismaClient } from "../../database/client.js";

export class CreateUnidadeController {


    async handle(request, response) {

        const { nome, numero, complemento } = request.body;

        

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