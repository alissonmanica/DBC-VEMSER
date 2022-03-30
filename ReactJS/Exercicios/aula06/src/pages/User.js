import { useContext, useEffect } from 'react';
import moment from 'moment';
import { AuthContext } from '../context/AuthContext';
import api from "../api";


function User() {
    const {pessoas, getPessoas, isLogado, token} = useContext(AuthContext)

    function Setup() {
        if (token) {
            api.defaults.headers.common['Authorization'] = token; 
        }
        isLogado()
        getPessoas()
    }

    function cpfFormat(cpf) {
       return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
    }

    useEffect(() => {
        Setup()
    },[])

    return (
    <div>
        <h1>Usuários</h1>
        {pessoas.map( pessoa => (
            <div key={pessoa.idPessoa}>
                <h3>{pessoa.nome}</h3>
                <p>{pessoa.email}</p>
                <p>{moment(pessoa.dataNascimento).format('DD/MM/YYYY')}</p>
                <p>{cpfFormat(pessoa.cpf)}</p>
            </div>

        ))}
    </div>
    )
}

export default User;