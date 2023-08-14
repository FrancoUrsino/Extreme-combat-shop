import React from 'react';
import heroImg from './images/hero.jpg'
import './Hero.scss'

function Hero() {
  return (
    <div className='hero'>
      <img src={heroImg} alt="" className='hero__img h-screen w-full object-cover relative bg-cover bg-center' />
      <h1 className='hero__title text-white'>Extreme <br /> Combat <br /> Shop</h1>
      <a href='#contactus' className='hero__btn absolute'>EXPLORAR</a>
    </div>
  )
}

export default Hero