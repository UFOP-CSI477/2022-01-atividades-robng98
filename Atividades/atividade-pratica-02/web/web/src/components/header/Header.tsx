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
                        <option value="doacoes" >Doação</option>
                        <option value="locais_coleta">Local Coleta</option>
                        <option value="pessoas">Pessoa</option>
                        <option value="tipos_sanguineos">Tipo Sang.</option>
                    </>
                )
            case 'Nome':
                return (
                    <>
                        <option value="locais_coleta">Local Coleta</option>
                        <option value="pessoas">Pessoa</option>
                    </>
                )
        }
    }

    const clearClick = () => {
        setKey((k) => (k + 1) % 3)
    }

    return (
        <header>
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <img width="45" height="45" src="/droplet-half.svg" alt="" className="border border-2 border-danger rounded-circle p-2 m-1" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link border-bottom border-warning ms-2 me-3" onClick={clearClick} aria-current="page" to={'/'}>Home</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Doações
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><Link className="dropdown-item" onClick={clearClick} to={'/view/doacoes'}>Visualizar info.</Link></li>
                                    <li><Link className="dropdown-item" onClick={clearClick} to={'/add/doacoes'}>Cadastrar Doação</Link></li>
                                    <li><Link className="dropdown-item" onClick={clearClick} to={'/update/doacoes'}>Atualizar Doação</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Locais de Coleta
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark">

                                    <li><Link className="dropdown-item" onClick={clearClick} to={'/view/locais_coleta'}>Visualizar info.</Link></li>
                                    <li><Link className="dropdown-item" onClick={clearClick} to={'/add/locais_coleta'}>Cadastrar Local de Col.</Link></li>
                                    <li><Link className="dropdown-item" onClick={clearClick} to={'/update/locais_coleta'}>Atualizar Local de Col.</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pessoas
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><Link className="dropdown-item" onClick={clearClick} to={'/view/pessoas'}>Visualizar info.</Link></li>
                                    <li><Link className="dropdown-item" onClick={clearClick} to={'/add/pessoas'}>Cadastrar Pessoa</Link></li>
                                    <li><Link className="dropdown-item" onClick={clearClick} to={'/update/pessoas'}>Atualizar Pessoa</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tipo Sanguíneos
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><Link className="dropdown-item" onClick={clearClick} to={'/view/tipos_sanguineos'}>Visualizar info.</Link></li>
                                    <li><Link className="dropdown-item" onClick={clearClick} to={'/add/tipos_sanguineos'}>Cadastrar Tipo Sang.</Link></li>
                                    <li><Link className="dropdown-item" onClick={clearClick} to={'/update/tipos_sanguineos'}>Atualizar Tipo Sang.</Link></li>
                                </ul>
                            </li>

                        </ul>
                    </div>

                    <form onSubmit={handleBusca} role="search">
                        <div className="collapse d-flex" key={key}>

                            <select className="form-select form-select-yellow me-2" onChange={e => setTipo(e.target.value)} style={{ width: '100px' }} required>
                                <option selected disabled>Tipo</option>
                                <option value="Id">Id</option>
                                <option value="Nome">Nome</option>
                            </select>

                            <select required className="form-select me-2" onChange={e => (setCategoria(e.target.value), console.log(categoria))} style={{ width: '150px' }}>
                                <option selected disabled>Categoria</option>

                                {preencheCat(tipo)}
                            </select>

                            <input required className="form-control me-2" type="search" placeholder="Digite a Busca" onChange={e => setBusca(e.target.value)} aria-label="Search" style={{ width: '200px' }} />

                            <div className="btn-group">
                                <button type="submit" className="btn btn-outline-warning" >Buscar</button>

                            </div>
                        </div>
                    </form>

                </div>
            </nav>
        </header>
    );
}

export default Header;