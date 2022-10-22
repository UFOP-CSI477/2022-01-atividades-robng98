import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./visualizar.css";
import '../../App.css'

import styled from 'styled-components';
import { Doacao_Model } from "../../models/models";
import { BsArrowDownSquareFill } from 'react-icons/bs'

export const Botao = styled.button.attrs(() => ({
    className: 'btn btn-warning btn-lg',
}))`
    background-color: var(--vermlar_escuro)
`;

export const BotaoDel = styled.button.attrs(() => ({
    className: 'btn btn-danger btn-lg',
}))`

    grid-row: 4; 
    grid-column: 8
`;

export const BotaoPeq = styled.button.attrs(() => ({
    className: 'btn btn-warning',
}))`
    background-color: var(--vermlar_escuro);
    border-color: var(--vermlar_claro)

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
    const tipo_ = 'doacoes';



    const [result, setResult] = useState<Doacao_Model[]>([]);
    const [delete_vet, setDelete_vet] = useState<string[]>([]);

    const v_vazio: string[] = []

    const [key, setKey] = useState(0);

    const clearClick = () => {


        setKey((k) => (k + 1))

    }

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

    const altVet = async (check: boolean, num: string) => {

        if (check && delete_vet.indexOf(num) === -1) {
            setDelete_vet(old => [...old, num])

        } else {
            if (!check && delete_vet.indexOf(num) !== -1) {
                setDelete_vet(delete_vet.filter(item => item !== num))

            }
        }

    }

    const handleDeleteDoacoes = async (e: React.FormEvent<HTMLElement>) => {
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

                await api.delete(`/${tipo_}`, {
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
        })

    }

    return (
        <div className="App">

            <p className="texto_subtit">

                Doações realizadas
            </p>

            <div className="fundo-div-principal" style={{ gridRow: '3' }}>

                <table style={{ width: '100%', fontSize: '18px' }}>
                    <tbody>

                        {result.map((item, index) => (
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
                                                    id="flexCheckDefault" key={key} />


                                            </div>

                                        </td>

                                    </tr>
                                    <div >
                                        <div className="collapse collapse-horizontal" id={`collapseWidthExample_${index}`}>
                                            <div className="card card-body" style={{ background: 'none', width: '890px', textAlign: 'justify' }}>
                                                <p>
                                                    Doador(a): {item.pessoa.nome} <br />
                                                    CPF: {item.pessoa.documento}<br />

                                                </p>
                                                <p>
                                                    Local de coleta: {item.local_coleta.nome} <br />
                                                    Rua: {item.local_coleta.rua} Nº {item.local_coleta.numero} {item.local_coleta.complemento}
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

            <form onSubmit={handleDeleteDoacoes} style={{ gridRow: '4', gridColumn: '8' }}>
                <BotaoDel type="submit">Deletar</BotaoDel>
            </form>

            <Link to={'/'} style={{ gridRow: '4', gridColumn: '9/11' }}>
                <Botao>Tela Inicial</Botao>

            </Link>


        </div >
    )


}

export default VisualizarDoacoes;


