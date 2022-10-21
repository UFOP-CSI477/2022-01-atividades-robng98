import './header.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const Header = () => {


    return (
        <header>
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
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
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to={'/view/doacoes'}>Visualizar info.</Link></li>
                                    <li><Link className="dropdown-item" to={'/add/doacoes'}>Cadastrar Doação</Link></li>
                                    <li><Link className="dropdown-item" to={'/update/doacoes'}>Atualizar Doação</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pessoas
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to={'/view/pessoas'}>Visualizar info.</Link></li>
                                    <li><Link className="dropdown-item" to={'/add/pessoas'}>Cadastrar Pessoa</Link></li>
                                    <li><Link className="dropdown-item" to={'/update/pessoas'}>Atualizar Pessoa</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tipo Sanguíneos
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to={'/view/tipos_sanguineos'}>Visualizar info.</Link></li>
                                    <li><Link className="dropdown-item" to={'/add/tipos_sanguineos'}>Cadastrar Tipo Sang.</Link></li>
                                    <li><Link className="dropdown-item" to={'/update/tipos_sanguineos'}>Atualizar Tipo Sang.</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Locais de Coleta
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to={'/view/locais_coleta'}>Visualizar info.</Link></li>
                                    <li><Link className="dropdown-item" to={'/add/locais_coleta'}>Cadastrar Local de Col.</Link></li>
                                    <li><Link className="dropdown-item" to={'/update/locais_coleta'}>Atualizar Local de Col.</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;