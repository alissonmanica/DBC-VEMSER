import { useContext } from 'react';
import { Formik, Field, Form } from 'formik';

import { AuthContext } from '../context/AuthContext';

function Login() {

    const {handleLogin} = useContext(AuthContext)

  return (
    <div>
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

        <button type="submit">Submit</button>
      </Form>
    </Formik>
    </div>
  )
}

export default Login;