import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import '../../App.css'

import { Unidade_Model } from "../../models/models";
import { BsArrowDownSquareFill } from 'react-icons/bs'

import { Botao, BotaoPeq } from "./VisualizarDistribuicoes";


const VisualizarUnidades = () => {
    const tipo = 'unidades';



    const [result, setResult] = useState<Unidade_Model []>([]);

    const loadData = () => {
        try {

            api.get(`/${tipo}`).then(response => {
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
                Unidades Cadastradas

            </p>

            <div className="fundo-div-principal" style={{ gridRow: '3' }}>

                <table style={{ width: '100%', fontSize: '18px' }}>
                    <tbody>

                        {result.map((item, index) => (
                            <>
                                <div key={index}>


                                    <tr style={{ borderColor: 'maroon', borderWidth: '0 0 1px 5px', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', alignItems: 'center' }}>

                                        <th className="fs-5" style={{ gridColumn: '1/6', textAlign: 'justify', marginLeft: '5%' }}>
                                            {item.nome}
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

                                                            <div className="fs-5 fw-bold">Identificador</div>
                                                            <ul className="fs-6 text-success fw-bold">{item.id}</ul>
                                                            <div className="fs-5 fw-bold">Numero</div>
                                                            <ul className="fs-6 text-success fw-bold">{item.numero}</ul>
                                                            <div className="fs-5 fw-bold">Complemento</div>
                                                            <ul className="fs-6 text-success fw-bold">{item.complemento}</ul>
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

export default VisualizarUnidades;


