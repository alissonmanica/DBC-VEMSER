import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Loading from "../../components/Loading";
import {
  Card,
  Container,
  CardTitle,
} from "./Home.styles"

function Home() {
  const {notLoged} = useContext<any>(AuthContext);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    notLoged();
    setLoading(false)
  }, []);

  if (loading) {
    return (<Loading />)
  }

  return (
    <Container>
      <Card>
        <CardTitle>Usuários</CardTitle>
      </Card>
      <Card>
        <CardTitle>Endereço</CardTitle>
      </Card>
    </Container>
  )
}

export default Home