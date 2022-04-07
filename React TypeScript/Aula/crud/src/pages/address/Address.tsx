import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Loading from "../../components/Loading";

function Address() {
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
    <div>Address</div>
  )
}

export default Address