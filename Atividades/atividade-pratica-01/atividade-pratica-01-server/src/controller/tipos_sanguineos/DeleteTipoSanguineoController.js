import { PrismaClientKnownRequestError } from "@prisma/client/runtime/index.js";
import { prismaClient } from "../../database/client.js";

export class DeleteTipoSanguineoController {

    async handle(request, response) {

        let { id } = request.body.data;

        id = parseInt(id);

        try{
            const tipo_Sanguineo = await prismaClient.tipo_Sanguineo.delete({
                where: {
                    id: id
                }
            });

            return response.json(tipo_Sanguineo);

        } catch(error) {
            if ( error.code === "P2025" &&
                error instanceof PrismaClientKnownRequestError ) {
                    console.log(`[DeleteTipoSanguineoController] Tipo Sanguineo id: ${id} does not exist!`);

                    return response.status(400).json({ 
                        message: "Tipo Sanguineo id does not exist."
                    });

                }
        }


    }
}