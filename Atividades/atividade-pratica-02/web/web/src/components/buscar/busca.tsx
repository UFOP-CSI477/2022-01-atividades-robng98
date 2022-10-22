import { useEffect, useState } from "react";
import { BsArrowDownSquareFill } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom"
import { Doacao_Model, Local_Coleta_Model, Pessoa_Model, Resultado_Busca_Model, Tipo_Sanguineo_Model } from "../../models/models";
import api from "../../services/api";

import { Botao, BotaoDel, BotaoPeq, Check } from "../visualizar/VisualizarDoacoes";


const Busca = () => {

    const { busca, tipo, categ } = useParams()

    let categ_front = categ

    // const [resDoacao, setResDoacao] = useState<Doacao_Model[]>([]);
    // const [resLocColeta, setResLocColeta] = useState<Local_Coleta_Model[]>([]);
    // const [resPessoa, setResPessoa] = useState<Pessoa_Model[]>([]);
    // const [resTpSang, setResTpSang] = useState<Tipo_Sanguineo_Model[]>([]);
    const [resFinal, setResFinal] = useState<Resultado_Busca_Model[]>([]);
    // const [aux, setResFinal] = useState<Resultado_Busca_Model[]>([]);
    const [delete_vet, setDelete_vet] = useState<string[]>([]);

    const navigate = useNavigate()
    // console.log(categ)

    const loadData = () => {
        try {

            switch (categ) {
                case 'doacoes':
                    api.get(`/${categ}/id/${busca}`).then(response => {
                        setResFinal([response.data]);


                    });
                    break
                case 'locais_coleta':
                    console.log(`Categ ${categ} Busca ${busca}`)
                    api.get(`/${categ}/id/${busca}`).then(response => {
                        setResFinal([response.data]);

                        console.log(response.data)

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

            if(resFinal === null){
                console.log(resFinal)
                navigate('/')
            }

        } catch (error) {
            alert('Erro. Tente novamente');
            console.error(error);
        }
    }

    // setResFinal(aux);

    useEffect(() => {
        loadData()

    }, [tipo])

    const altVet = async (check: boolean, num: string) => {

        if (check && delete_vet.indexOf(num) === -1) {
            setDelete_vet(old => [...old, num])

        } else {
            if (!check && delete_vet.indexOf(num) !== -1) {
                setDelete_vet(delete_vet.filter(item => item !== num))

            }
        }

    }

    console.log(resFinal)

    return (
        <>
            <div className="App">

                <p className="texto_subtit" style={{ gridColumnEnd: '8' }}>

                    Resultados de Id "{busca}" em "{categ_front}"
                </p>

                <div className="fundo-div-principal" style={{ gridRow: '3' }}>

                    <table style={{ width: '100%', fontSize: '18px' }}>
                        <tbody>

                            {resFinal.map((item, index) => (
                                <div key={index}>
                                    <tr style={{ borderColor: 'var(--vermlar_escuro)', borderWidth: '0 0 1px 5px', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', alignItems: 'center' }}>

                                        <th style={{ gridColumn: '1/6', textAlign: 'justify', marginLeft: '5%' }}>Identificador: {item.id}<br /> {item.nome}</th>

                                        <td style={{ gridColumn: '9/11' }}>
                                            <BotaoPeq data-bs-toggle="collapse" data-bs-target={`#collapseWidthExample_${index}`} aria-expanded="false" aria-controls="collapseWidthExample">
                                                Exibir info. <BsArrowDownSquareFill />
                                            </BotaoPeq>
                                        </td>


                                        <td style={{ gridColumn: '12' }}>

                                            <div className="form-check">
                                                <Check value={item.id} onChange={e => altVet(e.target.checked, e.target.value)}
                                                    id="flexCheckDefault" />

                                            </div>

                                        </td>

                                    </tr>

                                    <div >

                                        <div className="collapse collapse-horizontal" id={`collapseWidthExample_${index}`}>
                                            <div className="card card-body" style={{ background: 'none', width: '894px', textAlign: 'justify' }}>
                                                {/* {item.pessoa.map(pessoa => (
                                                        <p>
                                                            Doador(a): {pessoa.nome} <br />
                                                            CPF: {pessoa.documento}<br />

                                                        </p>
                                                    ))} */}
                                                <p>
                                                    Nome: {item.nome} <br />
                                                    Rua: {item.rua} Nº {item.numero} {item.complemento}
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* {resFinal.map((item, index) => (
                                <>
                                    <div key={index}>
                                        <tr style={{ borderColor: 'var(--vermlar_escuro)', borderWidth: '0 0 1px 5px', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', alignItems: 'center' }}>

                                            <th style={{ gridColumn: '1/6', textAlign: 'justify', marginLeft: '5%' }}>Identificador: {item.id}<br /> Feita em: {item.data}</th>

                                            <td style={{ gridColumn: '9/11' }}>
                                                <BotaoPeq data-bs-toggle="collapse" data-bs-target={`#collapseWidthExample_${index}`} aria-expanded="false" aria-controls="collapseWidthExample">
                                                    Exibir info. <BsArrowDownSquareFill />
                                                </BotaoPeq>
                                            </td>

                                            
                                            <td style={{ gridColumn: '12' }}>

                                                <div className="form-check">
                                                    <Check value={item.id} onChange={e => altVet(e.target.checked, e.target.value)}
                                                        id="flexCheckDefault" />

                                                </div>

                                            </td>

                                        </tr>
                                        <div >

                                            <div className="collapse collapse-horizontal" id={`collapseWidthExample_${index}`}>
                                                <div className="card card-body" style={{ background: 'none', width: '894px', textAlign: 'justify' }}>
                                                    {item.pessoa.map(pessoa => (
                                                        <p>
                                                            Doador(a): {pessoa.nome} <br />
                                                            CPF: {pessoa.documento}<br />

                                                        </p>
                                                    ))}
                                                    <p>
                                                        Local de coleta: {item.local_coleta.nome} <br />
                                                        Rua: {item.local_coleta.rua} Nº {item.local_coleta.numero} {item.local_coleta.complemento}
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </>
                            ))} */}

                        </tbody>
                    </table>

                </div>

                <form style={{ gridRow: '4', gridColumn: '8' }}>
                    <BotaoDel type="submit">Deletar</BotaoDel>
                </form>

                <Link to={'/'} style={{ gridRow: '4', gridColumn: '9/11' }}>
                    <Botao>Tela Inicial</Botao>

                </Link>


            </div >
        </>
    )
}

export default Busca