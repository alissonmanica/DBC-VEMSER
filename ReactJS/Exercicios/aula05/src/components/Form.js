import { useContext, useState } from "react";

import { ListContext } from "../context/ListContext";

import Button from "./Button";
import Input from "./Input";
import Label from "./Label";



let idUser = 0;
let id = 0;
let idTemp = 0;

const Form = () => {
    const {listWorkers, setListWorkers, name, setName, email, setEmail, job, setJob} = useContext(ListContext);
    const[buttonName, setButtonName] = useState('Adicionar Usuário');


    const Salvar = (e) => {
        e.preventDefault()
        if (buttonName === 'Adicionar Usuário' && name !== '') {
            setListWorkers([...listWorkers, {id, name, email, job}]);
            id++;
            console.log(listWorkers)
        } else if (buttonName === 'Atualizar Usuário') {
            id = idUser
            console.log(idUser)
            listWorkers[idUser] = {id ,name, email, job}
            console.log(listWorkers)
            id = idTemp
            setButtonName('Adicionar Usuário')
        } else {
            alert('Error!')
        }
    }

    const Apagar = (event) => {
        const listaAlterada = listWorkers.filter(item => item.id != event.id);
        setListWorkers(listaAlterada);
    }

    const listaAtualizada = () => {

    }

    const Atualizar = (event) => {
        idUser = event.id
        idTemp = id
        setButtonName('Atualizar Usuário')
    }
   

    return (
        <>
            <form onSubmit={Salvar}>
                <div>
                    <Label name="nome" label="Nome:" />
                    <Input type="text" name="nome" placeholder="Digite o nome completo" value={name} changeProp={setName} />
                </div>
                <div>
                    <Label name="email" label="E-mail:" />
                    <Input type="text" name="email" placeholder="Digite o seu e-mail" value={email} changeProp={setEmail} />
                </div>
                <div>
                    <Label name="profissao" label="Profissão:" />
                    <Input type="text" name="profissao" placeholder="Digite a sua profissão" value={job} changeProp={setJob} />
                </div>     

                <div>
                    <Button type="submit" button={buttonName}/>
                </div>
            </form>
            {listWorkers.length && listWorkers.map((item, i) => (
                <div key={i}>
                    <p>Nome:{item.name}</p>
                    <p>Email:{item.email}</p>
                    <p>Profissão:{item.job}</p>
                    <button type="button" onClick={() => Apagar(item)}>Apagar</button>
                    <button type="button" onClick={() => Atualizar(item)}>Atualizar</button>
                </div>
            ))}
        </>
    )
}

export default Form;