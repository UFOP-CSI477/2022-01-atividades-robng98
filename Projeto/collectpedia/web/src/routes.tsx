import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"
import Header from "./components/header/Header";
import ResultBusca from "./components/resultBusca/ResultBusca";

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <App/> }/>
                {/* <Route path="/b_:tipo/:nome" element={<ResultBusca/>}/> */}
            </Routes>


        </BrowserRouter>
    )
}

export default AppRoutes;