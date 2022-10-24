import { prismaClient } from "../../database/client.js";

export class CreateProdutoController {

    // async/await 
    async handle(request, response) {

        const { etiqueta, validade } = request.body;

        const validade_date = new Date(`${validade}`)

        const produto = await prismaClient.produto.create({
            data: {
                etiqueta,
                validade: validade_date
            }
        });
        
        return response.json(produto);

    }

}