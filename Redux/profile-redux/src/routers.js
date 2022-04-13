import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import NotFound from './pages/NotFound'
import Profile from './pages/profile/Profile'



function Routers() {
 
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Routers