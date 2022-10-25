import { prismaClient } from "../../database/client.js"

BigInt.prototype.toJSON = function () { return this.toString() }

export class CountExempMesController {
    async handle(request, response) {
        let { nomeCol, email } = request.body;
        const emailConc = `%${email}%`
        const nomeColConc = `%${nomeCol}%`

        const query = await prismaClient.$queryRaw`
            SELECT	DATE_TRUNC('month',E.data_aquis) as meses, COUNT(*)
            FROM	agrega A, exemplar E
            WHERE	A.fk_exemplar_id = E.id AND
            A.fk_colecao_nome_colecao like ${nomeColConc} AND
            A.fk_colecao_email like ${emailConc}
            GROUP BY meses
            ORDER BY meses ASC
        `;


        return response.json(query);
    }
}