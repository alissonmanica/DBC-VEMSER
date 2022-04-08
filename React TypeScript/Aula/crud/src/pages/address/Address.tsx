import { useContext, useEffect, useState } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import axios from "axios";
import * as Yup from 'yup';

import { AuthContext } from "../../context/AuthContext";
import { EnderecoDTO } from "../../model/EnderecoDTO"
import { AddressDTO } from "../../model/AddressDTO";
import {
  DivForm,
  HeadList,
  EachList,
  EachDesc,
  DivButton,
  InfoUsers,
  DivFormik,
  ButtonDelete,
  ButtonUpdate,
  ButtonStyled,
  DivButtonForm,
  ContainerForm,
  LogradouroDesc,
} from "./Address.styles"

import {
  TitleUsers,
  TableUsers,
  ContainerUsers,
  ContainerTable,
} from "../users/Users.styles"

import Loading from "../../components/Loading";
import api from "../../api"

const SignupSchema = Yup.object().shape({
  cep: Yup.string()
  .min(8, 'Deve conter 9 dígitos (00000-000)')
  .max(9, 'Deve conter 9 dígitos (00000-000)')
  .required('Campo obrigatório!'),

  logradouro: Yup.string()
    .min(2, 'Muito Curto')
    .max(50, 'Muito Longo')
    .required('Campo obrigatório!'),

  numero: Yup.number()
  .max(50, 'Muito Longo!')
  .required('Campo obrigatório!'),

  localidade: Yup.string()
  .min(3, 'Muito Curto!')
  .max(50, 'Muito Longo!')
  .required('Campo obrigatório!'),

  uf: Yup.string()
  .min(2, 'Deve conter apenas 2 digitos!')
  .max(2, 'Deve conter apenas 2 digitos!')
  .required('Campo obrigatório!'),

  pais: Yup.string()
  .min(2, 'Muito Curto!')
  .max(50, 'Muito Longo!')
  .required('Campo obrigatório!'),

  tipo: Yup.string()
  .required('Campo obrigatório!')
});

