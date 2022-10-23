import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import '../../App.css'


import { Botao, BotaoPeq, DivPrinc } from '../cadastrar/CadastraDoacao'


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

            <DivPrinc>

                {inputs.map((item) => (
                    <div>
                        <label htmlFor={item[1].toString()}>{item[1].toString().replace('_', ' ').toUpperCase()}</label> <br />
                        <input
                            type="text"
                            name={item[1].toString()}
                            id={item[1].toString()}
                            placeholder={item[1].toString()}
                            value={item[0]}
                            onChange={e => setProp(parseInt(e.target.value), item[1].toString())} />
                    </div>
                ))}

            </DivPrinc>
            <form onSubmit={handleAtualizaDoacao} style={{ gridColumn: '8', gridRowStart: '4', marginBottom: '10%', justifySelf: 'flex-end' }}>

                <Botao type="submit">Atualizar</Botao>
            </form>

            <Link to={'/'} style={{ gridRowEnd: '6', gridColumn: '8', justifySelf: 'flex-end' }}>

                <BotaoPeq>Tela Inicial</BotaoPeq>

            </Link>
        </div >
    )

}

export default AtualizaDoacao;


