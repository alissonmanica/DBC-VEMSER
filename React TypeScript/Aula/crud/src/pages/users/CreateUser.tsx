import { useContext, useEffect, useState } from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import MaskedInput from "react-text-mask";
import moment from 'moment';

import * as Yup from 'yup' 
import api from '../../api';
import 'react-toastify/dist/ReactToastify.css';

import { PessoaDTO } from '../../model/PessoaDTO';
import { UserContext } from '../../context/UserContext';
import { AuthContext} from '../../context/AuthContext'
import Loading from '../../components/Loading';
import {
  DivField,
  InputCreate,
  LabelCreate,
  ButtonStyled,
  FormContainer,
  CreateUserContainer,
} from "./Users.styles"

function CreateUser() {

  const {buttonName, setButtonName, loading, setLoading} = useContext<any>(UserContext)
  const {notLoged} = useContext<any>(AuthContext)
  const [dataUser, setDataUser] = useState({})
  const [dataNascimentoPessoa, setDataNascimentoPessoa] = useState('')
  const {nome, dataNascimento, email, cpf}: any = dataUser

  const {id} = useParams()

  const navigate = useNavigate()

  const maskCPF = [
    /[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/
  ];

  const maskDate = [
    /[0-9]/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/
  ];



  async function newUser(values: PessoaDTO) {
        try {
          await api.post('/pessoa', values)
          Notify.success('Usuário cadastrado com sucesso!', {
            timeout: 2000
          });
        } catch (error) {
            console.log(error)
            Notify.failure('Erro ao cadastrar usuário!', {
              timeout: 2000
            });
        }
    }

  async function getInfoUser() {
    try {
      const {data} = await api.get(`/pessoa/{idPessoa}?idPessoa=${id}`)
      setDataUser(data)
      let dataRecebida = moment(data.dataNascimento).format("DD/MM/YYYY");
      setDataNascimentoPessoa(dataRecebida)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  async function putUser(userAlterado: any) {
    try {
      await api.put(`/pessoa/${id}`, userAlterado)
      Notify.success('Usuário atualizado com sucesso!', {
        timeout: 2000
      });
    } catch (error) {
      console.log(error)
      Notify.failure('Erro ao atualizar usuário!', {
        timeout: 2000
      });
    }
  }

  useEffect(() => {
    notLoged()
    if (buttonName === 'Atualizar') {
      getInfoUser()
    }
  },[])

  if (loading) {
    return <Loading />
  }

  const formSchema = Yup.object().shape({
    cpf: Yup.string()
    .required('Campo obrigatório'),

    dataNascimento: Yup.string()
    .min(10, 'Data Inválida')
    .max(10, 'Data Inválida')
    .required('Campo obrigatório'),

    email: Yup.string()
    .required('Campo obrigatório'),

    nome: Yup.string()
    .required('Campo obrigatório'),
  });

  return (
    <CreateUserContainer>
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
            Notify.failure('Erro ao atualizar usuário!', {
              timeout: 2000
            })

          )
        } else {
          Notify.failure('Erro confira os campos novamente!', {
            timeout: 2000
          });
        }
        }}
    >
    {values => (
      <Form>
          <FormContainer>
          <DivField>
            <LabelCreate htmlFor="nome">Nome:</LabelCreate>
            <Field id="nome" name="nome" placeholder="Digite seu Nome:" />
            {values.errors.nome && values.touched.nome ? (
                <div>{values.errors.nome}</div>
                ) : null}

          </DivField>

          <DivField>
            <LabelCreate htmlFor="cpf">CPF:</LabelCreate>
            <Field name="cpf" render={({ field }: any) => (
                  <MaskedInput
                    {...field}
                    mask={maskCPF}
                    id="cpf"
                    placeholder="digite seu CPF"
                    type="text"
                    onChange={values.handleChange}
                    onBlur={values.handleBlur}
                    className={
                      values.errors.cpf && values.touched.cpf
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                )} />
            {values.errors.cpf && values.touched.cpf ? (
                <div>{values.errors.cpf}</div>
                ) : null}
          </DivField>

          <DivField>
            <LabelCreate htmlFor="dataNascimento">Data de Nascimento:</LabelCreate>
            <Field name="dataNascimento" render={({ field }: any) => (
                  <MaskedInput
                    {...field}
                    mask={maskDate}
                    id="dataNascimento"
                    placeholder="digite sua Data de Nascimento"
                    type="text"
                    onChange={values.handleChange}
                    onBlur={values.handleBlur}
                    className={
                      values.errors.dataNascimento && values.touched.dataNascimento
                        ? "text-input error"
                        : "text-input"
                    }
                  />
                )} />
            {values.errors.dataNascimento && values.touched.dataNascimento ? (
                <div>{values.errors.dataNascimento}</div>
                ) : null}
          </DivField>

          <DivField>
            <LabelCreate htmlFor="email">Email:</LabelCreate>
            <Field
              id="email"
              name="email"
              placeholder="Digite seu E-mail:"
              type="email"
            />
            {values.errors.email && values.touched.email ? (
                <div>{values.errors.email}</div>
                ) : null}
          </DivField>
          
          <ButtonStyled color="#4f7fe7" colorHover="#237c7c" height='30px' type="submit">{buttonName}</ButtonStyled>
        </FormContainer>
      </Form>
    )}
    </Formik>     
    </CreateUserContainer>
  )
}

export default CreateUser