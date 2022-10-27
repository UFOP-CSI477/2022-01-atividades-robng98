import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components"
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

const TelaUsuario = (props: TelaUserProps) => {

    const email = props.email

    const { serie } = useParams();


    const [colecao, setColecao] = useState<string>()
    const [colecoes, setColecoes] = useState<Colecoes_Model[]>([])
    const [countEditExemp, setCountEditExemp] = useState<CountInfosDir_Model>();
    const [countStatusPub, setCountStatusPub] = useState<CountInfosDir_Model[]>([]);
    const [countGeneros, setCountGeneros] = useState<CountInfosDir_Model[]>([]);
    const [countRoteirista, setCountRoteirista] = useState<CountInfosDir_Model[]>([]);
    const [countDesenhista, setCountDesenhista] = useState<CountInfosDir_Model[]>([]);
    const [countMangaka, setCountMangaka] = useState<CountInfosDir_Model[]>([]);
    const [countDemografia, setCountDemografia] = useState<CountInfosDir_Model[]>([]);



    const navigate = useNavigate()

    let email_ = ''


    try {
        email_ = `${email}`
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

        console.log(email)

        api.get(`/colecoes/${email_}`, config).then(response => {
            setColecoes(response.data)
        })

        handleInfosDir(colecao)

    }, [email_, colecao]);

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

        console.log(rot)

        if (rot?.length !== 0 && rot !== undefined && des?.length === 0) {
            const nome_r = rot.slice(0, 1)
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
                </div>
            )


        }

        if (des?.length !== 0 && des !== undefined && rot?.length === 0) {
            const nome_r = rot.slice(0, 1)
            if (mangk?.length !== 0 && mangk !== undefined) {
                const nome_m = mangk.slice(0, 1)
                return (
                    <div style={{ gridColumn: '6/12', gridRow: '2' }}>


                        <div className="tx-u-c">
                            <br /> Top Desenhista em títulos<br />
                        </div>
                        <div className="tx-u-v">
                            {nome_r.map((elem) => (
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
                        <br /> Top Desenhista em títulos<br />
                    </div>
                    <div className="tx-u-v">
                        {nome_r.map((elem) => (
                            <>
                                <a style={{ color: 'var(--vermlar_claro) ' }}>{elem.nome_desenhista}</a> <br />
                            </>
                        ))}

                    </div>
                </div>
            )


        }

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

    // const info_edicao = direita.slice(0, 1)
    // data_la = info_edicao.map(item => (
    //     item.data_lanc
    // )
    // )
    // const rel_date = data_la.toString().substring(0, 10)

    // const altVet = async (check: boolean, num: string) => {

    //     if (check && addVet.indexOf(num) === -1) {
    //         setAddVet(old => [...old, num])

    //     } else {
    //         if (!check && addVet.indexOf(num) !== -1) {
    //             setAddVet(addVet.filter(item => item !== num))

    //         }
    //     }

    // }

    // const altVet = async (check: boolean, elem: string) => {

    //     if (check && addVet.indexOf(elem) === -1) {
    //         console.log(elem)
    //         setAddVet([elem])
    //     }

    // }

    // const altData = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //     e.preventDefault()
    //     setNumero(e.currentTarget.id)
    //     // console.log(e.currentTarget.value)
    // }

    return (
        <div className="App">


            <div className="texto_subtit" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gridTemplateRows: '2fr,1fr', gridColumn: '3/13', gridRow: '2' }}>
                <section >USER </section>
            </div>

            <div style={{ gridRow: '3' }} className="texto_subtit" >
                <section style={{ fontSize: 'large', marginLeft: ' 20px' }}> Email:{email}</section>
            </div>

            <div className="fundo-div-principal" style={{ gridRow: '4/8', gridColumn: '3/7', marginRight: '5%' }}>

                {
                    colecoes.map(item => (

                        <>

                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '24px' }}>
                                {item.nome_c}

                            </div>

                            <table style={{ width: '100%', fontSize: '18px' }}>
                                <tr>
                                    <td>Quantidade de exemplares: <a style={{ color: 'var(--vermlar_claro)' }}>{item.count}</a></td>
                                    <td>Última aquisição feita em: <a style={{ color: 'var(--vermlar_claro)' }}>{item.max.substring(0, 10)}</a></td>
                                </tr>
                                <p></p>
                            </table>


                            <div>
                                <label htmlFor="nome_col1" className="bot-opc" onClick={e => setColecao(item.nome_c)} style={{ fontSize: '18px' }} >Exibir info.</label>
                            </div>


                        </>
                    ))
                }
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Link to={'/admColecoes'} state={{ colecoes: colecoes, email: email_ }}>
                        <button name="adm_col"
                            className="bot-opc" style={{ fontSize: 'var(--font-sz-max)', width: '150px' }}>
                            Administrar
                        </button>
                    </Link>
                </div>
            </div >


            <div className="fundo-div-principal" style={{
                minHeight: '500px', gridRow: '4/5', gridColumn: '7/11', display: 'grid',
                gridTemplateColumns: 'repeat(15,1fr)', gridTemplateRows: '0.25fr 0.5fr 0.3fr', paddingLeft: ' 20px', paddingTop: '5%',
                paddingRight: '0px', paddingBottom: '0%', marginBottom: '0'
            }}>

                {handleEditExemp(countEditExemp)}
                {handleStatusPub(countStatusPub)}
                {handleGenDemo(countGeneros, countDemografia)}
                {handleRotDes(countRoteirista, countDesenhista, countMangaka)}


            </div>

        </ div>
    )
}
export default TelaUsuario;
