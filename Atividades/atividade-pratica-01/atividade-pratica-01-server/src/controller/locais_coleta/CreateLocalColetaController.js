import { prismaClient } from "../../database/client.js";

export class CreateLocalColetaController {


    async handle(request, response) {

        const { nome, rua, numero, complemento } = request.body;

        const local_Coleta = await prismaClient.local_Coleta.create({
            data: {
                nome,
                rua,
                numero,
                complemento
            }
        });
    
        return response.json(local_Coleta);

    }

}