import { Link } from "react-router-dom";
import styled from "styled-components";

const DivAlert = styled.div`
    display: grid;
    grid-template-columns: repeat(12,1fr);
    grid-template-rows: repeat(5,1fr);
`

const AlertCent = styled.div.attrs(() => ({
    className: " alert m-3 alert-danger",
    role: "alert"
}))`
    grid-column: 1/13;
    grid-row: 1/4
`

const Invalido = () => {
    return (
        <DivAlert>
            <AlertCent>
                Algo deu errado. Tente novamente, ou <Link to="/" className="alert-link">clique aqui</Link> para voltar à página inicial.
            </AlertCent>
        </DivAlert>
    )
}

export default Invalido