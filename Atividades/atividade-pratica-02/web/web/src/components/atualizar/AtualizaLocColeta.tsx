import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";

import '../../App.css'

import { Botao, BotaoPeq, DivPrinc } from '../cadastrar/CadastraDoacao'


const AtualizaLocColeta = () => {
    const tipo = 'locais_coleta';

    const navigate = useNavigate();


    const [nome, setNome] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [id, setId] = useState(0);

    const inputs = [[id, 'id'], [nome, 'nome'], [rua, 'rua'], [numero, 'numero'],
    [complemento, 'complemento']]


    const handleAtualizaLocColeta = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        const data = {
            id,
            nome,
            rua,
            numero,
            complemento
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
            case 'id':
                setId(parseInt(e))
                break
            default:
        }
    }

    return (
        <div className="App">

            <p className="texto_subtit">
                Atualizar Local de Coleta

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
            <form onSubmit={handleAtualizaLocColeta} style={{ gridColumn: '8', gridRowStart: '4', marginBottom: '10%', justifySelf: 'flex-end' }}>

                <Botao type="submit">Atualizar</Botao>
            </form>

            <Link to={'/'} style={{ gridRowEnd: '6', gridColumn: '8', justifySelf: 'flex-end' }}>

                <BotaoPeq>Tela Inicial</BotaoPeq>

            </Link>

        </div >
    )

}

export default AtualizaLocColeta;


