import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"
import Header from "./components/header/Header";
import VisualizarDoacoes from "./components/telas/VisualizarDoacoes";
import VisualizarPessoas from "./components/telas/VisualizarPessoas";
import VisualizarTpSang from "./components/telas/VisualizarTpSang";
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
                {/* <Route path="/b_:tipo/:busca" element={<ResultBusca/>}/>
                <Route path="/:tipo/:serie/:vol" element={<TelaSerie/>}></Route> */}
            </Routes>


        </BrowserRouter>
    )
}

export default AppRoutes;