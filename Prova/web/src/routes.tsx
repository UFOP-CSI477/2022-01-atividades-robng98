import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"
// import AtualizaDistribuicoes from "./components/atualizar/AtualizaDistribuicoes";
// import AtualizaPessoa from "./components/atualizar/AtualizaProduto";
// import AtualizaUnidades from "./components/atualizar/AtualizaUnidades";
import BuscaId from "./components/buscar/BuscaId";
// import BuscaNome from "./components/buscar/BuscaNome";
import CadastraDistribuicoes from "./components/cadastrar/CadastraDistribuicoes";
import CadastraProdutos from "./components/cadastrar/CadastraProdutos";
import CadastraUnidades from "./components/cadastrar/CadastraUnidades";
import Header from "./components/header/Header";
import Invalido from "./components/invalido/invalido";
import VisualizarDistribuicoes from "./components/visualizar/VisualizarDistribuicoes";
import VisualizarProdutos from "./components/visualizar/VisualizarProdutos";
import VisualizarUnidades from "./components/visualizar/VisualizarUnidades";


const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/view/produtos" element={<VisualizarProdutos />} />
                <Route path="/view/distribuicoes" element={<VisualizarDistribuicoes />} />
                <Route path="/view/unidades" element={<VisualizarUnidades />} />

                <Route path="/add/produtos" element={<CadastraProdutos />} />
                <Route path="/add/unidades" element={<CadastraUnidades />} />
                <Route path="/add/distribuicoes" element={<CadastraDistribuicoes />} />

                {/* <Route path="/update/distribuicoes" element={<AtualizaDistribuicoes />} />
                <Route path="/update/produtos" element={<AtualizaPessoa />} />
                <Route path="/update/unidades" element={<AtualizaUnidades />} /> */}

                <Route path="/b_:categ/Id/:busca" element={<BuscaId />} />
                {/* <Route path="/b_:categ/Nome/:busca" element={<BuscaNome />} /> */}


                <Route path="/b_invalid" element={<Invalido />} />
                <Route path="/b_//"element={<Invalido />} />
                <Route path="/b_/Id/" element={<Invalido />} />
                {/* <Route path="/b_/Nome/" element={<Invalido />} /> */}
                <Route path="/b_//:busca" element={<Invalido />} />

                <Route path="/b_:categ/Id/" element={<Invalido />} />
                {/* <Route path="/b_:categ/Nome/" element={<Invalido />} /> */}

                <Route path="/b_/Id/:busca" element={<Invalido />} />
                {/* <Route path="/b_/Nome/:busca" element={<Invalido />} /> */}

            </Routes>

        </BrowserRouter >
    )
}

export default AppRoutes;