import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../components/api";

export const AuthContext = createContext()

function AuthProvider({children}) {
const [loading, setLoading] = useState(true)
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


    return (
        <AuthContext.Provider value={
            {
                handleLogin,
                handleLogout,
                token,
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