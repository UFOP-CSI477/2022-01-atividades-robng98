export interface AgregaModel {
    fk_colecao_nome_colecao: string,
    fk_colecao_email: string,
    fk_exemplar_id: number
}

export interface CapituloModel {
    fk_tankobon_numero: string,
    fk_tankobon_data_lanc: string,
    fk_tankobon_nome_intern: string,
    fk_tankobon_ciclo_de_num: number,
    num_cap: number
}

export interface ColecaoModel {
    nome_colecao: string,
    fk_colecionador_email: string,
    agrega: AgregaModel
}

export interface ColecionadorModel {
    username: string,
    email: string,
    senha: string,
    colecao: ColecaoModel
}

export interface ContribuiModel {
    fk_contribuidor_nome: string,
    fk_contribuidor_data_nasc: string,
    fk_serie_nome_intern: string,
    fk_serie_ciclo_de_num: number,
    funcao: string
}

export interface ContribuidorModel {
    genero: string,
    nome: string,
    data_nasc: string,
    contribui: ContribuiModel

}

export interface EdicaoModel {
    foto_de_capa: string,
    numero: string,
    un_monetaria: string,
    preco: number,
    data_lanc: string,
    fk_serie_nome_intern: string,
    fk_serie_ciclo_de_num: number,
    exemplar: ExemplarModel,
    tankobon: TankobonModel
}

export interface EditoraModel {
    logo: string,
    nome: string,
    ano_criacao: string,
    publica: PublicaModel
}

export interface ExemplarModel {
    data_aquis: string,
    estado_conserv: string,
    id: number,
    fk_edicao_numero: string,
    fk_edicao_data_lanc: string,
    fk_edicao_nome_intern: string,
    fk_edicao_ciclo_de_num: number,
    agrega: AgregaModel
}

export interface GeneroModel {
    fk_serie_nome_intern: string,
    fk_serie_ciclo_de_num: number,
    genero: string
}

export interface MangaModel {
    nome_jap: string,
    demografia: string,
    fk_serie_nome_intern: string,
    fk_serie_ciclo_de_num: number
}

export interface PublicaModel {
    fk_editora_nome: string,
    fk_editora_ano_criacao: string,
    fk_serie_nome_intern: string,
    fk_serie_ciclo_de_num: number
}

export interface SerieModel {
    estado_pub_atual: string,
    nome_intern: string,
    ciclo_de_num: number,
    contribui: ContribuiModel,
    edicao: EdicaoModel,
    genero: GeneroModel,
    manga: MangaModel,
    publica: PublicaModel
}

export interface TankobonModel {
    fk_edicao_numero: string,
    fk_edicao_data_lanc: string,
    fk_edicao_nome_intern: string,
    fk_edicao_ciclo_de_num: number
}

//Tela Inicial

export interface SelecaoRecentesModel {
    capa: string,
    nome: string,
    vol: number,
    num: string,
    top_recentes: string,
    mon: string,
    ed_nome: string
}

// Resultados

export interface ResComicMangaModel {

    nome: string,
    nome_jap: string,
    vol: number,
    num_edicoes: string,
    num_tankos: string,
    ano_pub: string,
    editora: string,
    demografia: string
}

//Pagina Serie de Comic/Manga
export interface SerieEsqModel{
    nome: string,
    num: string,
    un_mon: string,
    preco: number

}

export interface SerieDirModel{
    nome: string,
    num: string,
    mon: string,
    preco: number,
    vol: number,
    data_lanc: string,
    c_nome: string,
    func: string,
    estado_pub_atual: string,
    capa: string,
    caps: number,
    mangaka: string

}