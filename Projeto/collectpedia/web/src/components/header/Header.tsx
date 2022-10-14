import './header.css';
import 'bootstrap/dist/css/bootstrap.css';
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
            <img width="50" height="30" src="/logo2.svg" alt="" />
            <a href="/user/00000000" className="logo-dir" style={{ paddingTop: '4px', gridColumn: '9/11' }} >Área do Usuário | Logar</a>
            <a href="/logout" className="logo-dir" >Logout</a>
            {/* <Alert variant='danger'>Teste</Alert> */}

            {/* <Menu/> */}
        </header>
    );
}

export default Header;