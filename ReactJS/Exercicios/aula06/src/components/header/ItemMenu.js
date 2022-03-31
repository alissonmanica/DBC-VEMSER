import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import styles from './ItemMenu.module.css'

function ItemMenu() {
const {token} = useContext(AuthContext)

  return (
      <>
        {token ? 
          <ul className={styles.itemMenu}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/address">Address</Link></li>
          </ul>
        : 
          <ul className={styles.itemLogin}>
            <li><Link to="/login">Login</Link></li> 
          </ul> }
      </>
      
  )
}

export default ItemMenu