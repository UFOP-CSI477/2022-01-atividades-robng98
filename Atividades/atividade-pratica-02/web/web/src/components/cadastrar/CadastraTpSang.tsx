import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import '../../App.css'

import { Botao, BotaoPeq, DivPrinc } from './CadastraDoacao'


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
            <form onSubmit={handleCadastraTpSang} style={{ gridColumn: '8', gridRowStart: '4', marginBottom: '10%', justifySelf: 'flex-end' }}>

                <Botao type="submit">Cadastrar</Botao>
            </form>

            <Link to={'/'} style={{ gridRowEnd: '6', gridColumn: '8', justifySelf: 'flex-end' }}>

                <BotaoPeq>Tela Inicial</BotaoPeq>

            </Link>

        </div >
    )

}

export default CadastraTpSang;


