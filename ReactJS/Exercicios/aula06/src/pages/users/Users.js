import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import { ToastContainer, toast } from 'react-toastify';
import moment from 'moment';

import api from '../../components/api';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import './Users.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'react-toastify/dist/ReactToastify.css';

import { AuthContext } from '../../context/AuthContext';
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';

function User() {
    const navigate = useNavigate()
    const {token} = useContext(AuthContext)
    const {getPessoas, pessoas, loading, setLoading, error, setButtonName} = useContext(UserContext);


    function notify() {
        toast.success("Usuário Deletado!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
    
    function notifyError() {
        toast("Houve um erro ao deletar usuário!")
    }

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


    function handleDelete(id) {
        confirmAlert({
            title: 'Confirme',
            message: 'Tem certeza que deseja excluir?',
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        try {
                            await api.delete(`/pessoa/${id}`)    
                            notify()
                            setTimeout(() => {
                                getPessoas()
                            }, 1500);
                        } catch (error) {
                            notifyError()
                            console.log(error)
                        }
                    }
                },
                {
                    label: 'Não',
                }
            ]
        });
    }

    return (
        <div className={"Users"}>
        <h1>Usuários</h1>
        <Link to='/create-user' onClick={setButtonName('Cadastrar')}>Cadastrar Usuário</Link>
        <main>
            {pessoas.map( pessoa => (
                <div key={pessoa.idPessoa}>
                    <h4>Nome: {pessoa.nome}</h4>
                    <p><strong>Email:</strong> {pessoa.email}</p>
                    <p><strong>Data:</strong> {moment(pessoa.dataNascimento).format('DD/MM/YYYY')}</p>
                    <p><strong>CPF:</strong> {cpfFormat(pessoa.cpf)}</p>
                    <button onClick={() => handleDelete(pessoa.idPessoa)}>Deletar Usuário</button>
                    <button onClick={() => (setButtonName('Atualizar'), setLoading(true), navigate(`/create-user/${pessoa.idPessoa}`)) } >Atualizar</button>
                </div>
            ))}
        </main>           
            <ToastContainer/>
    </div>
    )
}

export default User;