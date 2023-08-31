import React, { useContext } from 'react'
import './NavBar/NavBar.scss'
import { NavLink } from 'react-router-dom'
import { CartContext } from './CartContext'

function CartWidget() {
  const {totalQuan} = useContext(CartContext)
  return (
    <div className='flex px-4 nav__cart justify-center'>
      <NavLink to="/cart">
        <i className='material-icons'>local_mall</i>
        {totalQuan}
      </NavLink>
    </div>
  )
}

export default CartWidget