import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

export const AuthContext = createContext()

function AuthProvider({children}) {
const [loading, setLoading] = useState(true)
const [pessoas, setPessoas] = useState([])
const token = localStorage.getItem('token')

const navigate = useNavigate()


        useEffect(() => {
            setLoading(false);
        },[])

        async function handleLogin({values}) {
        try {
            const {data} = await api.post('/auth', values);
            localStorage.setItem('token', data);
            setLoading(false);
            api.defaults.headers.common['Authorization'] = data;
            navigate('/user');
        } catch (error) {
            console.log(error);
        }
    }

        function handleLogout() {
            setLoading(false);
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


        async function getPessoas() {
            try {
                const {data} = await api.get('/pessoa');
                setPessoas(data);
            } catch (error) {
                console.log(error);
            }
        }

            if (loading) {
                return (<h1>Loading.....</h1>)
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
                    }
                    }>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;