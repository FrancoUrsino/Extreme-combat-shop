import React from 'react'

function NavLinks() {
  return (
    <nav className='flex cursor-pointer py-5 relative start-1/4'>
      <a className='nav__links' href="#">Inicio</a>
      <a className='nav__links' href="#">Acerca de</a>
      <a className='nav__links' href="#">Productos</a>
      <a className='nav__links' href="#">Contactanos</a>
    </nav>
  )
}

export default NavLinks