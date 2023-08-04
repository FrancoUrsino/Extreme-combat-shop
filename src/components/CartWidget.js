import React from 'react'
import './NavBar/NavBar.scss'
import { Link } from 'react-router-dom'

function CartWidget() {
  return (
    <div className='flex p-5 nav__cart'>
      <Link to="">
        <i className='material-icons'>local_mall</i>
        <span className='text-sm'>0</span>
      </Link>
    </div>
  )
}

export default CartWidget