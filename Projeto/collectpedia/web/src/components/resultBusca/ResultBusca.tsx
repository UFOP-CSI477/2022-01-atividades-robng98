import { useState } from "react";
import { useParams } from "react-router-dom";
import "./resultBusca.css";

export interface SerieModel{
    estado_pub_atual: string;
    nome_intern: string;
    ciclo_de_num: number;
    contribui: ContribuiModel
    edicao 
    genero 
    manga 
    publica   
}


const ResultBusca = () => {
    const { nome } = useParams();

    const [serie, setSerie] = useState<>();
    return
}

export default ResultBusca;