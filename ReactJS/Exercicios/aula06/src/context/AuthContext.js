import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

export const AuthContext = createContext()

function AuthProvider({children}) {
const [token, setToken] = useState('')
const [login, setLogin] = useState(false)
const navigate = useNavigate()

        async function handleLogin({values}) {
        try {
            const {data} = await api.post('/auth', values)
            setToken(data)
            localStorage.setItem('token', JSON.stringify(data))
            setLogin(true)
            navigate('../user')
        } catch (error) {
            console.log(error)
        }
    }

        function handleLogout() {
            localStorage.removeItem('token')
            setLogin(false)
            navigate('../login')
        }

    return (
        <AuthContext.Provider value={{handleLogin, handleLogout, token}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;