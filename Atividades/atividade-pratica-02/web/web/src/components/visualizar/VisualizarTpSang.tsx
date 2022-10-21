import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./visualizar.css";
import '../../App.css'

import styled from 'styled-components';
import { Tipo_Sanguineo_Model } from "../../models/models";
import { BsArrowDownSquareFill } from 'react-icons/bs'

import { Botao, BotaoDel, BotaoPeq, Check } from "./VisualizarDoacoes";


const VisualizarTpSang = () => {
    const tipo = 'tipos_sanguineos';



    const [result, setResult] = useState<Tipo_Sanguineo_Model[]>([]);
    const [delete_vet, setDelete_vet] = useState<string[]>([]);

    const v_vazio: string[] = []

    // const navigate = useNavigate()


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
                delete_vet.forEach(item2 => {

                    if (res.id === parseInt(item2) && res.pessoa.length && !flag) {
                        // console.log(`Doação ${res.doacao}`)
                        window.alert(`Algum dos Tipos Sanguíneos possui, ao menos, uma pessoa associada! Às exclua primeiro.`);

                        // window.location.reload();
                        flag = true
                        setDelete_vet(v_vazio)
                    }
                })
            })

            data = {
                id: item
            }

            if (!flag) {
                console.log(`Flag ${flag}`)
                try {

                    await api.delete(`/${tipo}`, {
                        data: {
                            data
                        }
                    });

                    setResult(result.filter(item => item.id !== parseInt(data.id)));
                    setDelete_vet(v_vazio)

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
                                    <tr style={{ borderColor: 'var(--vermlar_escuro)', borderWidth: '0 0 1px 5px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>

                                        <th style={{ gridColumn: '1/3', textAlign: 'justify', marginLeft: '5%' }}>Sangue: {item.tipo}<br /> Fator: {item.fator}</th>

                                        <td style={{ gridColumn: '3' }}>
                                            <BotaoPeq data-bs-toggle="collapse" data-bs-target={`#collapseWidthExample_${index}`} aria-expanded="false" aria-controls="collapseWidthExample">
                                                Exibir info. <BsArrowDownSquareFill />
                                            </BotaoPeq>
                                        </td>

                                        <td style={{ gridColumn: '12' }}>

                                            <div className="form-check">
                                                <Check value={item.id} onChange={e => altVet(e.target.checked, e.target.value)}
                                                    id="flexCheckDefault" name="flexCheckDefault" />

                                            </div>

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


