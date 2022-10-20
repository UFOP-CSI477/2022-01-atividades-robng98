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
            <Link to={'/'} style={{gridColumn: '2/3', paddingBottom: '2%'}}><img title='Página Inicial' width="50" height="30" src="/logo2.svg" alt="" /></Link>
            <a href="/user/00000000" className="logo-dir" style={{ gridColumn: '10' }} >Logar</a>
            <a href="/logout" className="logo-dir" style={{ gridColumn: '11' }}>Logout</a>

            {/* <Menu/> */}
        </header>
    );
}

export default Header;