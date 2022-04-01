import { useContext, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import './Login.css'

function Login() {
  const navigate = useNavigate()
  const {handleLogin, token} = useContext(AuthContext)

  useEffect(() => {
    if (token) {
      navigate('/users')
    }
  },[])

    
  return (
    <div className={"Login"}>
        <h1>Login</h1>
        <Formik
      initialValues={{
        usuario: '',
        senha: '',
      }}

      onSubmit = {(values) => {
        handleLogin({values})

      }}
    >
      <Form>
        <label htmlFor="usuario">Usuario</label>
        <Field id="usuario" name="usuario" placeholder="Usuário" />

        <label htmlFor="senha">Senha</label>
        <Field id="senha" type="password" name="senha" placeholder="Senha" />

        <button type="Logar">Submit</button>
      </Form>
    </Formik>
    </div>
  )
}

export default Login;