import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';

import { AuthContext } from '../../context/AuthContext';
import apiCep from '../../components/apiCep';
import styles from './Address.module.css'

function Address() {

const navigate = useNavigate()
const {token} = useContext(AuthContext)
const [cep, setCep] = useState('')
const [address, setAddress] = useState({})

const {localidade, logradouro, bairro, ddd, uf} = address


async function getCep({values}) {
  try {
    const {data} = await apiCep.get(`/${cep}/json/`)
    setAddress(data)
      console.log(values)
        values.rua = logradouro;
        values.bairro = bairro
        values.cidade = localidade
        values.estado = uf
        values.ddd = ddd
    } catch (error) {
      console.log(error)
    }
    console.log(address)
  }


  function Setup() {
    if (!token) {
      navigate('/login')
  }
  }

  useEffect(() => {
    Setup()
  },[])

  function verifyValues(values) {
    if(values.cep === '' && values.rua === '' && values.bairro === '' && values.cidade === '' && values.estado === '' && values.ddd === '' && values.telefone === '') {
      return true;
    } else {
      return false;
    }
  }

  function verifyObject() {
    if (Object.keys(address).length) {
      return true;
    } else {
      return false;
    }
  }

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
      onSubmit={(values) => {
        if (verifyObject() && !verifyValues(values) ) {
          alert(JSON.stringify(values, null, 2));
          console.log(values)
        } else {
          alert('error!')
        }
      }}
    >
      {values => (
      <Form>
        <div>
          <label htmlFor="cep">CEP: </label>
          <Field id="cep" name="cep" placeholder="Digite seu CEP" onBlur={(e) => setCep(e.target.value)} />
          <button type="button" onClick={() => getCep(values)}>Buscar CEP</button>
        </div>

        <div>
          <label htmlFor="rua">Rua: </label>
          <Field id="rua" name="rua" placeholder="Digite sua Rua" />
        </div>

        <div>
          <label htmlFor="complemento">Complemento: </label>
          <Field id="complemento" name="complemento" placeholder="Digite o complemento (Número, ap...)" />
        </div>

        <div>
          <label htmlFor="bairro">Bairro: </label>
          <Field id="bairro" name="bairro" placeholder="Digite seu Bairro" />
        </div>

        <div>
          <label htmlFor="cidade">Cidade: </label>
          <Field id="cidade" name="cidade" placeholder="Digite sua Cidade" />
        </div>

        <div>
          <label htmlFor="estado">Estado: </label>
          <Field id="estado" name="estado" placeholder="Digite seu Estado" />
        </div>

        <div>
          <label htmlFor="ddd">DDD: </label>
          <Field id="ddd" name="ddd" placeholder="Digite o DDD" />
        </div>

        <div>
          <label htmlFor="telefone">Telefone: </label>
          <Field id="telefone" name="telefone" placeholder="Digite seu Telefone" />  
        </div>

        <button type="submit">Enviar</button>
      </Form>
      )}
    </Formik>
    </div>
  )
}

export default Address