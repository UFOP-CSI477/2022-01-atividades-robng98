import { prismaClient} from '../../database/client.js'

export class GetByIdDistribuicaoController {

    async handle(request, response){

        const { id }= request.params;
        const distribuicao = await prismaClient.distribuicao.findUnique({
            where:{
                id: parseInt(id)
            }
        });

        return response.json(distribuicao);
    }
}