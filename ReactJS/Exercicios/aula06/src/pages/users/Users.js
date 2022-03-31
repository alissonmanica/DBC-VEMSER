import { useContext, useEffect } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import api from '../../components/api';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import styles from './Users.module.css'

function User() {
    const navigate = useNavigate()
    const {pessoas, getPessoas, isLogado, token, loading, error} = useContext(AuthContext)

    
    function Setup() {
        if (token) {
            api.defaults.headers.common['Authorization'] = token; 
        } 
        getPessoas()
        if (!token) {
            navigate('/login')
        }
        
        
    }

    function cpfFormat(cpf) {
       return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
    }

    useEffect(() => {
        Setup()
    },[])

    
    if (loading) {
        return <Loading />
    }
    
    if (error) {
        return <Error />
    }

    return (
    <div className={styles.users}>
        <h1>Usuários</h1>
        <div>
            {pessoas.map( pessoa => (
                <div key={pessoa.idPessoa}>
                    <h4>Nome: {pessoa.nome}</h4>
                    <p><strong>Email:</strong> {pessoa.email}</p>
                    <p><strong>Data:</strong> {moment(pessoa.dataNascimento).format('DD/MM/YYYY')}</p>
                    <p><strong>CPF:</strong> {cpfFormat(pessoa.cpf)}</p>
                </div>
            ))}
        </div>
    </div>
    )
}

export default User;