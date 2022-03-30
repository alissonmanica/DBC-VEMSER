import { useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthContext"


function Home() {
    const {isLogado} = useContext(AuthContext)

    useEffect(() => {
        isLogado()
    },[])

  return (

    <div>
        Home
    </div>
  )
}

export default Home