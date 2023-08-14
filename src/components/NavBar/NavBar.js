import React, { useState } from 'react'
import CartWidget from '../CartWidget'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import './NavBar.scss'

function NavBar() {

  const [openMenu, setOpenMenu] = useState(false)
  const toogleMenu = () => { setOpenMenu(!openMenu) }

  return (
    <nav className='nav flex sticky top-0 backdrop-blur-md justify-between align-middle w-full bg-black/30 shadow-lg shadow-black/20 text-white text-xl'>
      <Link to="/"><img src={logo} alt='' className='nav__logo' /></Link>
      <button onClick={toogleMenu} className={`nav__menu `}><i className='material-icons'>menu</i></button>
      <ul className={`nav__list cursor-pointer p-5 m-0 ${openMenu ? 'active shadow-lg shadow-black/50' : ''}`}>
        <li>
          <Link to="/" className='nav__links'>Inicio</Link>
        </li>
        <li>
          <Link to="/products" className='nav__links'>Productos</Link>
        </li>
        <li>
          <Link to="/" className='nav__links'>Contactanos</Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  )
}

export default NavBar