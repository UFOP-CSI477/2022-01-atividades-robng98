import { prismaClient } from '../../database/client.js'

export class UpdateDoacaoController {


    async handle( request, response ) {

        const { id, pessoa_id, local_id } = request.body;

        const updated_at = new Date().toISOString();

        const doacao = await prismaClient.doacao.update({

            where: {
                id: id
            }, 
            data: {
                pessoa_id,
                local_id,
                updated_at: updated_at
            }

        });

        return response.json(doacao);

    }

}