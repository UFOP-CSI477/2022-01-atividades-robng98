import { prismaClient} from '../../database/client.js'

export class GetByIdProdutoController {

    async handle(request, response){

        const { id }= request.params;
        const produto = await prismaClient.produto.findUnique({
            where:{
                id: parseInt(id)
            },
            include: {
                distribuicao: true
            }
        });

        return response.json(produto);
    }
}