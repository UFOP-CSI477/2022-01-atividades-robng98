import './header.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
// import { Alert } from 'react-bootstrap';
// import Menu from '../menu/Menu'


// function Header(){

// }

// interface HeaderProps {
//     name: string;
// }

// const Header = (props: HeaderProps) => {
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
                                    <li><Link className="dropdown-item" to={'#'}>Another action</Link></li>
                                    <li><Link className="dropdown-item" to={'#'}>Something else here</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Pessoas
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/view/pessoas">Visualizar info.</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tipo Sanguíneos
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/view/tipos_sanguineos">Visualizar info.</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Locais de Coleta
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/view/locais_coleta">Visualizar info.</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
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