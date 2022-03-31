import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup' 

import { AuthContext } from '../../context/AuthContext';
import apiCep from '../../components/apiCep';
import styles from './Address.module.css'

function Address() {

const navigate = useNavigate()
const {token} = useContext(AuthContext)
const [cep, setCep] = useState('')
const [address, setAddress] = useState({})

const {localidade, logradouro, bairro, ddd, uf} = address

function maskCEP(value) {
  return value.replace(/\D/g, "").replace(/^(\d{5})(\d{3})+?$/, "$1-$2");
};


function callCep(values) {
    values.cep = maskCEP(cep)
    values.rua = logradouro;
    values.bairro = bairro
    values.cidade = localidade
    values.estado = uf
    values.ddd = ddd
}

async function getCep({values}) {
  try {
    const {data} = await apiCep.get(`/${cep}/json/`)
    setAddress(data)
    callCep(values)
    } catch (error) {
      console.log(error)
    }
  }



  function Setup() {
    if (!token) {
      navigate('/login')
  }
  }

  useEffect(() => {
    Setup()
  },[])


  const formSchema = Yup.object().shape({
    cep: Yup.string().min(8, 'Campo tem que conter 8 digitos').max(9, 'Campo só pode conter 8 digitos').required('Campo obrigatório'),
    rua: Yup.string().required('Campo obrigatório'),
    bairro: Yup.string().required('Campo obrigatório'),
    cidade: Yup.string().required('Campo obrigatório'),
    estado: Yup.string().required('Campo obrigatório'),
    ddd: Yup.string().min(2, 'Campo tem que conter 2 digitos').max(2, 'Campo só pode conter 2 digitos').required('Campo obrigatório'),
    telefone: Yup.string().min(8, 'Campo tem que conter 8 digitos').max(9, 'Campo só pode conter 8 digitos').required('Campo obrigatório'),
  });

  return (
    <div className={styles.address}>
      <h1>Address</h1>
      <Formik
      initialValues={{
        cep: '',
        rua: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: '',
        ddd: '',
        telefone: '',
      }}
      validationSchema={formSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {values => (
      <Form>
        <div>
          <label htmlFor="cep">CEP: </label>
          <Field id="cep" name="cep" placeholder="Digite seu CEP" value={maskCEP(cep)} onChange={(e) => setCep(e.target.value)}/>
          <button type="button" onClick={() => getCep(values)}>Buscar CEP</button>
          <ErrorMessage name='cep' />
        </div>

        <div>
          <label htmlFor="rua">Rua: </label>
          <Field id="rua" name="rua" placeholder="Digite sua Rua" />
          <ErrorMessage name='rua' />
        </div>

        <div>
          <label htmlFor="complemento">Complemento: </label>
          <Field id="complemento" name="complemento" placeholder="Digite o complemento (Número, ap...)" />
        </div>

        <div>
          <label htmlFor="bairro">Bairro: </label>
          <Field id="bairro" name="bairro" placeholder="Digite seu Bairro" />
          <ErrorMessage name='bairro' />
        </div>

        <div>
          <label htmlFor="cidade">Cidade: </label>
          <Field id="cidade" name="cidade" placeholder="Digite sua Cidade" />
          <ErrorMessage name='cidade' />
        </div>

        <div>
          <label htmlFor="estado">Estado: </label>
          <Field id="estado" name="estado" placeholder="Digite seu Estado" />
          <ErrorMessage name='cidade' />
        </div>

        <div>
          <label htmlFor="ddd">DDD: </label>
          <Field id="ddd" name="ddd" placeholder="Digite o DDD" />
          <ErrorMessage name='ddd' />
        </div>

        <div>
          <label htmlFor="telefone">Telefone: </label>
          <Field id="telefone" name="telefone" placeholder="Digite seu Telefone" />  
          <ErrorMessage name='telefone' />
        </div>

        <button type="submit">Enviar</button>
      </Form>
      )}
    </Formik>
    </div>
  )
}

export default Address