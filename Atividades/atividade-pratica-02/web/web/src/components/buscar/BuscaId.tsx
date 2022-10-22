import { Fragment } from "react";
import { useEffect, useState } from "react";
import { BsArrowDownSquareFill } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom"
import { Resultado_Busca_Model } from "../../models/models";
import api from "../../services/api";

import { Botao, BotaoDel, BotaoPeq, Check } from "../visualizar/VisualizarDoacoes";


const BuscaId = () => {

    const { busca, categ } = useParams()

    let categ_front = categ

    const [resFinal, setResFinal] = useState<Resultado_Busca_Model[]>([]);

    const [delete_vet, setDelete_vet] = useState<string[]>([]);

    let [flag, setFlag] = useState(false)

    const navigate = useNavigate()


    const ResFinalisValid = (res: Resultado_Busca_Model[], flag: boolean) => {
        if (res.length === 0 && flag) {
            window.alert('Busca Inválida. Retornando à Tela Inicial.')
            console.log(res)
            setFlag(false)

        }
    }

    const loadData = () => {
        setFlag(true)


        switch (categ) {
            case 'doacoes':
                api.get(`/${categ}/id/${busca}`).then(response => {
                    setResFinal([response.data]);


                });
                break
            case 'locais_coleta':

                api.get(`/${categ}/id/${busca}`).then(response => {
                    setResFinal([response.data]);

                });
                break
            case 'pessoas':
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
    }
        useEffect(() => {
            loadData()
            ResFinalisValid(resFinal, flag)


        }, [categ, busca])

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

                    setResFinal(resFinal.filter(item => item.id !== parseInt(data.id)));

                } catch (error) {
                    window.alert("Erro ao excluir!");
                    console.error(error);
                }
            })

        }

        const handleHTML = (item: Resultado_Busca_Model) => {


            console.log(item)
          

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

                    if (item.nome === undefined && item.fator === undefined) { //DOACAO


                        return (
                            <>

                                <p>
                                    Doador(a): {item.pessoa.nome} <br />
                                    CPF: {item.pessoa.documento}<br />

                                </p>

                                <p>
                                    Nome: {item.local_coleta.nome} <br />
                                    Rua: {item.local_coleta.rua} Nº {item.local_coleta.numero} {item.local_coleta.complemento}
                                </p>



                            </>
                        )
                    }

                    if (item.fator !== undefined) { //TIPO SANGUINEO

                        return (
                            <>

                                <p>
                                    Sangue: {item.tipo} <br />
                                    Fator: {item.fator}<br />

                                </p>

                                <p>
                                    Adicionado em: {item.created_at} <br />
                                    Atualizado em: {item.updated_at} <br />

                                </p>



                            </>
                        )
                    }
                   
        }

        return (
            <>
                <div className="App">

                    <p className="texto_subtit">

                        Resultado em "{categ_front?.replace(/_/g, ' ')}"
                    </p>

                    <div className="fundo-div-principal" style={{ gridRow: '3' }}>

                        {/* <>
                        {console.log(resFinal)}
                    </> */}
                        {resFinal.map((item, index) => (
                            <Fragment key={index}>
                                <table style={{ width: '100%', fontSize: '18px' }}>
                                    <tbody>
                                        <tr style={{ borderColor: 'var(--vermlar_escuro)', borderWidth: '0 0 1px 5px', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', alignItems: 'center' }}>

                                            <th style={{ gridColumn: '1/6', textAlign: 'justify', marginLeft: '5%' }}>Identificador: {item.id}<br /> {item.nome}</th>

                                            <td style={{ gridColumn: '9/11' }}>
                                                <BotaoPeq data-bs-toggle="collapse" data-bs-target={`#collapseWidthExample_${index}`} aria-expanded="false" aria-controls="collapseWidthExample">
                                                    Exibir info. <BsArrowDownSquareFill />
                                                </BotaoPeq>
                                            </td>


                                            <td style={{ gridColumn: '12' }} className="form-check">

                                                <Check value={item.id} onChange={e => altVet(e.target.checked, e.target.value)}
                                                    id="flexCheckDefault" />


                                            </td>

                                        </tr>
                                    </tbody>
                                </table>
                                <Fragment >

                                    <div className="collapse collapse-horizontal" id={`collapseWidthExample_${index}`}>
                                        <div className="card card-body" style={{ background: 'none', width: '894px', textAlign: 'justify' }}>

                                            <>
                                            {console.log(resFinal)}
                                        </>
                                            {handleHTML(item)}

                                        </div>
                                    </div>
                                </Fragment>
                            </Fragment>
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

    export default BuscaId