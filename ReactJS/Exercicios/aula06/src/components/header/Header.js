import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Logo from './Logo';
import Menu from "./Menu"

function Header() {
  const {handleLogout, token} = useContext(AuthContext)

  return (
    <header>
      <Logo />
      <Menu />
      {token && <button onClick={() => handleLogout()}>Deslogar</button>}

    </header>
  )
}

export default Header