import React from 'react';
import headerImg from '../header.jpg'
import './Header.scss'

function Header() {
  return (
    <header className='header'>
      <img src={headerImg} alt="" className='header__img h-screen w-full object-cover relative bg-cover bg-center' />
      <h1 className='header__title text-9xl text-white'>Extreme <br/> Combat <br/> Shop</h1>
      <a href='#contactus' className='header__btn absolute'>EXPLORAR</a>
    </header>
  )
}

export default Header