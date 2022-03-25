import { useState } from 'react';

import Mensagem from "./inputs/Mensagem";
import Select from "./inputs/Select";
import styles from "./Contact.module.css"
import Label from './inputs/Label';

function Contact() {
    function Salvar(e) {
        e.preventDefault();
        console.log(username, email)
    }
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    return (
        <div className={styles.background}>
            <form className={styles.form} onSubmit={Salvar}>
                <div className={styles.div}>
                    <Label para="username" label="Digite seu nome completo:" />
                    <input className={styles.input} name="username" placeholder="nome completo" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div >

                <div className={styles.div}>
                    <Label para="email" label="Digite seu e-mail:" />
                    <input className={styles.input} name="email" placeholder="e-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className={styles.div}>
                    <Label para="questions" label="Qual o motivo do contato?" />
                    <Select name="questions" para="questions"/>
                </div>

                <div className={styles.msg}>
                    <Mensagem para="msg" msg="Sua Mensagem" col={35} row={15} placeholder="mensagem" />
                </div>

                <div>
                    <input className={styles.button} type='submit' value="Salvar" />
                </div>
                {username && email && (
                    <>
                        <p>Olá {username}, seu email é: {email}!</p>
                    </>
                )}
            </form>
        </div>
    )
}

export default Contact;