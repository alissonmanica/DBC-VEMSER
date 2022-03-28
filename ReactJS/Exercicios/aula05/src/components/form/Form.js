import { useContext, useState } from "react";

import { ListContext } from "../../context/ListContext";

import Button from "../Button";
import Input from "../Input";
import Label from "../Label";
import styles from "./Form.module.css"


let idUser = 0;
let id = 0;
let idTemp = 0;

let indexIdUser;

const Form = () => {
    const {listWorkers, setListWorkers, name, setName, email, setEmail, job, setJob} = useContext(ListContext);
    const[buttonName, setButtonName] = useState('Adicionar Usuário');

    const validName = () => {
        const nameSplit = [...name];
         
        const verifyName = nameSplit.some( c => c.toLowerCase() === c.toUpperCase() && c !== ' ');
           
        const isValid = !verifyName;
        
        return isValid;
      }

    const validEmail = () => {
        let listCharacters = email.split('');
      
        let emailSplit = email.split('@');
        
        let haveAt = emailSplit.length > 1;
      
        let domainEmail = haveAt ? emailSplit[1] : '';
        let domainEmailSplit = domainEmail.split('.');
      
        let havePointsInDomain = domainEmailSplit.length > 1;
      
        let haveCharactersBetweenDots = domainEmailSplit.every( d => d.length > 1 );
      
        let startsWithLetter = listCharacters.length ? listCharacters[0].toUpperCase() !== listCharacters[0].toLowerCase() : false;
      
        let isValid = haveAt && havePointsInDomain && haveCharactersBetweenDots && startsWithLetter;
      
        return isValid;
    }

    const validJob = () => {
        const jobSplit = [...job];
         
        const verifyJob = jobSplit.some( c => c.toLowerCase() === c.toUpperCase() && c !== ' ');
           
        const isValid = !verifyJob;
        
        return isValid;
      }

    let spaceNone = email !== '' && name !== '' && job !== '';
    let registerValid = validEmail() && validName() && validJob() && spaceNone;




    const Salvar = (e) => {
        e.preventDefault();
        if (buttonName === 'Adicionar Usuário' && registerValid) {
            setListWorkers([...listWorkers, {id, name, email, job}]);
            id++;
            setName('');
            setEmail('');
            setJob('');
        } else if (buttonName === 'Atualizar Usuário' && registerValid) {
            id = idUser;
            listWorkers[indexIdUser] = {id ,name, email, job};
            id = idTemp;
            setButtonName('Adicionar Usuário');
            setName('');
            setEmail('');
            setJob('');
        } else {
            alert('Erro! Confira os campos do cadastro!');
        }
    }

    const Apagar = (event) => {
        const listaAlterada = listWorkers.filter(item => item.id !== event.id);
        setListWorkers(listaAlterada);
    }


    const Atualizar = (event) => {
        idTemp = id;
        idUser = event.id
        const findId = (item) => {
            return item['id'] === idUser
        }
        indexIdUser = listWorkers.findIndex(findId)
        setButtonName('Atualizar Usuário')
    }

    return (
        <div className={styles.formHome}>
            <form onSubmit={Salvar}>
                <div>
                    <Label name="name" label="Nome:" />
                    <br/>
                    <Input type="text" name="name" placeholder="Digite o nome completo" value={name} changeProp={setName} />
                </div>
                <div>
                    <Label name="email" label="E-mail:" />
                    <br/>
                    <Input type="text" name="email" placeholder="Digite o seu e-mail" value={email} changeProp={setEmail} />
                </div>
                <div>
                    <Label name="job" label="Profissão:" />
                    <br/>
                    <Input type="text" name="job" placeholder="Digite a sua profissão" value={job} changeProp={setJob} />
                </div>     

                <div>
                    <Button type="submit" button={buttonName}/>
                </div>
            </form>
            {listWorkers.length > 0 && listWorkers.map((item, i) => (
                <div className={styles.formList} key={i}>
                    <p>Usuário: <span>{item.name}</span></p>
                    <p>Email: <span>{item.email}</span></p>
                    <p>Profissão: <span>{item.job}</span></p>
                    <button type="button" onClick={() => Apagar(item)}>Apagar</button>
                    <button type="button" onClick={() => Atualizar(item)}>Atualizar</button>
                </div>
            ))}
        </div>
    )
}

export default Form;