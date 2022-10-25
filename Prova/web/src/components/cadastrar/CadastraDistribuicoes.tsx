import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import '../../App.css'

import styled from 'styled-components';

export const Botao = styled.button.attrs(() => ({
    className: 'btn btn-success btn-lg',
}))``

export const BotaoPeq = styled.button.attrs(() => ({
    className: 'btn btn-secondary',
}))`
    background-color: gray
`;

export const DivPrinc = styled.div.attrs(() => ({
    className: 'fundo-div-principal',
}))`
    grid-row: 3/5; 
    grid-column-end: 7; 
    font-size: 18px;
`;

const CadastraDistribuicoes = () => {
    const tipo_ = 'distribuicoes';

    const navigate = useNavigate();


    const [produto_id, setProduto_id] = useState(0);
    const [unidade_id, setUnidade_id] = useState(0);

    const inputs = [[produto_id, 'produto_id'], [unidade_id, 'unidade_id']]

    const handleCadastraDistribuicao = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        const data = {
            produto_id,
            unidade_id
        }

        try {
            api.post(`/${tipo_}`, data)
            navigate(`/view/${tipo_}`);

        } catch (error) {
            alert('Erro ao cadastrar o estado. Tente novamente');
            console.error(error);
        }

    }

    const setProp = async (e: number, prop: string) => {
        switch (prop) {
            case "produto_id":
                setProduto_id(e)
                break
            case 'unidade_id':
                setUnidade_id(e)
                break
            default:


        }
    }

    return (
        <div className="App">

            <p className="texto_subtit">
                Cadastrar Distribuição

            </p>

            <DivPrinc>

                {inputs.map((item) => (
                    <div>
                        <p>
                            <label htmlFor={item[1].toString()}>{item[1].toString().replace('_', ' ').toUpperCase()}</label> <br />
                            <input
                                type="text"
                                name={item[1].toString()}
                                id={item[1].toString()}
                                placeholder={item[1].toString()}
                                value={item[0]}
                                onChange={e => setProp(parseInt(e.target.value), item[1].toString())} />
                           
                        </p>
                    </div>
                ))}

            </DivPrinc>

            <form onSubmit={handleCadastraDistribuicao} style={{ gridColumn: '8', gridRowStart: '4', marginBottom: '10%', justifySelf: 'flex-end' }}>
                <Botao type="submit">Cadastrar</Botao>
            </form>

            <Link to={'/'} style={{ gridRowEnd: '6', gridColumn: '8', justifySelf: 'flex-end' }}>
                <BotaoPeq>Tela Inicial</BotaoPeq>

            </Link>

        </div >
    )

}

export default CadastraDistribuicoes;


