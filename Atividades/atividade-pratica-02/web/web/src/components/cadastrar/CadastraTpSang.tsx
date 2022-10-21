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

const CadastraTpSang = () => {
    const tipo_ = 'tipos_sanguineos';

    const navigate = useNavigate();


    const [tipo, setTipo] = useState('');
    const [fator, setFator] = useState('');
   
    const inputs = [[tipo, 'tipo'], [fator, 'fator']]

    const handleCadastraTpSang = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        const data = {
            tipo,
            fator
        }

        try {
            api.post(`/${tipo_}`, data)
            navigate(`/view/${tipo_}`);

        } catch (error) {
            alert('Erro ao cadastrar o estado. Tente novamente');
            console.error(error);
        }

    }

    const setProp = async (e: string, prop: string) => {
        switch (prop) {
            case "tipo":
                setTipo(e)
                break
            case 'fator':
                setFator(e)
                break 
            default:


        }
    }

    return (
        <div className="App">

            <p className="texto_subtit">
                Cadastrar Tipo Sanguineo

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
                <form onSubmit={handleCadastraTpSang} style={{ gridColumn: '8' }}>
                    <Botao type="submit">Cadastrar</Botao>
                </form>
            </div>

            <Link to={'/'} style={{ gridRow: '4', gridColumn: '9/11' }}>
                <Botao>Tela Inicial</Botao>

            </Link>

        </div >
    )

}

export default CadastraTpSang;


