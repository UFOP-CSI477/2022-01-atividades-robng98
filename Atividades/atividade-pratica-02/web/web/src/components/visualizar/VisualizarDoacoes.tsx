import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../services/api";
import "./visualizar.css";
import '../../App.css'

import styled from 'styled-components';
import { Doacao_Model } from "../../models/models";
import { BsArrowDownSquareFill } from 'react-icons/bs'

const Botao = styled.button.attrs(() => ({
    className: 'btn btn-danger btn-lg',
}))`
    background-color: var(--vermlar_escuro)
`;

const BotaoPeq = styled.button.attrs(() => ({
    className: 'btn btn-danger',
}))`
    background-color: var(--vermlar_escuro)
`;

const VisualizarDoacoes = () => {
    const tipoDoa = 'doacoes';



    const [result, setResult] = useState<Doacao_Model[]>([]);

    useEffect(() => {
        loadData()
     
    }, []);

    const loadData = () => {
        try {

            api.get(`/${tipoDoa}`).then(response => {
                setResult(response.data);

            });
        } catch (error) {
            alert('Erro ao cadastrar o estado. Tente novamente');
            console.error(error);
        }
    }

    return (
        <div className="App">

            <p className="texto_subtit">
                
                Doações realizadas
            </p>

            <div className="fundo-div-principal" style={{ gridRow: '3' }}>

                <table style={{ width: '100%', fontSize: '18px' }}>
                    <tbody>

                        {result.map((item, index) => (
                            <>
                                <div key={index}>
                                    <tr style={{ borderColor: 'var(--vermlar_escuro)', borderWidth: '0 0 1px 5px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>

                                        <th style={{ gridColumn: '1/3', textAlign: 'justify', marginLeft: '5%' }}>Identificador: {item.id}<br /> Feita em: {item.data}</th>

                                        <td style={{ gridColumn: '3' }}>
                                            <BotaoPeq data-bs-toggle="collapse" data-bs-target={`#collapseWidthExample_${index}`} aria-expanded="false" aria-controls="collapseWidthExample">
                                                Exibir info. <BsArrowDownSquareFill />
                                            </BotaoPeq>
                                        </td>

                                    </tr>
                                    <div >
                                        <div className="collapse collapse-horizontal" id={`collapseWidthExample_${index}`}>
                                            <div className="card card-body" style={{ background: 'none', width: '900px', textAlign: 'justify' }}>
                                                <p>
                                                    Doador(a): {item.pessoa.nome} <br />
                                                    CPF: {item.pessoa.documento}<br />

                                                </p>
                                                <p>
                                                    Local de coleta: {item.local_coleta.nome} <br />
                                                    Rua: {item.local_coleta.rua} Nº {item.local_coleta.numero} {item.local_coleta.complemento}
                                                </p>
                                                {/* Tipo Sanguíneo: <br/> {item.tipo_sanguineo.tipo} {item.tipo_sanguineo.fator} <br />
                                                Endereço: <br />
                                                {item.rua}, {item.numero}<br /> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}

                    </tbody>
                </table>

            </div>

            <Link to={'/'} style={{ gridRow: '4', gridColumn: '9/11' }}>
                <Botao>Tela Inicial</Botao>

            </Link>


        </div >
    )


}

export default VisualizarDoacoes;


