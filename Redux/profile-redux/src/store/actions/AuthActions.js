import { apiAuth } from "../../api";

export const handleLogin = async(values, dispatch, navigate) => {
  try {
    const {data} = await apiAuth.post('/auth', values)
    localStorage.setItem('token', data)
    const logado = {
      type: 'SET_LOGIN',
      token: data,
      auth: true,
    }
    dispatch(logado);
    navigate('/')
  } catch (error) {
    console.log(error);
  }
}

export const handleLogout = (dispatch, navigate) => {
  localStorage.removeItem('token')
  const deslogado = {
    type: 'SET_LOGOUT',
    token: '',
    auth: false,
  }
  dispatch(deslogado);
  navigate('/login')
}