


const SignUp = () => {


    return (
        <div className="App">

            <p className="texto_subtit">
                CRIAR USUÁRIO
            </p>
            {/* <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12,1fr)' }}> */}

                <div className="fundo-div-principal" style={{ gridRow: '3', padding: '25px 20px 30px 30px' }}>



                    <p> <input type="text" placeholder="Username" name="userName" className="texto_busca"
                        // required style={{ width: '40%' }} onChange={e => setEmail(e.target.value)} /></p>
                        required style={{ width: '40%' }} /></p>

                    <p> <input type="email" placeholder="Email" name="email" className="texto_busca"
                        // required style={{ width: '40%' }} onChange={e => setEmail(e.target.value)} /></p>
                        required style={{ width: '40%' }} /></p>

                    <p><input type="password" placeholder="Senha" name="senha" className="texto_busca"
                        // required style={{ width: '40%' }} onChange={e => setSenha(e.target.value)} /></p>
                        required style={{ width: '40%' }} /></p>


                    <p><input type="password" placeholder="Confirmar Senha" name="Confsenha" className="texto_busca"
                        // required style={{ width: '40%' }} onChange={e => setSenha(e.target.value)} /></p>
                        required style={{ width: '40%' }} /></p>

                    <div style={{ marginTop: '10%', gridColumn: '4', textAlign: 'start' }}>
                        Já possui uma conta? Então, clique <a href="/login" style={{ color: 'var(--vermlar_escuro)' }}>aqui</a> para fazer seu login.
                    </div>

                </div>
                {/* <form onSubmit={handleLoginUser} style={{gridColumn: '8/10', gridRow: '4'}}> */}
                <form style={{ gridColumn: '8/10', gridRow: '4' }}>
                    <input type="submit" name="acao" value="Entrar" className="bot-buscar-home" />
                </form>
            </div>
        // </div>
    )
}

export default SignUp