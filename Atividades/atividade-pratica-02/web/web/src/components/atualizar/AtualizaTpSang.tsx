import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import '../../App.css'

import { Botao, BotaoPeq, DivPrinc } from '../cadastrar/CadastraDoacao'


const AtualizaTpSang = () => {
    const tipo_ = 'tipos_sanguineos';

    const navigate = useNavigate();


    const [tipo, setTipo] = useState('');
    const [fator, setFator] = useState('');
    const [id, setId] = useState(0);

    const inputs = [[id, 'id'], [tipo, 'tipo'], [fator, 'fator']]

    const handleAtualizaTpSang = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        const data = {
            id,
            tipo,
            fator
        }

        try {
            api.put(`/${tipo_}`, data)
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
            case 'id':
                setId(parseInt(e))
                break
            default:


        }
    }

    return (
        <div className="App">

            <p className="texto_subtit">
                Atualizar Tipo Sanguineo

            </p>

            <DivPrinc>


                {inputs.map((item) => (
                    <div>
                        <label htmlFor={item[1].toString()}>{item[1].toString().toUpperCase()}</label> <br />

                        <input
                            type="text"
                            name={item[1].toString()}
                            id={item[1].toString()}
                            placeholder={item[1].toString()}
                            value={item[0]}
                            onChange={e => setProp(e.target.value.toString(), item[1].toString())} />
                    </div>
                ))}
                
            </DivPrinc>
            <form onSubmit={handleAtualizaTpSang} style={{ gridColumn: '8', gridRowStart: '4', marginBottom: '10%', justifySelf: 'flex-end' }}>

                <Botao type="submit">Atualizar</Botao>
            </form>

            <Link to={'/'} style={{ gridRowEnd: '6', gridColumn: '8', justifySelf: 'flex-end' }}>

                <BotaoPeq>Tela Inicial</BotaoPeq>

            </Link>

        </div >
    )

}

export default AtualizaTpSang;


