import { prismaClient } from '../../database/client.js'

export class UpdateLocalColetaController {


    async handle( request, response ) {

        const { id, nome, rua, numero, complemento } = request.body;
        const updated_at = new Date().toISOString();

        const local_Coleta = await prismaClient.local_Coleta.update({

            where: {
                id: id
            }, 
            data: {
                nome,
                rua,
                numero,
                complemento,
                updated_at: updated_at
            }

        });

        return response.json(local_Coleta);

    }

}