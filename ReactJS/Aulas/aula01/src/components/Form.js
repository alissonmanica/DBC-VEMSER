import {useState} from 'react';

const Form = () => {

    const CadastrarUsuario = (e) => {
        e.preventDefault();
        console.log(`seu login e senha é ${login}, ${senha}`);
    }
    const [login, setLogin] = useState();
    const [senha, setSenha] = useState();
    return (
        <>
            <h1>Meu Formulario</h1>
            <form onSubmit={CadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite o seu login" value={login} onChange={(e) => setLogin(e.target.value)} />
                </div>
                <div>
                    <input type="password" placeholder='Digite sua senha' value={senha} onChange={(e) => setSenha(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </>
    )
}

export default Form;