import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { connect } from "react-redux";
import { handleLogin} from "../../store/actions/AuthActions";

function Login({auth, dispatch}) {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/')
    }
  },[])

  const formik = useFormik({
    initialValues: {
      usuario: '',
      senha: '',
    },
    onSubmit: values => {
      handleLogin(values, dispatch, navigate);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
    <label htmlFor="usuario">Usuario</label>
    <input
      id="usuario"
      name="usuario"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.usuario}
    />
    <label htmlFor="senha">Senha</label>
    <input
      id="senha"
      name="senha"
      type="text"
      onChange={formik.handleChange}
      value={formik.values.senha}
    />
    <button type="submit">Submit</button>
  </form>
  )
}

const mapStateToProps = state => ({
  auth: state.authReducer.auth
});

export default connect(mapStateToProps)(Login)