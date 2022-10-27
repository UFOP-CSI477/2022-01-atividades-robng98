import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"
import AddExemplar from "./components/addExemp/AddExemplar";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import ResultBusca from "./components/resultBusca/ResultBusca";
import SignUp from "./components/signup/Signup";
import TelaAdmColecoes from "./components/telaAdmColecoes/TelaAdmColecoes";
import TelaSerie from "./components/telaSerie/TelaSerie";
import TelaUsuario from "./components/telaUsuario/TelaUsuario";
// import ResultBusca from "./components/resultBusca/ResultBusca";

const AppRoutes = () => {

    const email = window.localStorage.getItem('email') || undefined;

    return (
        <BrowserRouter>
            <Header email={email}/>
            <Routes>
                <Route path="/" element={ <App/> }/>
                <Route path="/b_:tipo/:busca" element={<ResultBusca/>}/>
                <Route path="/:tipo/:serie/:vol" element={<TelaSerie/>}/>

                <Route path="/login" element={<Login />} />
                <Route path="/signUp" element={<SignUp />} />

                <Route path="/addExemplar" element={<AddExemplar />} />
                <Route path="/usuario" element={<TelaUsuario email={email}/>}/>
                <Route path="/admColecoes" element={<TelaAdmColecoes />}/>

            </Routes>


        </BrowserRouter>
    )
}

export default AppRoutes;