import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./visualizar.css";
import '../../App.css'

import { Tipo_Sanguineo_Model } from "../../models/models";
import { BsArrowDownSquareFill } from 'react-icons/bs'

import { Botao, BotaoDel, BotaoPeq, Check } from "./VisualizarDoacoes";


const VisualizarTpSang = () => {
    const tipo = 'tipos_sanguineos';



    const [result, setResult] = useState<Tipo_Sanguineo_Model[]>([]);
    const [delete_vet, setDelete_vet] = useState<string[]>([]);

    const v_vazio: string[] = []

    const [key, setKey] = useState(0);

    const clearClick = () => {


        setKey((k) => (k + 1))

    }

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

    const altVet = async (check: boolean, num: string) => {

        if (check && delete_vet.indexOf(num) === -1) {
            setDelete_vet(old => [...old, num])

        } else {
            if (!check && delete_vet.indexOf(num) !== -1) {
                setDelete_vet(delete_vet.filter(item => item !== num))

            }
        }

    }

    const handleDeleteTpSang = async (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault()

        if (!window.confirm("Confirma as Exclusões?")) {
            return;
        }

        let data = {
            id: ''
        }

        let flag = false


        delete_vet.forEach(async (item) => {

            result.forEach(res => {
                delete_vet.forEach(del_index => {

                    if (res.id === parseInt(del_index) && res.pessoa.length && !flag) {

                        window.alert(`Algum dos Tipos Sanguíneos possui, ao menos, uma pessoa associada! Às exclua primeiro.`);
                        flag = true
                        setDelete_vet(v_vazio)
                        clearClick()

                    }
                })
            })

            data = {
                id: item
            }

            if (!flag) {

                try {

                    await api.delete(`/${tipo}`, {
                        data: {
                            data
                        }
                    });

                    setResult(result.filter(item => item.id !== parseInt(data.id)));
                    setDelete_vet(v_vazio)
                    clearClick()


                } catch (error) {
                    window.alert("Erro ao excluir!");
                    console.error(error);
                }
            }
        })
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


                                    <tr style={{ borderColor: 'var(--vermlar_escuro)', borderWidth: '0 0 1px 5px', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', alignItems: 'center' }}>

                                        <th className="fs-5" style={{ gridColumn: '1/6', textAlign: 'justify', marginLeft: '5%' }}>Sangue: {item.tipo}
                                            <ul>
                                                <li style={{ listStyleType: 'none' }}>Fator: {item.fator}</li>
                                            </ul>
                                        </th>

                                        <td style={{ gridColumn: '9/11' }}>
                                            <BotaoPeq data-bs-toggle="collapse" data-bs-target={`#collapseWidthExample_${index}`} aria-expanded="false" aria-controls="collapseWidthExample">
                                                Exibir info. <BsArrowDownSquareFill />
                                            </BotaoPeq>
                                        </td>


                                        <td style={{ gridColumn: '12' }} className="form-check">

                                            <Check value={item.id} onChange={e => altVet(e.target.checked, e.target.value)}
                                                id="flexCheckDefault" key={key} />



                                        </td>

                                    </tr>
                                    <div >
                                        <div className="collapse collapse-horizontal" id={`collapseWidthExample_${index}`}>
                                            <div className="card card-body" style={{ background: 'none', width: '890px', textAlign: 'justify' }}>
                                                <div className="container">
                                                    <div className="row">

                                                        <div className="col">

                                                            <div className="fs-5 fw-bold">Adicionado em</div>
                                                            <ul className="fs-6 text-warning fw-bold">{item.created_at}</ul>

                                                            <div className="fs-5 fw-bold">Atualizado em</div>
                                                            <ul className="fs-6 text-warning fw-bold">{item.updated_at}</ul>
                                                        </div>

                                                        <div className="col">

                                                            <div className="fs-5 fw-bold">Identificador</div>
                                                            <ul className="fs-6 text-warning fw-bold">{item.id}</ul>
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

            <form onSubmit={handleDeleteTpSang} style={{ gridRow: '4', gridColumn: '8' }}>
                <BotaoDel type="submit">Deletar</BotaoDel>
            </form>

            <Link to={'/'} style={{ gridRow: '4', gridColumn: '9/11' }}>
                <Botao>Tela Inicial</Botao>
            </Link>


        </div >
    )


}

export default VisualizarTpSang;


