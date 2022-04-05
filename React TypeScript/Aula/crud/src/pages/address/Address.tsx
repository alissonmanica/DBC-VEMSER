import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

function Address() {
  const {isLogado} = useContext<any>(AuthContext);
  
  useEffect(() => {
    isLogado();
  }, []);
  
  return (
    <div>Address</div>
  )
}

export default Address