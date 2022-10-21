import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import '../../App.css'

import styled from 'styled-components';

const Botao = styled.button.attrs(() => ({
    className: 'btn btn-danger btn-lg',
}))`
    background-color: var(--vermlar_escuro)
`;

const BotaoPeq = styled.button.attrs(() => ({
    className: 'btn btn-danger',
}))`
    background-color: var(--vermlar_escuro)
`;

const Div_princ = styled.div.attrs(() => ({
    className: 'fundo-div-principal',
}))`
    grid-row: 3/5; 
    grid-column-end: 7; 
    font-size: 18px;
`;

const AtualizaDoacao = () => {
    const tipo_ = 'doacoes';

    const navigate = useNavigate();


    const [id, setId] = useState(0);
    const [pessoa_id, setPessoa_id] = useState(0);
    const [local_id, setLocal_id] = useState(0);

    const inputs = [[id, 'id'], [pessoa_id, 'pessoa_id'], [local_id, 'local_id']]

    const handleAtualizaDoacao = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        const data = {
            id,
            pessoa_id,
            local_id
        }

        try {
            api.put(`/${tipo_}`, data)
            navigate(`/view/${tipo_}`);

        } catch (error) {
            alert('Erro ao cadastrar o estado. Tente novamente');
            console.error(error);
        }

    }

    const setProp = async (e: number, prop: string) => {
        switch (prop) {
            case "id":
                setId(e)
                break
            case "pessoa_id":
                setPessoa_id(e)
                break
            case 'local_id':
                setLocal_id(e)
                break
            default:


        }
    }

    return (
        <div className="App">

            <p className="texto_subtit">
                Atualizar Doação

            </p>

            <Div_princ>

                {inputs.map((item) => (
                    <div>
                        <label htmlFor={item[1].toString()}>{item[1].toString().replace('_', ' ')}</label> <br />
                        <input
                            type="text"
                            name={item[1].toString()}
                            id={item[1].toString()}
                            placeholder={item[1].toString()}
                            value={item[0]}
                            onChange={e => setProp(parseInt(e.target.value), item[1].toString())} />
                    </div>
                ))}

            </Div_princ>

            <form onSubmit={handleAtualizaDoacao} style={{ gridColumn: '8', gridRow: '3' }}>
                <Botao type="submit">Atualizar</Botao>
            </form>

            <Link to={'/'} style={{ gridRow: '4', gridColumn: '8', marginBottom: '10%' }}>
                <Botao>Tela Inicial</Botao>

            </Link>

        </div >
    )

}

export default AtualizaDoacao;


