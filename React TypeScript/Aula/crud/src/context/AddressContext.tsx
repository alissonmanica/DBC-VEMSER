import {FC, createContext, useState, ReactNode } from "react";
import api from "../api";
import { AddressDTO } from "../model/AddressDTO";

export const AddressContext = createContext({})

const AddressProvider: FC<ReactNode>= ({children}) => {
  const [loading, setLoading] = useState(true)
  const [address, setAddress] = useState<AddressDTO['address']>([])
  const [buttonName, setButtonName] = useState('Cadastrar')

  const getAddressApi = async () => {
    try {
      const {data} = await api.get('endereco')
      setAddress(data)
      setLoading(false)
      console.log(data)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  const deleteAddress = async (id: number) => {
    try {
      await api.delete(`endereco/${id}`)
      getAddressApi()
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <AddressContext.Provider value={{loading, setLoading, address, deleteAddress, getAddressApi, buttonName, setButtonName}}>
      {children}
    </AddressContext.Provider>
  )
}

export default AddressProvider;