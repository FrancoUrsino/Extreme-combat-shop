import React from 'react'
import logo from './images/logo.png'
import wpp from './images/svg/wpp.svg'
import mail from './images/svg/gmail.svg'
import call from './images/svg/llamada.svg'
import { Link } from 'react-router-dom'
import '../index.scss'

function Footer() {
  return (
    <footer class="footer">
      <div class="footer__container">
        <img src={logo} alt="extreme combat shop logo" class="footer__img" width="200px" height="200px" />
        <ul class="footer__list">
          <li class="footer__text">2023&copy;Extreme Combat Shop | All Rigths Reserved</li>
          <li class="footer__text2">Diseño y Desarrollo por <a href="mailto:francooursinoo@gmail.com">Franco Ursino</a></li>
        </ul>
        <div class="footer__icons">
          <Link to="mailto:extremecombatshop@gmail.com">
            <img src={mail} alt="logo gmail" class="footer__icon" />
          </Link>
          <Link to="https://wa.me/+5491222122212?text=Buenas!+me+contacto+desde+la+página+web" target="_blank">
            <img src={wpp} alt="logo whatsapp" class="footer__icon" />
          </Link>
          <Link to="tel:+5491222122212">
            <img src={call} alt="logo telefono" class="footer__icon" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
