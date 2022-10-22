import './header.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = () => {

    const navigate = useNavigate()

    const [busca, setBusca] = useState('')
    const [tipo, setTipo] = useState('')
    const [categoria, setCategoria] = useState('')
    const [key, setKey] = useState(0);
    let flag = 0

    // const [vet_param, setVet_param] = useState([''])
    useEffect(() => {
        // console.log(`/b_${categoria}/${tipo}/${busca}`)
        setBusca('')
        setTipo('')
        setCategoria('')
        flag = 1
        console.log(`FLAG1 ${flag} Busca ${busca} Tipo ${tipo} Categoria ${categoria}`)

        // navigate(`/b_${categoria}/${tipo}/${busca}`)


    }, [key])

    const handleBusca = async (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault()
        let element = 0

        setKey((k) => k + 1)
        // for (let index = 0; index < 10000000; index++) {
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
        //     element = element + 1
            
            
        // }
        console.log(`FLAG ${flag}`)
        navigate(`/b_${categoria}/${tipo}/${busca}`)
        // console.log(`FLAG ${flag}`)
        
            
            
        // }
        // console.log(element)
        // setKey((k) => k + 1)

        // navigate()
    }

    // useEffect(() => {
    //     // console.log(`/b_${categoria}/${tipo}/${busca}`)
    //     setBusca('')
    //     setTipo('')
    //     setCategoria('')
    //     flag = 1
    //     console.log(`FLAG1 ${flag}`)

    //     // navigate(`/b_${categoria}/${tipo}/${busca}`)


    // }, [key])


    const clearClickHandler = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault()
       
        handleBusca(e)
    };

    return (
        <header>
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">AtvPrat 2</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Doações
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><Link className="dropdown-item" to={'/view/doacoes'}>Visualizar info.</Link></li>
                                    <li><Link className="dropdown-item" to={'/add/doacoes'}>Cadastrar Doação</Link></li>
                                    <li><Link className="dropdown-item" to={'/update/doacoes'}>Atualizar Doação</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Locais de Coleta
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark">

                                    <li><Link className="dropdown-item" to={'/view/locais_coleta'}>Visualizar info.</Link></li>
                                    <li><Link className="dropdown-item" to={'/add/locais_coleta'}>Cadastrar Local de Col.</Link></li>
                                    <li><Link className="dropdown-item" to={'/update/locais_coleta'}>Atualizar Local de Col.</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pessoas
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><Link className="dropdown-item" to={'/view/pessoas'}>Visualizar info.</Link></li>
                                    <li><Link className="dropdown-item" to={'/add/pessoas'}>Cadastrar Pessoa</Link></li>
                                    <li><Link className="dropdown-item" to={'/update/pessoas'}>Atualizar Pessoa</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tipo Sanguíneos
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><Link className="dropdown-item" to={'/view/tipos_sanguineos'}>Visualizar info.</Link></li>
                                    <li><Link className="dropdown-item" to={'/add/tipos_sanguineos'}>Cadastrar Tipo Sang.</Link></li>
                                    <li><Link className="dropdown-item" to={'/update/tipos_sanguineos'}>Atualizar Tipo Sang.</Link></li>
                                </ul>
                            </li>

                        </ul>
                    </div>

                    <form  role="search">
                        <div className="d-flex" key={key}>
                            <input className="form-control me-2" type="search" placeholder="Digite a Busca" onChange={e => setBusca(e.target.value)} aria-label="Search" />

                            <select className="form-select form-select-yellow me-2" onChange={e => setTipo(e.target.value)} style={{ width: '100px' }} required>
                                <option selected disabled>Tipo</option>
                                <option value="Id" >Id</option>
                                <option value="Nome">Nome</option>
                            </select>

                            <select className="form-select form-select-yellow me-2" onChange={e => setCategoria(e.target.value)} style={{ width: '150px' }} required>
                                <option selected disabled>Categoria</option>
                                <option value="doacoes" >Doação</option>
                                <option value="locais_coleta">Local Coleta</option>
                                <option value="pessoas">Pessoa</option>
                                <option value="tipos_sanguineos">Tipo Sang.</option>
                            </select>

                            <div className="btn-group">
                                <button type="submit" onClick={handleBusca} className="btn btn-outline-warning" >Buscar</button>

                            </div>
                        </div>
                    </form>

                </div>
            </nav>
        </header>
    );
}

export default Header;