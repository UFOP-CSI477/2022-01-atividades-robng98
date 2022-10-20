import { prismaClient} from '../../database/client.js'

export class GetByIdTipoSanguineoController {

    async handle(request, response){

        const { id }= request.params;
        const tipo_Sanguineo = await prismaClient.tipo_Sanguineo.findUnique({
            where:{
                id: parseInt(id)
            }
        });

        return response.json(tipo_Sanguineo);
    }
}