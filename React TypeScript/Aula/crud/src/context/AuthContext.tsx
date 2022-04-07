import {FC, createContext, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginDTO } from '../model/LoginDTO';
import api from '../api';

export const AuthContext = createContext({})

const AuthProvider: FC<any>= ({children}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isToken, setIsToken] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.defaults.headers.common['Authorization'] = token;
      setIsToken(true);
    } else {
      navigate('/login')
    }
    setLoading(false)
  }, []);

  const handleLogin = async(user: LoginDTO) => {
    try {
      const {data} = await api.post('/auth', user);
      api.defaults.headers.common['Authorization'] = data;
      localStorage.setItem('token', data);
      setIsToken(true)
      navigate('/');
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsToken(false)
    navigate('/login');
    setLoading(false)
  }

  const notLoged = () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
      }
    }

  if (loading) {
    return (<h1>Loading...</h1>)
  }

  return (
    <AuthContext.Provider value={{handleLogin, handleLogout, notLoged, isToken}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider