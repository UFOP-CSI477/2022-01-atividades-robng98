import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import '../../App.css'

import styled from 'styled-components';
import { Distribuicao_Model } from "../../models/models";
import { BsArrowDownSquareFill } from 'react-icons/bs'

export const Botao = styled.button.attrs(() => ({
    className: 'btn btn-secondary btn-lg',
}))`
`;

export const BotaoDel = styled.button.attrs(() => ({
    className: 'btn btn-danger btn-lg',
}))`

    grid-row: 4; 
    grid-column: 8
`;

export const BotaoPeq = styled.button.attrs(() => ({
    className: 'btn btn-success',
}))`
    background-color: #0a6330;

`;

export const Check = styled.input.attrs(() => ({
    className: 'form-check-input',
    type: 'checkbox',
}))`
:checked{
    background-color: var(--bs-danger);
    border-color: var(--bs-danger)
}
`;

const VisualizarDoacoes = () => {
    const tipo_ = 'distribuicoes';

    const [result, setResult] = useState<Distribuicao_Model[]>([]);

    const loadData = () => {
        try {

            api.get(`/${tipo_}`).then(response => {
                setResult(response.data);

            });
        } catch (error) {
            alert('Erro. Tente novamente');
            console.error(error);
        }
    }

    useEffect(() => {
        loadData()

    }, [result]);


    return (
        <div className="App">

            <p className="texto_subtit">

                Distribuições realizadas
            </p>

            <div className="fundo-div-principal" style={{ gridRow: '3' }}>

                <table style={{ width: '100%', fontSize: '18px' }}>
                    <tbody>

                        {result.map((item, index) => (
                            <>
                                <div key={index}>
                                    <tr style={{ borderColor: 'maroon', borderWidth: '0 0 1px 5px', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', alignItems: 'center' }}>

                                        <th scope="row" className="fs-5" style={{ gridColumn: '1/7', textAlign: 'justify', marginLeft: '5%' }}>
                                           Identificador: {item.id}
                                        </th>

                                        <td style={{ gridColumn: '9/11' }}>
                                            <BotaoPeq data-bs-toggle="collapse" data-bs-target={`#collapseWidthExample_${index}`} aria-expanded="false" aria-controls="collapseWidthExample">
                                                Exibir info. <BsArrowDownSquareFill />
                                            </BotaoPeq>
                                        </td>


                                    </tr>
                                    <div >
                                        <div className="collapse collapse-horizontal" id={`collapseWidthExample_${index}`}>
                                            <div className="card card-body" style={{ background: 'none',  border: 'none', textAlign: 'right' }}>
                                                <div className="container">
                                                    <div className="row">

                                                        <div className="col">

                                                            <div className="fs-5 fw-bold">Adicionado em</div>
                                                            <ul className="fs-6 text-success fw-bold">{item.created_at}</ul>

                                                            <div className="fs-5 fw-bold">Atualizado em</div>
                                                            <ul className="fs-6 text-success fw-bold">{item.updated_at}</ul>
                                                        </div>

                                                        <div className="col">

                                                            <div className="fs-5 fw-bold">Id do Produto</div>
                                                            <ul className="fs-6 text-success fw-bold">{item.produto_id}</ul>

                                                            <div className="fs-5 fw-bold">Id da Unidade</div>
                                                            <ul className="fs-6 text-success fw-bold">{item.unidade_id}</ul>

                                                        </div>
                                                    </div>
                                                </div>

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


