// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

import internal from "stream"


export interface Unidade_Model {
    id: number,
    nome: string,
    numero: string,
    complemento: string,
    created_at: string,
    updated_at: string,
    distribuicao: Distribuicao_Model[]
}

export interface Produto_Model {
    id: number,
    etiqueta: string,
    validade: string,
    created_at: string,
    updated_at: string,
    distribuicao: Distribuicao_Model[]
}

export interface Distribuicao_Model {
    id: number,
    produto_id: number,
    unidade_id: number,
    data: string,
    created_at: string,
    updated_at: string,
}


export interface Resultado_Busca_Model {
    id: number,
    nome: string,
    numero: string,
    complemento: string,
    created_at: string,
    updated_at: string,
    etiqueta: string,
    validade: string,
    produto_id: number,
    unidade_id: number,
    data: string,
    distribuicao: Distribuicao_Model[]
}
