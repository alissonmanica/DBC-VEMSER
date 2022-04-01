import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import "./Home.css"

function Home() {
  const navigate = useNavigate()
  const {token} = useContext(AuthContext)

  useEffect(() => {
      if (!token) {
        navigate('/login')
      }
  },[])

  return (
    <div className={"Home"}>
      <h1>
          Home
      </h1>
    </div>
  )
}

export default Home