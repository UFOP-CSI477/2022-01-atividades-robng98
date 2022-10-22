import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./visualizar.css";
import '../../App.css'


import { Pessoa_Model } from "../../models/models";
import { BsArrowDownSquareFill } from 'react-icons/bs'
import { Botao, BotaoDel, BotaoPeq, Check } from "./VisualizarDoacoes";


const VisualizarPessoas = () => {
    const tipo = 'pessoas';



    const [result, setResult] = useState<Pessoa_Model[]>([]);
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

    const handleDeletePessoas = async (e: React.FormEvent<HTMLElement>) => {
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

                    if (res.id === parseInt(del_index) && res.doacao.length && !flag) {
                        window.alert("Alguma das Pessoas possui doação associada! Às exclua primeiro.");
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
                Pessoas Cadastradas

            </p>

            <div className="fundo-div-principal" style={{ gridRow: '3' }}>

                {delete_vet.map(item => (
                    <>
                        {item}
                    </>
                ))}
                <table style={{ width: '100%', fontSize: '18px' }}>
                    <tbody>

                        {result.map((item, index) => (
                            <>
                                <div key={index}>
                                    <tr style={{ borderColor: 'var(--vermlar_escuro)', borderWidth: '0 0 1px 5px', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', alignItems: 'center' }}>

                                        <th style={{ gridColumn: '1/6', textAlign: 'justify', marginLeft: '5%' }}>{item.nome}</th>

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
                                            <div className="card card-body" style={{ background: 'none', width: '890px', textAlign: 'left' }}>
                                                CPF: {item.documento}<br />
                                                Tipo Sanguíneo: {item.tipo_sanguineo.tipo} {item.tipo_sanguineo.fator} <br />
                                                Rua: {item.rua}, {item.numero}/{item.complemento}<br />


                                                {item.doacao.map(item2 => (
                                                    <>
                                                        {item2.id}
                                                    </>
                                                ))}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}

                    </tbody>
                </table>

            </div>

            <form onSubmit={handleDeletePessoas} style={{ gridRow: '4', gridColumn: '8' }}>
                <BotaoDel type="submit">Deletar</BotaoDel>
            </form>

            <Link to={'/'} style={{ gridRow: '4', gridColumn: '9/11' }}>
                <Botao>Tela Inicial</Botao>

            </Link>


        </div >
    )


}

export default VisualizarPessoas;


