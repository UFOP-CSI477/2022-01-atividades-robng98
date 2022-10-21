import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./visualizar.css";
import '../../App.css'

import styled from 'styled-components';
import { Tipo_Sanguineo_Model } from "../../models/models";
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

const VisualizarTpSang = () => {
    const tipo = 'tipos_sanguineos';



    const [result, setResult] = useState<Tipo_Sanguineo_Model[]>([]);


    useEffect(() => {
        loadData()
      
    }, []);

    const loadData = () => {
        try {

            api.get(`/${tipo}`).then(response => {
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
                Tipos Sanguíneos

            </p>

            <div className="fundo-div-principal" style={{ gridRow: '3' }}>

                <table style={{ width: '100%', fontSize: '18px' }}>
                    <tbody>

                        {result.map((item, index) => (
                            <>
                                <div key={index}>
                                    <tr style={{ borderColor: 'var(--vermlar_escuro)', borderWidth: '0 0 1px 5px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>

                                        <th style={{ gridColumn: '1/3', textAlign: 'justify', marginLeft: '5%' }}>Sangue: {item.tipo}<br /> Fator: {item.fator}</th>

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
                                                    Identificador: {item.id} <br />
                                                    Adicionado em: {item.created_at} <br />
                                                    Atualizado em: {item.updated_at}<br />

                                                </p>

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

export default VisualizarTpSang;


