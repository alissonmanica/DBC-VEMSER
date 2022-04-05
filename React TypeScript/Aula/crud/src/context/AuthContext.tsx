import {FC, createContext, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginDTO } from '../model/LoginDTO';
import api from '../api';

export const AuthContext = createContext({})

const AuthProvider: FC<any>= ({children}) => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  const handleLogin = async(user: LoginDTO) => {
    try {
      const {data} = await api.post('/auth', user);
      api.defaults.headers.common['Authorization'] = data;
      localStorage.setItem('token', data);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login')
  }

  const isLogado = () => {
    if (!token) {
      navigate('/login')
    }
  }

  useEffect(() => {
    isLogado()
  }, [])
  

  return (
    <AuthContext.Provider value={{handleLogin, handleLogout, isLogado, token}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider