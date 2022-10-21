import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"
import AtualizaDoacao from "./components/atualizar/AtualizaDoacao";
import AtualizaLocColeta from "./components/atualizar/AtualizaLocColeta";
import AtualizaPessoa from "./components/atualizar/AtualizaPessoa";
import AtualizaTpSang from "./components/atualizar/AtualizaTpSang";
import CadastraDoacao from "./components/cadastrar/CadastraDoacao";
import CadastraLocColeta from "./components/cadastrar/CadastraLocColeta";
import CadastraPessoas from "./components/cadastrar/CadastraPessoa";
import CadastraTpSang from "./components/cadastrar/CadastraTpSang";
import Header from "./components/header/Header";
import VisualizarDoacoes from "./components/visualizar/VisualizarDoacoes";
import VisualizarLocColeta from "./components/visualizar/VisualizarLocColeta";
import VisualizarPessoas from "./components/visualizar/VisualizarPessoas";
import VisualizarTpSang from "./components/visualizar/VisualizarTpSang";


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

                <Route path="/add/pessoas" element={<CadastraPessoas />} />
                <Route path="/add/locais_coleta" element={<CadastraLocColeta />} />
                <Route path="/add/tipos_sanguineos" element={<CadastraTpSang />} />
                <Route path="/add/doacoes" element={<CadastraDoacao />} />

                <Route path="/update/doacoes" element={<AtualizaDoacao />} />
                <Route path="/update/pessoas" element={<AtualizaPessoa />} />
                <Route path="/update/tipos_sanguineos" element={<AtualizaTpSang />} />
                <Route path="/update/locais_coleta" element={<AtualizaLocColeta />} />


                {/* <Route path="/b_:tipo/:busca" element={<ResultBusca/>}/>
                <Route path="/:tipo/:serie/:vol" element={<TelaSerie/>}></Route> */}
            </Routes>


        </BrowserRouter>
    )
}

export default AppRoutes;