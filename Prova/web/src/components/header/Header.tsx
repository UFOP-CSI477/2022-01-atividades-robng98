import './header.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Header = () => {

    const navigate = useNavigate()

    const [busca, setBusca] = useState('')
    const [tipo, setTipo] = useState('')
    const [categoria, setCategoria] = useState('')
    const [key, setKey] = useState(0);

    const handleBusca = async (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault()

        clearClick()


        navigate(`/b_${categoria}/${tipo}/${busca}`)
        setBusca('')
        setTipo('')
        setCategoria('')
    }

    const preencheCat = (tipo: string) => {
        switch (tipo) {
            case 'Id':
                return (
                    <>
                        <option value="distribuicoes" >Distribuição</option>
                        <option value="produtos">Produto</option>
                        <option value="unidades">Unidade</option>
                    </>
                )
         
        }
    }

    const clearClick = () => {
        setKey((k) => (k + 1) % 3)
    }

    return (
        <header className='p-0'>
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <img width="45" height="45" src="/cart-check-fill.svg" alt="" className=" p-2 m-1" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link border-bottom border-danger ms-2 me-3" onClick={clearClick} aria-current="page" to={'/'}>Home</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Distribuições
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><Link className="dropdown-item" onClick={clearClick} to={'/view/distribuicoes'}>Visualizar info.</Link></li>
                                    <li><Link className="dropdown-item" onClick={clearClick} to={'/add/distribuicoes'}>Cadastrar distribuição</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Produtos
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark">

                                    <li><Link className="dropdown-item" onClick={clearClick} to={'/view/produtos'}>Visualizar info.</Link></li>
                                    <li><Link className="dropdown-item" onClick={clearClick} to={'/add/produtos'}>Cadastrar Produto</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Unidades
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><Link className="dropdown-item" onClick={clearClick} to={'/view/unidades'}>Visualizar info.</Link></li>
                                    <li><Link className="dropdown-item" onClick={clearClick} to={'/add/unidades'}>Cadastrar Unidade</Link></li>
                                </ul>
                            </li>

                        </ul>
                    </div>

                    <form onSubmit={handleBusca} role="search">
                        <div className="collapse d-flex" key={key}>

                            <select className="form-select form-select-yellow me-2" onChange={e => setTipo(e.target.value)} style={{ width: '100px' }} required>
                                <option selected disabled>Tipo</option>
                                <option value="Id">Id</option>
                            </select>

                            <select required className="form-select me-2" onChange={e => setCategoria(e.target.value)} style={{ width: '150px' }}>
                                <option selected disabled>Categoria</option>

                                {preencheCat(tipo)}
                            </select>

                            <input required className="form-control me-2" type="search" placeholder="Digite a Busca" onChange={e => setBusca(e.target.value)} aria-label="Search" style={{ width: '200px' }} />

                            <div className="btn-group">
                                <button type="submit" className="btn btn-outline-danger" >Buscar</button>

                            </div>
                        </div>
                    </form>

                </div>
            </nav>
        </header>
    );
}

export default Header;