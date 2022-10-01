import { prismaClient } from "../../database/client.js";

export class CreateTipoSanguineoController {

   // async/await 
   async handle( request, response ) {

        const { tipo, fator } = request.body;

        const tipo_Sanguineo = await prismaClient.tipo_Sanguineo.create({
            data: {
                tipo,
                fator
            }
        });
        // console.log(tipo_Sanguineo);
        return response.json(tipo_Sanguineo);

   } 

}