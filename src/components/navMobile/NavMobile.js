import { useState } from "react"
import { BsList } from "react-icons/bs"
import "./NavMobile.Module.css"

const NavMobile = () => {

  const [drop, setDrop] = useState(true)

  let handleDrop = async (e) => {
    try {
      await e.preventDefault()
      setDrop(!drop)
    } catch (e) {
      setDrop(true)
    }
  }

  return(
    <div className="navbar-mobile-container">
      <BsList onClick={handleDrop}/>
      {drop === false && (
        <ul>
          <li>CARROS</li>
          <li>MOTOS</li>
          <li>CAMINHÕES</li>
          <li>MINHA CONTA</li>
          <li>CARRINHO</li>
        </ul>
      )}
    </div>
  )
}

export default NavMobile
