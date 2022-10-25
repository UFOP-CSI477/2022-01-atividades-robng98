import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import '../../App.css'


import { Botao, BotaoPeq, DivPrinc } from './CadastraDistribuicoes'


const CadastrarPessoas = () => {
    const tipo = 'produtos';

    const navigate = useNavigate();


    const [etiqueta, setEtiqueta] = useState('');
    const [validade, setValidade] = useState('');


    const inputs = [[etiqueta, 'etiqueta'], [validade, 'validade']]

    const handleCadastraProduto = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        const data = {
            etiqueta,
            validade
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
            case "etiqueta":
                setEtiqueta(e)
                break
            case 'validade':
                setValidade(e)
                break

        }
    }

    return (
        <div className="App">

            <p className="texto_subtit">
                Cadastrar Produto

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
                                onChange={e => setProp(e.target.value.toString(), item[1].toString())} />

                        </p>
                    </div>
                ))}

            </DivPrinc>
            <form onSubmit={handleCadastraProduto} style={{ gridColumn: '8', gridRowStart: '4', marginBottom: '10%', justifySelf: 'flex-end' }}>

                <Botao type="submit">Cadastrar</Botao>
            </form>

            <Link to={'/'} style={{ gridRowEnd: '6', gridColumn: '8', justifySelf: 'flex-end' }}>

                <BotaoPeq>Tela Inicial</BotaoPeq>

            </Link>
        </div >
    )


}

export default CadastrarPessoas;


