import { prismaClient } from '../../database/client.js'

export class GetAllTipoSanguineoController {


    async handle(request, response) {

        const tipos_sanguineos = await prismaClient.tipo_Sanguineo.findMany({
            include: {
                pessoa: true
            }
        });

        return response.json(tipos_sanguineos);

    }

}