import './NavDesktop.Module.css'
import Logo from '../../img/Logo.png'
import { BsCartFill } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";


const NavDesktop = () => {
  return (
    <div className="navbar-desktop-container">
      <div className='navbar-desktop-logo'>
        <img src={Logo} alt="" />
      </div>
      <div className='navbar-desktop-links'>
        <p>CARROS</p>
        <p>CAMINHÕES</p>
        <p>MOTOS</p>
        <p>GERAIS</p>
      </div>
      <div className='navbar-desktop-cartAccount'>
        <p><BsPeopleFill className='navbar-desktop-icon'/>MINHA CONTA </p>
        <p><BsCartFill className='navbar-desktop-icon'/>CARRINHO</p>
      </div>
    </div> 
  )    
}

export default NavDesktop;