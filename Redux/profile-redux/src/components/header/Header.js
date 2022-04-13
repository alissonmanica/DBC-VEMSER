import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"
import { handleLogout} from "../../store/actions/AuthActions"
import Logo from "./Logo"
import Menu from "./Menu"

function Header({auth, dispatch}) {
  const navigate = useNavigate()
  return (
    <header>
      {localStorage.getItem('token') && (
        <>
          <Logo />
          <Menu />
          <button type="button" onClick={() => handleLogout(dispatch, navigate)}>Sair</button>
        </>
      )}
    </header>
  )
}

const mapStateToProps = state => ({
  auth: state.authReducer.auth
});

export default connect(mapStateToProps)(Header)