function Address() {
  const {notLoged} = useContext<any>(AuthContext);
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState<AddressDTO['address']>([])

  const getAddress = async (values: EnderecoDTO, setFieldValue: any) => {
    try {
      const {data} = await axios.get(`https://viacep.com.br/ws/${values.cep}/json/`)
      const {logradouro, bairro, localidade, uf} = data
      setFieldValue('bairro', bairro)
      setFieldValue('logradouro', logradouro)
      setFieldValue('localidade', localidade)
      setFieldValue('uf', uf)
    } catch (error) {
      console.log(error)
    }
  }

  const postAddress = async (values: EnderecoDTO) => {
    const endereco = {
      tipo: values.tipo,
      logradouro: `${values.logradouro} - Bairro ${values.bairro}`,
      numero: parseInt(values.numero),
      complemento: values.complemento,
      cep: values.cep,
      cidade: values.localidade,
      estado: values.uf,
      pais: values.pais,
    }
    console.log(endereco)
    try {
      const {data} = await api.post('endereco/2', endereco)
      console.log(endereco)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  const getAddressApi = async () => {
    try {
      const {data} = await api.get('endereco')
      setAddress(data)
      console.log(address)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteAddress = async (id: number) => {
    try {
      await api.delete(`endereco/${id}`)
      getAddressApi()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    notLoged();
    getAddressApi()
    setLoading(false)
  }, []);
  
  if (loading) {
    return (<Loading />)
  }

  return (
    <DivFormik>
      <h1>Address</h1>
      <Formik
        initialValues={{
          cep: '',
          logradouro: '',
          numero: '',
          complemento: '',
          bairro: '',
          localidade: '',
          uf: '',
          pais: '',
          tipo: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(
          values: EnderecoDTO,
          { setSubmitting }: FormikHelpers<EnderecoDTO>
          ) => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            postAddress(values)
            getAddressApi()
        }}
      >
        { props => (
        <Form>
          <ContainerForm>
            <DivForm>
              <label htmlFor="cep">CEP</label>
              <Field id="cep" name="cep" placeholder="CEP" />
              <button type="button" onClick={() => getAddress(props.values, props.setFieldValue)}>Buscar CEP</button>
              {props.errors.cep && props.touched.cep ? (
               <div>{props.errors.cep}</div>
              ) : null}
            </DivForm>

            <DivForm>
              <label htmlFor="logradouro">Logradouro</label>
              <Field id="logradouro" name="logradouro" placeholder="Logradouro" />
              {props.errors.logradouro && props.touched.logradouro ? (
               <div>{props.errors.logradouro}</div>
              ) : null}
            </DivForm>

            <DivForm>
              <label htmlFor="numero">Numero</label>
              <Field id="numero" name="numero" placeholder="Numero" />   
              {props.errors.numero && props.touched.numero ? (
              <div>{props.errors.numero}</div>
              ) : null}
            </DivForm>

            <DivForm>
              <label htmlFor="complemento">Complemento</label>
              <Field id="complemento" name="complemento" placeholder="Complemento" />  
            </DivForm>

            <DivForm>
              <label htmlFor="bairro">Bairro</label>
              <Field id="bairro" name="bairro" placeholder="Bairro" />     
              {props.errors.bairro && props.touched.bairro ? (
              <div>{props.errors.bairro}</div>
              ) : null}
            </DivForm>

            <DivForm>
              <label htmlFor="localidade">Cidade</label>
              <Field id="localidade" name="localidade" placeholder="Cidade" />  
              {props.errors.localidade && props.touched.localidade ? (
              <div>{props.errors.localidade}</div>
              ) : null}
            </DivForm>

            <DivForm>
              <label htmlFor="uf">Estado</label>
              <Field id="uf" name="uf" placeholder="Estado" />  
              {props.errors.uf && props.touched.uf ? (
              <div>{props.errors.uf}</div>
              ) : null}
            </DivForm>

            <DivForm>
              <label htmlFor="pais">País</label>
              <Field id="pais" name="pais" placeholder="País" />  
              {props.errors.pais && props.touched.pais ? (
              <div>{props.errors.pais}</div>
           ) : null}
            </DivForm>

            <DivForm>
              <label htmlFor="tipo">Tipo</label>
              <Field as="select" id="tipo" name="tipo">
                <option value=''></option>
                <option value="RESIDENCIAL">Residencial</option>
                <option value="COMERCIAL">Comercial</option>
              </Field> 
              {props.errors.tipo && props.touched.tipo ? (
              <div>{props.errors.tipo}</div>
           ) : null}
            </DivForm>
        
          </ContainerForm>

            <DivButtonForm>
              <ButtonStyled type="submit">Cadastrar</ButtonStyled>
            </DivButtonForm>

        </Form>
        )}
      </Formik>
      <ContainerTable>
        <TableUsers>
          <HeadList>
            <EachList>CEP</EachList>
            <EachList>Logradouro</EachList>
            <EachList>Numero</EachList>
            <EachList>Complemento</EachList>
            <EachList>Cidade</EachList>
            <EachList>Estado</EachList>
            <EachList>Pais</EachList>
            <EachList>Tipo</EachList>
          </HeadList>
          {address.map(add => (
            <InfoUsers key={add.idEndereco}>
              <EachDesc>{add.cep}</EachDesc>
              <LogradouroDesc>{add.logradouro}</LogradouroDesc>
              <EachDesc>{add.numero}</EachDesc>
              <EachDesc>{add.complemento}</EachDesc>
              <EachDesc>{add.cidade}</EachDesc>
              <EachDesc>{add.estado}</EachDesc>
              <EachDesc>{add.pais}</EachDesc>
              <EachDesc>{add.tipo}</EachDesc>
              <DivButton>
                <ButtonUpdate>Atualizar</ButtonUpdate>
                <ButtonDelete type="button" onClick={() => deleteAddress(add.idEndereco)}>Deletar</ButtonDelete>
              </DivButton>
            </InfoUsers>
          ))}
        </TableUsers>
      </ContainerTable>
    </DivFormik>
  )
}

export default Address