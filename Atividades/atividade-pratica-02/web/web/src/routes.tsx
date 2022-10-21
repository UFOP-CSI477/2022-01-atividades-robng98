import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"
import CadastraDoacao from "./components/cadastrar/CadastraDoacao";
import CadastraLocColeta from "./components/cadastrar/CadastraLocColeta";
import CadastrarPessoas from "./components/cadastrar/CadastrarPessoa";
import CadastraTpSang from "./components/cadastrar/CadastraTpSang";
import Header from "./components/header/Header";
import VisualizarDoacoes from "./components/visualizar/VisualizarDoacoes";
import VisualizarLocColeta from "./components/visualizar/VisualizarLocColeta";
import VisualizarPessoas from "./components/visualizar/VisualizarPessoas";
import VisualizarTpSang from "./components/visualizar/VisualizarTpSang";
// import Visualizar from "./components/telas/VisualizarPessoas";
// import ResultBusca from "./components/resultBusca/ResultBusca";
// import TelaSerie from "./components/telaSerie/TelaSerie";
// import ResultBusca from "./components/resultBusca/ResultBusca";

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/view/pessoas" element={<VisualizarPessoas />} />
                <Route path="/view/doacoes" element={<VisualizarDoacoes />} />
                <Route path="/view/tipos_sanguineos" element={<VisualizarTpSang />} />
                <Route path="/view/locais_coleta" element={<VisualizarLocColeta />} />

                <Route path="/add/pessoas" element={<CadastrarPessoas />} />
                <Route path="/add/locais_coleta" element={<CadastraLocColeta />} />
                <Route path="/add/tipos_sanguineos" element={<CadastraTpSang />} />
                <Route path="/add/doacoes" element={<CadastraDoacao />} />

                {/* <Route path="/b_:tipo/:busca" element={<ResultBusca/>}/>
                <Route path="/:tipo/:serie/:vol" element={<TelaSerie/>}></Route> */}
            </Routes>


        </BrowserRouter>
    )
}

export default AppRoutes;