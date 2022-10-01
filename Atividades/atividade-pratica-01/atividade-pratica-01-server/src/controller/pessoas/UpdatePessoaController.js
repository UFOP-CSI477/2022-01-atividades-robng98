import { prismaClient } from '../../database/client.js'

export class UpdatePessoaController {


    async handle( request, response ) {

        const { id, nome, documento, rua, numero, complemento, tipo_id } = request.body;
        const updated_at = new Date().toISOString();

        const pessoa = await prismaClient.pessoa.update({

            where: {
                id: id
            }, 
            data: {
                nome,
                documento,
                rua,
                numero,
                complemento,
                tipo_id,
                updated_at: updated_at
            }

        });

        return response.json(pessoa);

    }

}