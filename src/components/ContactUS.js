import React from 'react'
import './ContactUs.scss'

function ContactUS() {
  return (
    <div className='contact' id='contactus'>
      <h2 className='contact__title'>CONTACTANOS</h2>
      <div className='contact__container'>
        <form className='contact__form'>
          <div className='contact__form--container'>
            <label className='contact__form--label' htmlFor='inputName'>Nombre</label>
            <input className='contact__form--input' type='text' id='inputName' name='inputName'/>
          </div>
          <div className='contact__form--container'>
            <label className='contact__form--label' htmlFor='inputEmail'>Email</label>
            <input className='contact__form--input' type='text' id='inputEmail' name='inputEmail'/>
          </div>
          <div className='contact__form--container'>
            <label className='contact__form--label' htmlFor='inputNumber'>Telefono</label>
            <input className='contact__form--input' type='text' id='inputNumber' name='inputNumber'/>
          </div>
          <div className='contact__form--container'>
            <label className='contact__form--label' htmlFor='inputMessage'>Mensaje</label>
            <textarea className='contact__form--input' id='inputMessage' name='inputMessage' rows={2}></textarea>
          </div>
        </form>
        <div className='contact__data relative start-2/4'>
          <h3 className='contact__data--title'>Informacion</h3>
          <ul className='contact__data--list'>
            <li className='contact__data--link'>tel: +54911380011</li>
            <li className='contact__data--link'>Horarios de atención: <br/>Lunes a Viernes de 9hs a 20hs</li>
            <li className='contact__data--link'>extremecombatshop@gmail.com</li>
            <li className='contact__data--link'></li>
            <li className='contact__data--link'></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ContactUS