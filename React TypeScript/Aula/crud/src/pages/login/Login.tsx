import { useContext, useEffect, useState } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { LoginDTO } from "../../model/LoginDTO";
import { useNavigate } from "react-router-dom";
import {
  DivForm,
  ImageLogin,
  TitleLogin,
  LabelStyled,
  InputStyled,
  ButtonStyled,
  DescLogoImage,
  ContainerLogin,
  ContainerPageLogin,
} from "./Login.styles";
import { AuthContext } from "../../context/AuthContext";
import { AiFillEyeInvisible } from 'react-icons/ai'
import { AiFillEye } from 'react-icons/ai'


function Login() {
  const {handleLogin} = useContext<any>(AuthContext);
  const navigate = useNavigate()
  const [passValue, setPassValue] = useState(true)
  const [typePass, setTypePass] = useState('password')

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      navigate('/')
    }
  }, [])
  
  return (
    <ContainerPageLogin>
      <ContainerLogin>
        <ImageLogin />
        <DescLogoImage>Vem Ser</DescLogoImage>
        <TitleLogin>Login VemSer</TitleLogin>
        <Formik
        initialValues={{
          usuario: '',
          senha: '',
        }}
        onSubmit={(
          values: LoginDTO,
          { setSubmitting }: FormikHelpers<LoginDTO>
        ) => {
          handleLogin(values)
          setSubmitting(false);
        }}  
      >
        <Form>
          <DivForm>
            <LabelStyled htmlFor="usuario">Usuário</LabelStyled>
            <Field as={InputStyled} name="usuario" id="usuario" placeholder="Digite o nome do usuário" />
          </DivForm>
          <DivForm>
            <LabelStyled htmlFor="senha">Senha</LabelStyled>
            <Field as={InputStyled} name="senha" id="senha" type={typePass} placeholder="Digite a sua senha" />
            {passValue ?
              <AiFillEyeInvisible onClick={() => (setPassValue(false), setTypePass('text'))} />
              : <AiFillEye onClick={() => (setPassValue(true), setTypePass('password'))} />
            }
          </DivForm>
          <ButtonStyled type='submit'>Entrar</ButtonStyled>
        </Form>
        </Formik>
      </ContainerLogin>
    </ContainerPageLogin>
  )
}

export default Login