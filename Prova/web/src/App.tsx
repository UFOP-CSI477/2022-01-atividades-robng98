import React from 'react';
import './App.css';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


function App() {
	return (


		<div className="d-flex flex-column justify-content-center rounded-circle border border-5 border-success position-absolute 
			start-50 top-50 translate-middle d-flex " id='circuloCentral'>

			<div className=" d-flex flex-column logotipo-home">

				<img width="120" height="120" src="/cart-check-fill.svg" alt="ATV PRAT 2" className="border-bottom border-5 border-danger p-2" />
				<div className='border-bottom text-success border-danger border-3 display-2' style={{ fontFamily: 'var(--font_logo)', }}>Prova SWI</div>
				<a href="https://github.com/UFOP-CSI477/2022-01-atividades-robng98" target="_blank"  rel="noreferrer" style={{ textDecoration: 'none' }}>
					<div className='border-bottom text-success border-danger mt-3 border-2 fs-5' style={{ fontFamily: 'var(--font_logo)', }}>Roberto Nicácio Guimarães</div>
				</a>
				<a href="https://github.com/UFOP-CSI477/2022-01-atividades-robng98" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
				<div className='border-bottom text-success border-danger mt-2 border-1 fs-6' style={{ fontFamily: 'var(--font_logo)', }}>19.1.8013</div>
				</a>
			</div>


		</div>


	);
}

export default App;
