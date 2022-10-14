import { prismaClient } from "../../database/client.js"

BigInt.prototype.toJSON = function () { return this.toString() }

export class HQsRecentesController {

    async handle(request, response) {

        const query = await prismaClient.$queryRaw`
            SELECT		E.foto_de_capa as capa, E.fk_serie_nome_intern as nome, E.fk_serie_ciclo_de_num as vol, E.numero as num, MAX(E.data_lanc) as top_recentes
            FROM		edicao E
            GROUP BY	nome, vol, num, capa
            ORDER BY 	top_recentes DESC, nome ASC, vol ASC, num ASC
            `;

        return response.json(query);
    }
}