// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema


export interface Pessoa_Model {
    id: number,
    nome: string,
    rua: string,
    numero: string,
    complemento: string,
    documento: string,
    tipo_id: number,
    created_at: string,
    updated_at: string,
    tipo_sanguineo: Tipo_Sanguineo_Model
}

export interface Tipo_Sanguineo_Model {
    id: number,
    tipo: string,
    fator: string,
    created_at: string,
    updated_at: string,
}

export interface Local_Coleta_Model {
    id: number,
    nome: string,
    rua: string,
    numero: string,
    complemento: string,
    created_at: string,
    updated_at: string,
}

export interface Doacao_Model {
    id: number,
    pessoa_id: number,
    local_id: number,
    data: string,
    created_at: string,
    updated_at: string,
    pessoa: Pessoa_Model,
    local_coleta: Local_Coleta_Model
}
