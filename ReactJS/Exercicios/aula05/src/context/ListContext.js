import { createContext, useState } from "react";

export const ListContext = createContext()

const ListProvider = ({ children }) => {
    const [ listWorkers, setListWorkers ] = useState([]);
    const [ name, setName ] = useState('');
    const [email, setEmail] = useState('');
    const [job, setJob] = useState('');
    return (
        <ListContext.Provider value={{ listWorkers, setListWorkers, name, setName, email, setEmail, job, setJob }}>
            {children}
        </ListContext.Provider>
    )
}

export default ListProvider;