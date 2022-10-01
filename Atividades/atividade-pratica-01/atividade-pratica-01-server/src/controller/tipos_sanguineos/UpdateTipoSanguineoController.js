import { prismaClient } from '../../database/client.js'

export class UpdateTipoSanguineoController {


    async handle( request, response ) {

        const { id, tipo, fator } = request.body;
        const updated_at = new Date().toISOString();

        const tipo_Sanguineo = await prismaClient.tipo_Sanguineo.update({

            where: {
                id: id
            }, 
            data: {
                tipo, 
                fator,
                updated_at: updated_at
            }

        });

        return response.json(tipo_Sanguineo);

    }

}