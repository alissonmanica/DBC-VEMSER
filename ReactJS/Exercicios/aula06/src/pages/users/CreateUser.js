import { useContext, useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import MaskedInput from "react-text-mask";
import moment from 'moment';

import * as Yup from 'yup' 
import api from '../../components/api';
import 'react-toastify/dist/ReactToastify.css';
import './CreateUser.css';

import { AuthContext } from '../../context/AuthContext';
import { UserContext } from '../../context/UserContext';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

function CreateUser() {
  const {token} = useContext(AuthContext)
  const {buttonName, setButtonName, loading, setLoading} = useContext(UserContext)
  const [dataUser, setDataUser] = useState({})
  const [dataNascimentoPessoa, setDataNascimentoPessoa] = useState('')

  const {nome, dataNascimento, email, cpf} = dataUser


  function notify(mensagem) {
    toast.success(mensagem, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }


  function notifyError(mensagem) {
    toast(mensagem)
  }
  const navigate = useNavigate()
  const location = useLocation()

  const locationId = location.pathname.substring(13)

  const maskCPF = [
    /[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/
  ];

  const maskDate = [
    /[0-9]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/
  ];



  async function newUser(values) {
        try {
          const {data} = await api.post('/pessoa', values)
          notify('Usuário cadastrado com sucesso!')
        } catch (error) {
            console.log(error)
            notifyError("Erro ao cadastrar o usuário!")
        }
    }

  async function getInfoUser() {
    try {
      const {data} = await api.get(`/pessoa/{idPessoa}?idPessoa=${locationId}`)
      setDataUser(data)
      let dataRecebida = moment(data.dataNascimento).format("DD/MM/YYYY");
      setDataNascimentoPessoa(dataRecebida)
      setLoading(false)
    } catch (error) {
      <Error />
      console.log(error)
    }
  }

  async function putUser(userAlterado) {
    try {
      const {data} = await api.put(`/pessoa/${locationId}`, userAlterado)
      notify('Usuário atualizado com sucesso!')
    } catch (error) {
      console.log(error)
      notifyError("Erro ao atualizar o usuário!")
    }
  }

  useEffect(() => {
    if (buttonName === 'Atualizar') {
      getInfoUser()
    }
  },[])

  if (loading) {
    return <Loading />
  }

  const formSchema = Yup.object().shape({
    cpf: Yup.string().required('Campo obrigatório'),
    dataNascimento: Yup.string().min(10, 'Data Inválida').max(10, 'Data Inválida').required('Campo obrigatório'),
    email: Yup.string().required('Campo obrigatório'),
    nome: Yup.string().required('Campo obrigatório'),
  });

  return (
    <div className={'CreateUser'}>
        <Formik
      initialValues={buttonName === 'Atualizar' ? ({
        cpf: cpf,
        dataNascimento: dataNascimentoPessoa,
        email: email,
        nome: nome,
      })
      : {
        cpf: '',
        dataNascimento: '',
        email: '',
        nome: '',
      }}
      validationSchema={formSchema}
      onSubmit={(values) => {
        let formataCPF = values.cpf.replaceAll('.', '')
        let novoCPF = formataCPF.replace('-','');
        values.cpf = novoCPF
        let dataFormatada = values.dataNascimento.replaceAll('/', '-')
        dataFormatada = moment(dataFormatada, 'DD/MM/YYYY').format('YYYY-MM-DD');
        values.dataNascimento = dataFormatada
        if (buttonName === 'Atualizar') {
          const userAlterado = {
            cpf: values.cpf,
            dataNascimento: values.dataNascimento,
            email: values.email,
            nome: values.nome,
          }
          putUser(userAlterado)
          setTimeout(() => {
            navigate('/users')
          }, 2000);
        } else if (buttonName === 'Cadastrar') {
          if (values.nome.toLowerCase() !== values.nome.toUpperCase() && values.nome.length > 3) {
            newUser(values);
            setTimeout(() => {
              navigate('/users')
            }, 2000);
          } else (
            notifyError("Erro, digite um nome válido!")

          )
        } else {
          notifyError("Erro, confira os campos novamente!")
        }
        }}
    >
    {values => (
     
      <Form>
        <div>
          <label htmlFor="nome">Nome:</label>
          <Field id="nome" name="nome" placeholder="Digite seu Nome:" />
          <ErrorMessage name='nome' />

        </div>

        <div>
          <label htmlFor="cpf">CPF:</label>
          <Field name="cpf" render={({ field }) => (
                <MaskedInput
                  {...field}
                  mask={maskCPF}
                  id="cpf"
                  placeholder="digite seu CPF"
                  type="text"
                  onChange={values.handleChange}
                  onBlur={values.handleBlur}
                  className={
                    values.errors.phone && values.touched.phone
                      ? "text-input error"
                      : "text-input"
                  }
                />
              )} />
          <ErrorMessage name='cpf' />
        </div>

        <div>
          <label htmlFor="dataNascimento">Data de Nascimento:</label>
          <Field name="dataNascimento" render={({ field }) => (
                <MaskedInput
                  {...field}
                  mask={maskDate}
                  id="dataNascimento"
                  placeholder="digite sua Data de Nascimento"
                  type="text"
                  onChange={values.handleChange}
                  onBlur={values.handleBlur}
                  className={
                    values.errors.phone && values.touched.phone
                      ? "text-input error"
                      : "text-input"
                  }
                />
              )} />
          <ErrorMessage name='dataNascimento' />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <Field
            id="email"
            name="email"
            placeholder="Digite seu E-mail:"
            type="email"
          />
          <ErrorMessage name='email' />
        </div>
        
        <button type="submit">{buttonName}</button>
        </Form>
    )}
    </Formik>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </div>
  )
}

export default CreateUser