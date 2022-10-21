import { PrismaClientKnownRequestError } from "@prisma/client/runtime/index.js";
import { prismaClient } from "../../database/client.js";

export class DeleteLocalColetaController {

    async handle(request, response) {

        let { id } = request.body.data;
        // console.log(id);
        id = parseInt(id);

        try{
            const local_Coleta = await prismaClient.local_Coleta.delete({
                where: {
                    id: id
                }
            });

            return response.json(local_Coleta);

        } catch(error) {
            if ( error.code === "P2025" &&
                error instanceof PrismaClientKnownRequestError ) {
                    console.log(`[DeleteLocalColetaController] Local Coleta id: ${id} does not exist!`);

                    return response.status(400).json({ 
                        message: "Local Coleta id does not exist."
                    });

                }
        }


    }
}