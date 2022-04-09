import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header'
import AuthProvider from './context/AuthContext'
import UserProvider from './context/UserContext'
import Address from './pages/address/Address'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import NotFound from './pages/notFound/NotFound'
import CreateUser from './pages/users/CreateUser'
import Users from './pages/users/Users'
import { RouterContainer } from './Routers.styles'

function Routers() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <UserProvider>
        <RouterContainer>
          <Header />
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/users' element={<Users />} />
            <Route path='/address' element={<Address />} />
            <Route path="create-user" element={<CreateUser />}>
                <Route path=":id" element={<CreateUser />} />
            </Route>
          </Routes>
        </RouterContainer>
      </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Routers