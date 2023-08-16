import React from 'react'
import './NavBar/NavBar.scss'
import { NavLink } from 'react-router-dom'

function CartWidget() {
  return (
    <div className='flex p-5 nav__cart'>
      <NavLink to="/carrito">
        <i className='material-icons'>local_mall</i>
        <span className='text-sm'>0</span>
      </NavLink>
    </div>
  )
}

export default CartWidget