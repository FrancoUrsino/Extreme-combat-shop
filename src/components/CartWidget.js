import React from 'react'
import './NavBar/NavBar.scss'
import { NavLink } from 'react-router-dom'

function CartWidget() {
  return (
    <div className='flex px-4 nav__cart justify-center'>
      <NavLink to="/carrito">
        <i className='material-icons'>local_mall</i>
        <span className='text-sm'>0</span>
      </NavLink>
    </div>
  )
}

export default CartWidget