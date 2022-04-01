import { createContext, useContext, useState } from "react";
import api from "../components/api";

export const UserContext = createContext()



function UserProvider({children}) {
    const [pessoas, setPessoas] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [buttonName, setButtonName] = useState('Cadastrar')

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
        <UserContext.Provider value={{ pessoas, loading, setLoading, error, getPessoas, buttonName, setButtonName, }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;