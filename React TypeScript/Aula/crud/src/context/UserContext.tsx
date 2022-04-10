import {FC, createContext, useState, ReactNode } from "react";
import api from "../api";
import { PeopleDTO } from "../model/PeopleDTO";

export const UserContext = createContext({})

const UserProvider: FC<ReactNode>= ({children}) => {
  const [loading, setLoading] = useState(true)
  const [people, setPeople] = useState<PeopleDTO['pessoa']>([])
  const [buttonName, setButtonName] = useState('Cadastrar')

  const getUsers = async () => {
    try {
      const {data} = await api.get('/pessoa');
      setPeople(data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  const deleteUsers = async (id: number) => {
    try {
      await api.delete(`pessoa/${id}`)
      getUsers()
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <UserContext.Provider value={{loading, setLoading, people, deleteUsers, getUsers, buttonName, setButtonName}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;