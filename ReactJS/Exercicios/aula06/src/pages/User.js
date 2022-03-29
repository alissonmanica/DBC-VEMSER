import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


function User() {
    const {handleLogout} = useContext(AuthContext)
    return (
    <div>
        <h1>User</h1>
        <button onClick={() => handleLogout()}>Deslogar</button>
    </div>
    )
}

export default User;