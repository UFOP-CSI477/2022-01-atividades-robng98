import { prismaClient } from "../../database/client.js";

export class CreatePessoaController {

   
   async handle( request, response ) {

        const { nome, documento, rua, numero, complemento, tipo_id } = request.body;

        const pessoa = await prismaClient.pessoa.create({
            data: {
                nome,
                documento,
                rua,
                numero,
                complemento,
                tipo_id
            }
        });

        return response.json(pessoa);

   } 

}