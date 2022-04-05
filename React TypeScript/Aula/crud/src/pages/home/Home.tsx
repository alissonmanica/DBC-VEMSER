import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import {
  Card,
  Container,
  CardTitle,
} from "./Home.styles"

function Home() {
  const {isLogado} = useContext<any>(AuthContext);
  
  useEffect(() => {
    isLogado();
  }, []);

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