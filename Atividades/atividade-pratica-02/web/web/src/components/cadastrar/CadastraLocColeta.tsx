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

const CadastrarLocColeta = () => {
    const tipo = 'locais_coleta';

    const navigate = useNavigate();


    const [nome, setNome] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');

    const inputs = [[nome, 'nome'], [rua, 'rua'], [numero, 'numero'],
    [complemento, 'complemento']]


    const handleCadastraLocColeta = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        const data = {
            nome,
            rua,
            numero,
            complemento
        }

        try {
            api.post(`/${tipo}`, data)
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
            default:
        }
    }

    return (
        <div className="App">

            <p className="texto_subtit">
                Cadastrar Local de Coleta

            </p>


            <div className="fundo-div-principal" style={{ gridRow: '3', fontSize: '18px' }}>

                {inputs.map((item) => (
                    <div>
                        <label htmlFor={item[1].toString()}>{item[1]}</label> <br />
                        <input
                            type="text"
                            name={item[1].toString()}
                            id={item[1].toString()}
                            placeholder={item[1].toString()}
                            value={item[0]}
                            onChange={e => setProp(e.target.value.toString(), item[1].toString())} />
                    </div>
                ))}
                <form onSubmit={handleCadastraLocColeta} style={{ gridColumn: '8' }}>
                    <Botao type="submit">Cadastrar</Botao>
                </form>
            </div>

            <Link to={'/'} style={{ gridRow: '4', gridColumn: '9/11' }}>
                <Botao>Tela Inicial</Botao>

            </Link>

        </div >
    )

}

export default CadastrarLocColeta;


