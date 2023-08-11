import React from 'react'
import './Main.scss'

function Main() {
  return (
    <div className='contact' id='contactus'>
      <h2 className='contact__title'>CONTACTANOS</h2>
      <div className='contact__container mx-3'>
        <form className='contact__form'>
          <div className='contact__form--container'>
            <label className='contact__form--label' htmlFor='inputName'>Nombre</label>
            <input className='contact__form--input' type='text' id='inputName' name='inputName' />
          </div>
          <div className='contact__form--container'>
            <label className='contact__form--label' htmlFor='inputEmail'>Email</label>
            <input className='contact__form--input' type='text' id='inputEmail' name='inputEmail' />
          </div>
          <div className='contact__form--container'>
            <label className='contact__form--label' htmlFor='inputNumber'>Telefono</label>
            <input className='contact__form--input' type='text' id='inputNumber' name='inputNumber' />
          </div>
          <div className='contact__form--container'>
            <label className='contact__form--label' htmlFor='inputMessage'>Mensaje</label>
            <textarea className='contact__form--input caret-gray-400' id='inputMessage' name='inputMessage' rows={2}></textarea>
          </div>
        </form>
        <address className='contact__data'>
          <h3 className='contact__data--title'>Informacion</h3>
          <p className='contact__data--text'>tel: +54911380011</p>
          <p className='contact__data--text'>Horarios de atención: <br />Lunes a Viernes de 9hs a 20hs</p>
          <p className='contact__data--text'>extremecombatshop@gmail.com</p>
          <p className='contact__data--text'>Para compras mayoristas: <br />extrememayoristas@gmail.com</p>
        </address>
      </div>
    </div>
  )
}

export default Main