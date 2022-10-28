import { Fragment } from "react";
import { useEffect, useState } from "react";
import { BsArrowDownSquareFill } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom"
import { Resultado_Busca_Model } from "../../models/models";
import api from "../../services/api";

import { Botao, BotaoPeq } from "../visualizar/VisualizarDistribuicoes";


const BuscaId = () => {

    const { busca, categ } = useParams()

    let categ_front = categ

    const [resFinal, setResFinal] = useState<Resultado_Busca_Model[]>([]);

    const navigate = useNavigate()

    useEffect(() => {

        switch (categ) {
            case 'distribuicoes':
                api.get(`/${categ}/id/${busca}`).then(response => {
                    setResFinal([response.data]);


                });
                break
            case 'produtos':

                api.get(`/${categ}/id/${busca}`).then(response => {
                    setResFinal([response.data]);

                });
                break
            case 'unidades':
                api.get(`/${categ}/id/${busca}`).then(response => {
                    setResFinal([response.data]);


                });
                break
            case 'tipos_sanguineos':
                api.get(`/${categ}/id/${busca}`).then(response => {
                    setResFinal([response.data]);


                });
                break

        }

    }, [categ, busca])


    const handleHTML = (item: Resultado_Busca_Model) => {



        const index = 0

        
        if (item.etiqueta !== undefined) { //PRODUTO

            return (
                <div className="collapse collapse-horizontal" id={`collapseWidthExample_${index}`}>
                    <div className="card card-body" style={{ background: 'none', border: 'none', textAlign: 'right' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="fs-5 fw-bold">Identificador</div>
                                    <ul className="fs-6 text-success fw-bold">{item.id}</ul>
                                    <div className="fs-5 fw-bold">Validade</div>
                                    <ul className="fs-6 text-success fw-bold">{item.validade}</ul>

                                </div>

                                <div className="col">
                                    <div className="fs-5 fw-bold">Adicionado em</div>
                                    <ul className="fs-6 text-success fw-bold">{item.created_at}</ul>
                                    <div className="fs-5 fw-bold">Atualizado em</div>
                                    <ul className="fs-6 text-success fw-bold">{item.updated_at}</ul>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            )
        }

        if (item.nome !== undefined) { //UNIDADE

            return (
                <div className="collapse collapse-horizontal" id={`collapseWidthExample_${index}`}>
                    <div className="card card-body" style={{ background: 'none', border: 'none', textAlign: 'right' }}>
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
            )
        }

        if (item.produto_id !== undefined) { //DISTRIBUICAO


            return (
                <div className="collapse collapse-horizontal" id={`collapseWidthExample_${index}`}>
                    <div className="card card-body" style={{ background: 'none', border: 'none', textAlign: 'right' }}>
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
            )
        }

    }

    const buscaInv = (res: Resultado_Busca_Model) => {

        if (res === null) {
            navigate('/b_invalid')
        }

    }

    return (
        <>
            <div className="App">

                <p className="texto_subtit">

                    Resultado em "{categ_front?.replace(/_/g, ' ')}"
                </p>

                <>
                    {resFinal.forEach(elem => {
                        { buscaInv(elem) }
                    })}
                </>

                <div className="fundo-div-principal" style={{ gridRow: '3' }}>


                    {resFinal.map((item, index) => (
                        <Fragment key={index}>
                            <table style={{ width: '100%', fontSize: '18px' }}>
                                <tbody>
                                    <tr style={{ borderColor: 'maroon', borderWidth: '0 0 1px 5px', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', alignItems: 'center' }}>

                                        <th style={{ gridColumn: '1/6', textAlign: 'justify', marginLeft: '5%' }}>Identificador: {item.id}<br /> {item.nome}</th>

                                        <td style={{ gridColumn: '9/11' }}>
                                            <BotaoPeq data-bs-toggle="collapse" data-bs-target={`#collapseWidthExample_${index}`} aria-expanded="false" aria-controls="collapseWidthExample">
                                                Exibir info. <BsArrowDownSquareFill />
                                            </BotaoPeq>
                                        </td>


                                    </tr>
                                </tbody>
                            </table>
                            <Fragment >

                                <div className="collapse collapse-horizontal" id={`collapseWidthExample_${index}`}>
                                    <div className="card card-body" style={{ background: 'none', border: 'none', width: '894px', textAlign: 'justify' }}>

                                        {handleHTML(item)}

                                    </div>
                                </div>
                            </Fragment>
                        </Fragment>
                    ))}

                </div>


                <Link to={'/'} style={{ gridRow: '4', gridColumn: '9/11' }}>
                    <Botao>Tela Inicial</Botao>

                </Link>


            </div >
        </>
    )
}

export default BuscaId