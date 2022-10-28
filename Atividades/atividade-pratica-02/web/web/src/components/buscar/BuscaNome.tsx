import { Fragment } from "react";
import { useEffect, useState } from "react";
import { BsArrowDownSquareFill } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom"
import { Resultado_Busca_Model } from "../../models/models";
import api from "../../services/api";

import { Botao, BotaoDel, BotaoPeq, Check } from "../visualizar/VisualizarDoacoes";


const BuscaNome = () => {

    const { busca, categ } = useParams()

    let categ_front = categ

    const [resFinal, setResFinal] = useState<Array<Resultado_Busca_Model[]>>([]);

    const [delete_vet, setDelete_vet] = useState<string[]>([]);

    const navigate = useNavigate()

    const v_vazio: string[] = []

    const [key, setKey] = useState(0);

    const clearClick = () => {


        setKey((k) => (k + 1))

    }

    const loadData = () => {


        switch (categ) {

            case 'locais_coleta':

                api.get(`/${categ}/nome/${busca}`).then(response => {
                    setResFinal([response.data]);

                });
                break
            case 'pessoas':
                api.get(`/${categ}/nome/${busca}`).then(response => {
                    setResFinal([response.data]);


                });
                break

        }

    }

    useEffect(() => {

        loadData()


    }, [delete_vet, busca, categ])

    const altVet = async (check: boolean, num: string) => {

        if (check && delete_vet.indexOf(num) === -1) {
            setDelete_vet(old => [...old, num])

        } else {
            if (!check && delete_vet.indexOf(num) !== -1) {
                setDelete_vet(delete_vet.filter(item => item !== num))

            }
        }

    }

    const handleDelete = async (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault()

        if (!window.confirm("Confirma as Exclusões?")) {
            return;
        }

        let data = {
            id: ''
        }

        delete_vet.forEach(async (item) => {

            data = {
                id: item
            }


            try {

                await api.delete(`/${categ}`, {
                    data: {
                        data
                    }
                });

                setResFinal(resFinal.filter(item => item.map(
                    item_interno => (
                        item_interno.id !== parseInt(data.id)
                    ))
                ));
                setDelete_vet(v_vazio)

                clearClick()

            } catch (error) {
                window.alert("Erro ao excluir!");
                console.error(error);
                setDelete_vet(v_vazio)

                clearClick()

            }
        })

    }

    const handleHTML = (item: Resultado_Busca_Model) => {



        if (item.nome !== undefined && item.documento !== undefined) { //PESSOA

            return (
                <>
                    <p>
                        CPF: {item.documento} <br />
                        Tipo Sanguíneo: {item.tipo_sanguineo.tipo} {item.tipo_sanguineo.fator} <br />
                        Rua: {item.rua} Nº {item.numero} {item.complemento}
                    </p>



                </>
            )
        }

        if (item.nome !== undefined && item.documento === undefined) { //LOCAL DE COLETA

            return (
                <>

                    <p>
                        Rua: {item.rua} Nº {item.numero} {item.complemento}
                    </p>
                    <p>
                        Adicionado em: {item.created_at} <br />
                        Atualizado em: {item.updated_at} <br />
                    </p>

                </>
            )
        }

        return (
            <></>
        )

    }

    const buscaInv = (res: Resultado_Busca_Model[]) => {
        if (res.length === 0) {
            navigate('/b_invalid')

        }

    }

    return (
        <>
            <div className="App">

                <p className="texto_subtit">

                    Resultados em "{categ_front?.replace(/_/g, ' ')}"
                </p>

                <>
                    {resFinal.forEach(elem => {
                        { buscaInv(elem) }
                    })}
                </>

                <div className="fundo-div-principal" style={{ gridRow: '3' }}>

                    {resFinal.map((item) => (
                        <>

                            {item.map((item_interno, index) => (
                                <Fragment key={index}>
                                    <table style={{ width: '100%', fontSize: '18px' }}>
                                        <tbody>
                                            <tr style={{
                                                borderColor: 'var(--vermlar_escuro)', borderWidth: '0 0 1px 5px',
                                                display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', alignItems: 'center'
                                            }}>
                                                <th style={{ gridColumn: '1/6', textAlign: 'justify', marginLeft: '5%' }}>Identificador: {item_interno.id}<br /> {item_interno.nome}</th>
                                                <td style={{ gridColumn: '9/11' }}>
                                                    <BotaoPeq data-bs-toggle="collapse" data-bs-target={`#collapseWidthExample_${index}`} aria-expanded="false" aria-controls="collapseWidthExample">
                                                        Exibir info. <BsArrowDownSquareFill />
                                                    </BotaoPeq>
                                                </td>
                                                <td style={{ gridColumn: '12' }} className="form-check">
                                                    <Check value={item_interno.id} onChange={e => altVet(e.target.checked, e.target.value)}
                                                        id="flexCheckDefault" key={key} />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <Fragment>
                                        <div className="collapse collapse-horizontal" id={`collapseWidthExample_${index}`}>
                                            <div className="card card-body" style={{ background: 'none', width: '894px', textAlign: 'justify' }}>
                                                {handleHTML(item_interno)}
                                            </div>
                                        </div>
                                    </Fragment>
                                </Fragment>
                            ))}
                        </>

                    ))}

                </div>

                <form onSubmit={handleDelete} style={{ gridRow: '4', gridColumn: '8' }}>
                    <BotaoDel type="submit">Deletar</BotaoDel>
                </form>

                <Link to={'/'} style={{ gridRow: '4', gridColumn: '9/11' }}>
                    <Botao>Tela Inicial</Botao>

                </Link>


            </div >
        </>
    )
}

export default BuscaNome