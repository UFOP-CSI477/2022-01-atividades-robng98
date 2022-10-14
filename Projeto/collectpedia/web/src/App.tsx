import React from 'react';
import logo from './logo2.svg';
import './App.css';
import api from './services/api';
import { Alert, Button } from 'react-bootstrap';

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// function App() {
const App = () => {

  // const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('Comic');


  const handleBuscaSerie = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // const tipo = event.target;

    console.log(tipo)

    // const data = {
    //   nome: home-busca,
    //   tipo: opc_busca
    // }

    // navigate(`/b_${tipo}/${nome}`);
    // navigate()




  }


  return (
    <div className="App" >


      <div className="fundo-div-principal" style={{ gridRow: '3', gridColumn: '3/11', marginBottom: '10%', paddingBottom: '5%', marginTop: '10%' }}>

        <form onSubmit={handleBuscaSerie}>
          <div className="logotipo-home">
            <img width="150" height="150" src="/logo2.svg" alt="" />
            <a style={{ fontSize: 'var(--font-sz-maxx)', fontFamily: 'var(--font_logo)' }}>Collectpedia</a>
          </div>
          <p>
            <select name="opc_busca" className="caixa-tp-busca" value={tipo} onChange={e => setTipo(e.target.value)}>
              <option value="Comic">Comics</option>
              <option value="Manga">Manga</option>
            </select>
          </p>
          <p><input type="text" placeholder="Digite aqui" title="Buscar série" className="texto_busca" name="home-busca" required /></p>

          <br /><br />
          <button type="submit" className="bot-buscar-home">Enviar</button>

        </form>
      </div>

      <div className="fundo-div-principal" style={{ paddingBottom: '5%', gridRow: '4', paddingTop: '0', display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', gridTemplateRows: '1fr'}}>


        <p>
          <div style={{ textAlign: 'start', gridRow: '1', gridColumn: '1/6', fontSize: '30px', fontWeight: '700', margin: '0 0 5% 2%' }}>
            <p>Lançamentos recentes</p>
          </div>

        </p>
        <div style={{ gridRow: '2', gridColumn: '1/13', display: 'flex', justifyContent: 'space-evenly' }}>
          {/* <a className="img_b">
                  <img width="150" height="230" src="{{c1}}" style=" border-radius: 8%;"></a>
                <a ><img width="150" height="230" src="{{c2}}" style="border-radius: 8%;"></a>
                <a ><img width="150" height="230" src="{{c3}}" style="border-radius: 8%;"></a>
                <a ><img width="150" height="230" src="{{c4}}" style="border-radius: 8%;"></a> */}
        </div>

      </div>


    </div >
  );
}

export default App;
