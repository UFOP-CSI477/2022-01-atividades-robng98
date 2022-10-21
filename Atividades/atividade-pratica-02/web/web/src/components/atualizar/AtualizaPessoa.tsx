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

const AtualizaPessoa = () => {
    const tipo = 'pessoas';

    const navigate = useNavigate();


    const [nome, setNome] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [documento, setDocumento] = useState('');
    const [tipo_id, setTipo_id] = useState(0);
    const [id, setId] = useState(0);


    const inputs = [[id, 'id'], [nome, 'nome'], [rua, 'rua'], [numero, 'numero'],
    [complemento, 'complemento'], [documento, 'documento'],
    [tipo_id, 'tipo_id']]

    const handleAtualizaPessoa = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        const data = {
            id,
            nome,
            rua,
            numero,
            complemento,
            documento,
            tipo_id
        }

        try {
            api.put(`/${tipo}`, data)
            navigate(`/view/${tipo}`);

        } catch (error) {
            alert('Erro ao cadastrar o estado. Tente novamente');
            console.error(error);
        }
    }

    const setProp = async (e: string, prop: string) => {
        switch (prop) {
            case "nome":
                setNome(e)
                break
            case 'rua':
                setRua(e)
                break
            case 'numero':
                setNumero(e)
                break
            case 'complemento':
                setComplemento(e)
                break
            case 'documento':
                setDocumento(e)
                break
            case 'tipo_id':
                setTipo_id(parseInt(e))
                break
            case 'id':
                setId(parseInt(e))
                break
            default:

        }
    }

    return (
        <div className="App">

            <p className="texto_subtit">
                Atualizar Pessoa

            </p>

            <div className="fundo-div-principal" style={{ gridRow: '3', fontSize: '18px' }}>

                {inputs.map((item) => (
                    <div>
                        <label htmlFor={item[1].toString()}>{item[1].toString().replace('_', ' ')}</label> <br />
                        <input
                            type="text"
                            name={item[1].toString()}
                            id={item[1].toString()}
                            placeholder={item[1].toString()}
                            value={item[0]}
                            onChange={e => setProp(e.target.value.toString(), item[1].toString())} />
                    </div>
                ))}
                <form onSubmit={handleAtualizaPessoa} style={{ gridColumn: '8' }}>
                    <Botao type="submit">Atualizar</Botao>
                </form>
            </div>
            <Link to={'/'} style={{ gridRow: '4', gridColumn: '9/11' }}>
                <Botao>Tela Inicial</Botao>

            </Link>
        </div >
    )


}

export default AtualizaPessoa;


