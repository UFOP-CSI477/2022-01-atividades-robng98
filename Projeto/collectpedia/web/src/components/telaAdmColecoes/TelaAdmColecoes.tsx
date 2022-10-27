import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components"
import { isConstructorDeclaration } from "typescript";
import { SerieEsqModel, SerieDirModel, ColecaoModel, Colecoes_Model, CountInfosDir_Model } from "../../models/Models";
import api from "../../services/api";

const Botao = styled.button.attrs(() => ({
    className: 'btn btn-danger btn-lg',
}))`
    background-color: var(--vermlar_escuro)
`;

const Botao_Peq = styled.button.attrs(() => ({
    className: 'btn btn-danger',
}))`
    background-color: var(--vermlar_escuro)
`;

const Check = styled.input.attrs(() => ({
    className: 'form-check-input',
    type: 'checkbox',
}))`
:checked{
    background-color: var(--vermlar_escuro);
    border-color: var(--vermlar_claro)
}
`;


// const T_Sub = styled.texto_subtit`
// gridColumn: 3/13', gridRow: 2/3', display: grid', gridTemplateColumns: repeat(10,1fr)', gridTemplateRows: auto', margin-bottom: 5%
// ` sd
interface TelaUserProps {
    email?: string;
}

const TelaAdmColecoes = (props: TelaUserProps) => {

    // const email = props.email

    // const { serie } = useParams();


    const [colecao, setColecao] = useState<string>()
    const [colecoes, setColecoes] = useState<Colecoes_Model[]>([])
    const [colecaoAcao, setColecaoAcao] = useState<CountInfosDir_Model>()

    const [nomeOld, setNomeOld] = useState<string>('')
    const [nomeNew, setNomeNew] = useState<string>('')
    const [flagCriar, setFlagCriar] = useState<number>(0)
    const [countEditExemp, setCountEditExemp] = useState<CountInfosDir_Model>();
    const [countStatusPub, setCountStatusPub] = useState<CountInfosDir_Model[]>([]);
    const [countGeneros, setCountGeneros] = useState<CountInfosDir_Model[]>([]);
    const [countRoteirista, setCountRoteirista] = useState<CountInfosDir_Model[]>([]);
    const [countDesenhista, setCountDesenhista] = useState<CountInfosDir_Model[]>([]);
    const [countMangaka, setCountMangaka] = useState<CountInfosDir_Model[]>([]);
    const [countDemografia, setCountDemografia] = useState<CountInfosDir_Model[]>([]);

    const location = useLocation()


    const navigate = useNavigate()

    let email_ = ''


    try {
        email_ = location.state.email
        console.log(email_)
    } catch (error) {
        alert('Erro. Tente novamente');
        console.error(error);
    }


    useEffect(() => {

        const token = window.localStorage.getItem('token') || undefined

        if (token === undefined) {
            navigate('/login');
        }

        const header = window.localStorage.getItem('header');

        const config = {
            headers: {
                "Authorization": `Bearer ${header} ${token}`
            }
        }

        const data = {
            email: email_,
        }

        console.log(email_)

        api.post(`/admCol/countExempColecao/`, data).then(response => {
            setColecoes(response.data)
        })

        // handleInfosDir(colecao)

    }, []);

    const handleInfosDir = (nome_col: string | undefined) => {


        const data = {
            email: email_,
            nomeCol: nome_col
        }

        api.post('/editExemp', data).then(response => {
            setCountEditExemp(response.data[0])
        })
        api.post('/countStatusPub', data).then(response => {
            setCountStatusPub(response.data)
            console.log(response.data)
        })
        api.post('/countGeneros', data).then(response => {
            setCountGeneros(response.data)
            console.log(response.data)
        })
        api.post('/countRoteirista', data).then(response => {
            setCountRoteirista(response.data)
            console.log(response.data)
        })
        api.post('/countDesenhista', data).then(response => {
            setCountDesenhista(response.data)
            console.log(response.data)
        })
        api.post('/countMangaka', data).then(response => {
            setCountMangaka(response.data)
            console.log(response.data)
        })
        api.post('/countDemografia', data).then(response => {
            setCountDemografia(response.data)
            console.log(response.data)
        })

    }

    const handleStatusPub = (item: CountInfosDir_Model[] | undefined) => {


        if (item !== undefined && item.length !== 0) {
            return (
                <>

                    <div style={{ gridColumn: '1/6', gridRow: '2' }}>

                        <div className="tx-u-v">

                            <a style={{ color: 'var(--vermlar_claro)' }}></a><br />
                        </div>
                        <div className="tx-u-c" style={{ textAlign: 'start' }}>

                            <br /> Status de Publicação das séries <br />
                        </div>
                        <p>
                            <div style={{ marginLeft: '8%' }}>
                                <div style={{ textAlign: 'end', marginRight: '20%', fontSize: '15px' }}>
                                    {item.map((elem) => (
                                        <>
                                            {elem.e_p} < a style={{ color: 'var(--vermlar_claro)' }}>{elem.contagem}</a> <br />
                                        </>
                                    ))}

                                </div>
                            </div>
                        </p>
                    </div >
                </>
            )
        }
    }


    const handleGenDemo = (gen: CountInfosDir_Model[] | undefined, demo: CountInfosDir_Model[] | undefined) => {


        if (gen !== undefined && gen.length !== 0) {
            const nome_gen = gen.slice(0, 3)

            if (demo !== undefined && demo.length !== 0) {
                const nome_demo = demo.slice(0, 1)
                return (
                    <>

                        <div style={{ gridColumn: '6/12', gridRow: '1' }}>

                            <div className="tx-u-c">


                                Top Gêneros Presentes<br />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                {nome_gen.map((elem) => (

                                    <>
                                        <a style={{ color: 'var(--vermlar_claro)' }}>({elem.genero})</a>
                                    </>
                                ))}
                            </div>

                            <p>
                                <div>

                                    <div className="tx-u-c">

                                        Demografia principal<br />
                                    </div>
                                    {nome_demo.map((elem) => (

                                        <a style={{ color: 'var(--vermlar_claro)', marginRight: '0%' }}>{elem.demografia}</a>
                                    ))}
                                </div>
                            </p>
                        </div >
                    </>
                )
            }

            return (
                <>

                    <div style={{ gridColumn: '6/13', gridRow: '1' }}>

                        <div className="tx-u-c">


                            Top Gêneros Presentes<br />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            {nome_gen.map((elem) => (

                                <>
                                    <a style={{ color: 'var(--vermlar_claro)' }}>({elem.genero})</a>
                                </>
                            ))}
                        </div>
                    </div >
                </>
            )
        }
    }


    const handleRotDes = (rot: CountInfosDir_Model[] | undefined, des: CountInfosDir_Model[] | undefined, mangk: CountInfosDir_Model[] | undefined) => {


        if (rot?.length !== 0 && rot !== undefined && des?.length !== 0 && des !== undefined) {
            const nome_r = rot.slice(0, 1)
            const nome_d = des.slice(0, 1)
            console.log(mangk)

            if (mangk?.length !== 0 && mangk !== undefined) {
                const nome_m = mangk.slice(0, 1)
                return (
                    <div style={{ gridColumn: '6/12', gridRow: '2' }}>


                        <div className="tx-u-c">
                            <br /> Top Roteirista em títulos<br />
                        </div>
                        <div className="tx-u-v">
                            {nome_r.map((elem) => (
                                <>
                                    <a style={{ color: 'var(--vermlar_claro) ' }}>{elem.nome_roteirista}</a> <br />
                                </>
                            ))}

                        </div>

                        <div className="tx-u-c">
                            <br /> Top Desenhista em títulos<br />
                        </div>
                        <div className="tx-u-v">
                            {nome_d.map((elem) => (
                                <>
                                    <a style={{ color: 'var(--vermlar_claro) ' }}>{elem.nome_desenhista}</a> <br />
                                </>
                            ))}
                        </div>
                        <div className="tx-u-c">
                            <br /> Top Mangaka em títulos<br />
                        </div>

                        <div className="tx-u-v">
                            {nome_m.map((elem) => (
                                <>
                                    <a style={{ color: 'var(--vermlar_claro) ' }}>{elem.nome_mangaka}</a> <br />
                                </>
                            ))}
                        </div>
                    </div>
                )
            }

            return (
                <div style={{ gridColumn: '6/12', gridRow: '2' }}>


                    <div className="tx-u-c">
                        <br /> Top Roteirista em títulos<br />
                    </div>
                    <div className="tx-u-v">
                        {nome_r.map((elem) => (
                            <>
                                <a style={{ color: 'var(--vermlar_claro) ' }}>{elem.nome_roteirista}</a> <br />
                            </>
                        ))}

                    </div>

                    <div className="tx-u-c">
                        <br /> Top Desenhista em títulos<br />
                    </div>
                    <div className="tx-u-v">
                        {nome_d.map((elem) => (
                            <>
                                <a style={{ color: 'var(--vermlar_claro) ' }}>{elem.nome_desenhista}</a> <br />
                            </>
                        ))}
                    </div>
                </div>
            )

        } else {
            // console.log(mangk)
            if (mangk?.length !== 0 && mangk !== undefined) {
                const nome_m = mangk.slice(0, 1)
                return (
                    <div style={{ gridColumn: '6/12', gridRow: '2' }}>

                        <div className="tx-u-v">
                            {nome_m.map((elem) => (
                                <>
                                    <a style={{ color: 'var(--vermlar_claro) ' }}>{elem.nome_mangaka}</a> <br />
                                </>
                            ))}
                        </div>
                    </div>
                )


            } else {
                return (
                    <>
                    </>
                )
            }
        }
    }

    const handleEditExemp = (item: CountInfosDir_Model | undefined) => {

        if (item !== undefined) {
            console.log(item)

            return (
                <div style={{ gridColumn: '1/6' }}>

                    <div className="tx-u-c" style={{ textAlign: 'start' }}>
                        Quantidade total de exemplares <br />
                    </div>
                    <div className="tx-u-v">
                        <a style={{ color: 'var(--vermlar_claro) ' }}>{item.num_ex_col}</a> <br />
                    </div>
                    <div className="tx-u-c" style={{ textAlign: 'start' }}>
                        <br /> Quantidade de editoras diferentes <br />
                    </div>
                    <div className="tx-u-v">
                        <a style={{ color: 'var(--vermlar_claro)' }}>{item.num_ed_col}</a><br />
                    </div>
                </div>
            )


        } else {
            return (
                <div style={{ gridColumn: '4/7', gridRow: '2/4' }}>
                    <img width="500" height="250" src="/logo2.svg" style={{ opacity: '0.5' }} />
                    <a style={{
                        fontSize: 'var(--font-sz-maxx)', fontFamily: 'var(--font_logo)', opacity: '0.5',
                        marginLeft: '30%'
                    }}>Collectpedia</a>

                </div>
            )
        }
    }

    // const handleColAcao = (nome: string) => {
    //     // const aux: CountInfosDir_Model = {nome_c: nome, email: email}
    //     setNomeOld(nome)
    //     console.log(nomeOld)




    // }

    const handleAtualizaNome = (e: React.FormEvent<HTMLElement>) => {

        e.preventDefault()

        const data = {
            email: email_,
            nomeCol: nomeOld,
            novoNomeCol: nomeNew
        }

        console.log(data)

        api.post('/admCol/updNomeColecao', data).then(response => {
            console.log(response.data)
        })

        window.location.reload()
    }

    const handleDeletaCol = (e: React.FormEvent<HTMLElement>) => {

        e.preventDefault()

        const data = {
            email: email_,
            nomeCol: nomeOld
        }

        console.log(data)

        api.post('/admCol/deleteColecao', data).then(response => {
            console.log(response.data)
        })

        window.location.reload()
    }

    const handleCreateCol = (e: React.FormEvent<HTMLElement>) => {

        e.preventDefault()

        const data = {
            email: email_,
            nomeCol: nomeNew
        }

        console.log(data)

        api.post('/admCol/createColecao', data).then(response => {
            console.log(response.data)
        })

        window.location.reload()
    }

    const handleEditaDeleta = (nomeOld: string) => {
        console.log(nomeOld)
        if (nomeOld != '') {

            return (

                <>
                    <div className="editar_colecao" id="editar_colecao" style={{ display: 'grid', gridRow: '6', gridTemplateColumns: 'repeat(12,1fr)', gridTemplateRows: 'repeat(3,1fr)', paddingLeft: ' 20px', marginTop: '5%' }}>

                        <section style={{ gridRow: '1', gridColumn: '1/5', textAlign: 'left', fontSize: '30px' }}>
                            Editar/Remover
                        </section>


                        <section style={{ gridRow: '2', gridColumn: ' 1/7' }}>
                            <input type="text" name="editar_nome_colecao" onChange={e => setNomeNew(e.target.value)}
                                placeholder="Nome da coleção" value={nomeNew} className="texto_busca" required />

                        </section>

                        <form onSubmit={handleAtualizaNome} style={{ gridRow: '3', gridColumn: '9/13' }}>
                            <section >
                                <input type="submit" name="add_colecao_nova" value="Renomear"
                                    className="bot-buscar-home" />
                            </section >
                        </form>

                        <form onSubmit={handleDeletaCol} style={{ gridRow: '3', gridColumn: '5/8' }}>
                            <section >
                                <input type="submit" name="add_colecao_nova" value="Remover"
                                    className="bot-buscar-home" />
                            </section>
                        </form>
                    </div>

                </>
            )

        } else {

            return (

                <>
                </>
            )
        }

    }

    const divCriarColecao = (flag: number) => {
        console.log(`FLAG ${flag}`)
        if (flag == 1) {
            return (
                <>
                    <div className="editar_colecao" id="editar_colecao" style={{ display: 'grid', gridRow: '6', gridTemplateColumns: 'repeat(12,1fr)', gridTemplateRows: 'repeat(3,1fr)', paddingLeft: ' 20px', marginTop: '5%' }}>


                        <section style={{ gridRow: '1', gridColumn: '1/5', textAlign: 'left', fontSize: ' 30px' }}>
                            Criar nova coleção
                        </section>


                        {/* <form action="/criar_colecao" method="post" style={{ gridRow: '2/4', gridColumn: '1/13', display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', gridTemplateRows: 'repeat(2,1fr)' }}> */}
                            <section style={{ gridRow: '2', gridColumn: '1/8' }}>
                            <input type="text" name="editar_nome_colecao" onChange={e => setNomeNew(e.target.value)}
                                placeholder="Nome da coleção" value={nomeNew} className="texto_busca" />

                            </section>
                            <form onSubmit={handleCreateCol} style={{ gridRow: '3', gridColumn: '9/13' }}>

                                <section>
                                    <input type="submit" name="add_colecao_nova" value="Adicionar"
                                        className="bot-buscar-home" />
                                </section>
                            </form>
                        {/* </form> */}

                    </div>
                </>
            )
        } else {
            return (
                <>
                </>
            )
        }
    }



    return (
        <div className="App">

            <div className="texto_subtit" style={{ gridColumn: '3/5', gridRow: '1' }}>
                <section >Adm. Coleções </section>
            </div>
            <div style={{ gridRow: '5', gridColumn: '9' }}>


                {/* <button value="false" className="bot-opc" onClick={e => setFlagCriar(e.currentTarget.value)} style={{ fontSize: '22px' }}>Editar/Remover</button> */}
            </div>

            <div style={{ gridRow: '5', gridColumnEnd: '5' }}>
                <button value={1} className="bot-opc" onClick={e => setFlagCriar(parseInt(e.currentTarget.value))} style={{ fontSize: ' 22px' }}>Criar Coleção</button>
            </div>
            <div className="fundo-div-principal">


                <div style={{ display: 'flex', justifyContent: 'space-evenly', padding: '15px 0 25px 0' }}>

                    <table style={{ width: '100%', fontSize: '20px' }}>

                        <>
                            {console.log(nomeOld)}
                        </>
                        {colecoes.map(colecao => (
                            <>
                                <tr>
                                    <td onChange={e => setNomeOld(colecao.nome_c)}>
                                        <input type="radio" name="escolha" value={colecao.nome_c} />
                                    </td>
                                    <td>{colecao.nome_c}</td>
                                    <td>Quantidade de exemplares:
                                        <a style={{ color: 'var(--vermlar_claro)' }}>{colecao.count}</a>

                                    </td>
                                    <td></td>
                                </tr>
                            </>
                        ))}

                    </table >
                </div >

            </div >

            <>
                {handleEditaDeleta(nomeOld)}
                {console.log(flagCriar)}
                {divCriarColecao(flagCriar)}
            </>



        </ div>
    )
}
export default TelaAdmColecoes;
