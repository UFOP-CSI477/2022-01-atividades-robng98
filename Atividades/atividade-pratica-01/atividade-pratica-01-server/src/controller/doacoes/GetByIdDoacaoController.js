import { prismaClient} from '../../database/client.js'

export class GetByIdDoacaoController {

    async handle(request, response){

        const { id }= request.params;
        const doacao = await prismaClient.doacao.findUnique({
            where:{
                id: parseInt(id)
            },
            include: {
                pessoa: true,
                local_coleta: true
            }
            
        });

        return response.json(doacao);
    }
}