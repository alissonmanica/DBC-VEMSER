import { useContext, useEffect, useState } from "react";
import moment from "moment";
import { AuthContext } from "../../context/AuthContext";
import { PeopleDTO } from "../../model/PeopleDTO";
import {
  EachList,
  EachDesc,
  HeadList,
  InfoUsers,
  TitleUsers,
  TableUsers,
  ContainerUsers,
  ContainerTable,
} from "./Users.styles"
import api from "../../api";
import Loading from "../../components/Loading";

function Users() {
  const {notLoged} = useContext<any>(AuthContext);
  const [people, setPeople] = useState<PeopleDTO['pessoa']>([])
  const [loading, setLoading] = useState(true)

  function cpfFormat(cpf: string) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
 }

  const getUsers = async () => {
    try {
      const {data} = await api.get('/pessoa');
      setPeople(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    notLoged();
    getUsers()
  }, []);
  
  if (loading) {
    return (<Loading />)
  }

  return (
    <ContainerUsers>
      <TitleUsers>Pessoas</TitleUsers>
      <ContainerTable>
        <TableUsers>
          <HeadList>
            <EachList>Nome</EachList>
            <EachList>Email</EachList>
            <EachList>CPF</EachList>
            <EachList>Data de Nascimento</EachList>
          </HeadList>
          {people.map(user => (
            <InfoUsers>
              <EachDesc>{user.nome}</EachDesc>
              <EachDesc>{user.email}</EachDesc>
              <EachDesc>{cpfFormat(user.cpf)}</EachDesc>
              <EachDesc>{moment(user.dataNascimento).format('DD/MM/YYYY')}</EachDesc>
            </InfoUsers>
          ))}
        </TableUsers>
      </ContainerTable>
    </ContainerUsers>
  )
}

export default Users