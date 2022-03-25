import { useState } from 'react';

import styles from "./Contato.module.css"
import Input from "./inputs/Input";
import Mensagem from "./inputs/Mensagem";

function Contato() {

    const Enviar = (e) => {
        e.preventDefault();
        console.log(username, email)
        alert(`Ola ${username} retornarei o contato pelo e-mail ${email}, Obrigado!`)
    }

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    console.log(username, email)
    return (
        <div className={styles.contato}>
             <form onSubmit={Enviar}>
                    <Input para="username" label="Digite seu nome completo:" tipo="text" placeholder="Digite aqui o nome" valor={username} propFuncao={setUsername} />

                    <Input para="email" label="Digite seu e-mail:" tipo="email" placeholder="Digite aqui o e-mail" valor={email} propFuncao={setEmail} />
                
                    <Mensagem para="msg" msg="Digite o motivo do contato:" col={60} row={15} placeholder="Digite aqui a mensagem" />
                
                    <input type='submit' value="Enviar" />
            </form>
        </div>
    )
}

export default Contato;