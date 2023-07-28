import React from 'react'
import NavLinks from './NavLinks'
import CartWidget from './CartWidget'
import logo from '../logo.png'
import './NavBar.scss'

function NavBar() {
  return (
    <div className='nav flex sticky top-0 backdrop-blur-md justify-between align-middle w-full bg-black/30 shadow-lg shadow-black/50 text-white text-xl'>
      <a href='#'><img src={logo} alt=''className='nav__logo'/></a>
      <NavLinks/>
      <CartWidget/>
    </div>
  )
}

export default NavBar