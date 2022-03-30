import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

function ItemMenu() {
const {token} = useContext(AuthContext)

  return (
      <>
        {token && <li><Link to="/">Home</Link></li>}
        {!token && <li><Link to="/login">Login</Link></li>}
        {token && <li><Link to="/user">Users</Link></li>}
      </>
  )
}

export default ItemMenu