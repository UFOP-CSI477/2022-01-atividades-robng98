import { prismaClient } from '../../database/client.js'

export class GetAllTipoSanguineoController {


    async handle(request, response) {

        const tipos_sanguineos = await prismaClient.tipo_Sanguineo.findMany({
            orderBy: [
                {
                    tipo: 'asc'
                },
                {
                    fator: 'asc'
                }
            ]
        });

        return response.json(tipos_sanguineos);

    }

}