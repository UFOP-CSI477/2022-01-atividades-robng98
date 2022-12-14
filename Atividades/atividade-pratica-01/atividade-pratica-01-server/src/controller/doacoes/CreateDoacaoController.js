import { prismaClient } from "../../database/client.js";

export class CreateDoacaoController {

   
   async handle( request, response ) {

        const { pessoa_id, local_id } = request.body;

        const doacao = await prismaClient.doacao.create({
            data: {
                pessoa_id,
                local_id
            }
        });
        
        return response.json(doacao);

   } 

}