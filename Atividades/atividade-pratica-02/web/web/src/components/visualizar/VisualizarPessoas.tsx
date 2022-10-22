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

    const v_vazio: string[]= []


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
                    // console.log(`Doação ${res.doacao}`)
                    window.alert("Alguma das Pessoas possui doação associada! Às exclua primeiro.");

                    // window.location.reload();
                    flag = true
                    setDelete_vet(v_vazio)
                }
            }) })

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

        // function unCheck() {
        //     var x = document.getElementsByName("flexCheckDefault");
        //     let i
        //     for(i=0; i<=x.length; i++) {
        //        x[i]. = false;
        //      }   
           
        //   }
        
        // window.location.reload();

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
                                    <tr style={{ borderColor: 'var(--vermlar_escuro)', borderWidth: '0 0 1px 5px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>

                                        <th style={{ gridColumn: '1/3', textAlign: 'justify', marginLeft: '5%' }}>{item.nome}</th>
                                        {/* <p> */}

                                        <td style={{ gridColumn: '3' }}>
                                            <BotaoPeq data-bs-toggle="collapse" data-bs-target={`#collapseWidthExample_${index}`} aria-expanded="false" aria-controls="collapseWidthExample">
                                                Exibir info. <BsArrowDownSquareFill />
                                            </BotaoPeq>
                                        </td>
                                        {/* </p> */}
                                        <td style={{ gridColumn: '12' }}>

                                            <div className="form-check">
                                                <Check value={item.id} onChange={e => altVet(e.target.checked, e.target.value)}
                                                    id="flexCheckDefault" name="flexCheckDefault"  />

                                            </div>

                                        </td>

                                    </tr>
                                    <div >
                                        <div className="collapse collapse-horizontal" id={`collapseWidthExample_${index}`}>
                                            <div className="card card-body" style={{ background: 'none', width: '890px', textAlign: 'left' }}>
                                                CPF: {item.documento}<br />
                                                Tipo Sanguíneo: {item.tipo_sanguineo.tipo} {item.tipo_sanguineo.fator} <br />
                                                Rua: {item.rua}, {item.numero}/{item.complemento}<br />
                                                {/* {item.created_at} <br />
                                                {item.updated_at} <br /> */}

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


