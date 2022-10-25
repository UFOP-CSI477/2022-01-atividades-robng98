import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import '../../App.css'

import { Botao, BotaoPeq, DivPrinc } from './CadastraDistribuicoes'


const CadastraUnidade = () => {
    const tipo_ = 'unidades';

    const navigate = useNavigate();


    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');

    const inputs = [[nome, 'nome'], [numero, 'numero'], [complemento, 'complemento']]

    const handleCadastraUnidade = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        const data = {
            nome,
            numero,
            complemento
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
            case "nome":
                setNome(e)
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
                Cadastrar Unidade

            </p>

            <DivPrinc>

                {inputs.map((item) => (
                    <div>
                        <p>
                            <label htmlFor={item[1].toString()}>{item[1].toString().toUpperCase()}</label> <br />

                            <input
                                type="text"
                                name={item[1].toString()}
                                id={item[1].toString()}
                                placeholder={item[1].toString()}
                                value={item[0]}
                                onChange={e => setProp(e.target.value.toString(), item[1].toString())} />
                        </p>
                    </div>
                ))}

            </DivPrinc>
            <form onSubmit={handleCadastraUnidade} style={{ gridColumn: '8', gridRowStart: '4', marginBottom: '10%', justifySelf: 'flex-end' }}>

                <Botao type="submit">Cadastrar</Botao>
            </form>

            <Link to={'/'} style={{ gridRowEnd: '6', gridColumn: '8', justifySelf: 'flex-end' }}>

                <BotaoPeq>Tela Inicial</BotaoPeq>

            </Link>

        </div >
    )

}

export default CadastraUnidade;


