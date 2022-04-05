import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function ItemMenu() {
  const {token, handleLogout} = useContext<any>(AuthContext)

  const confereToken = () => {
    if (token) {
      return true
    } else {
      return false
    }
  }

  console.log(token)
  return (
    <>
      { confereToken() ? (
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/users'>Users</Link>
          <Link to='/address'>Adress</Link>
          <button onClick={() => handleLogout()}>Deslogar</button>
        </ul>)
        : 
        <ul>
          <Link to='/login'>Login</Link>  
        </ul>
      }
    </>
  )
}
export default ItemMenu