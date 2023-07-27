import React from 'react'
import NavLinks from './NavLinks'
import CartWidget from './CartWidget'

function NavBar() {
  return (
    <div className='flex backdrop-blur justify-between w-full p-5 bg-black/30 shadow-lg shadow-black/40'>
      <h2>Logo/titulo</h2>
      <NavLinks/>
      <CartWidget/>
    </div>
  )
}

export default NavBar