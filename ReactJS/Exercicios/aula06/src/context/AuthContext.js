import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../components/api";

export const AuthContext = createContext()

function AuthProvider({children}) {
const [loading, setLoading] = useState(true)
const [pessoas, setPessoas] = useState([])
const [error, setError] = useState(false)
const token = localStorage.getItem('token')

const navigate = useNavigate()


        async function handleLogin({values}) {
        try {
            const {data} = await api.post('/auth', values);
            localStorage.setItem('token', data);
            api.defaults.headers.common['Authorization'] = data;
            setLoading(false);
            navigate('/users');
        } catch (error) {
            setLoading(false)
            setError(true)
            console.log(error);
        }
    }

        function handleLogout() {
            localStorage.removeItem('token');
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login');
            }
        }

        function isLogado() {
            if (!token) {
                navigate('/login');
                setLoading(true);
            } 
        }

        function Logado() {
            if (token) {
                navigate('/user')
            }
        }

        async function getPessoas() {
            try {
                const {data} = await api.get('/pessoa');
                setPessoas(data);
                setLoading(false);
            } catch (error) {
                setLoading(false)
                setError(true)
                console.log(error);
            }
        }


    return (
        <AuthContext.Provider value={
            {
                handleLogin,
                handleLogout,
                token,
                pessoas,
                getPessoas,
                isLogado,
                loading,
                error,
                navigate,
                    }
                    }>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;