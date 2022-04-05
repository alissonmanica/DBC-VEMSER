import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
function Users() {
  const {isLogado} = useContext<any>(AuthContext);
  
  useEffect(() => {
    isLogado();
  }, []);
  

  return (
    <div>Users</div>
  )
}

export default Users