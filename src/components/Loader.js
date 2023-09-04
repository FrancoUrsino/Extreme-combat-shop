import React from 'react'
import '../index.scss'

export const Loader = () => {
  return (
    <div className='loader__container'>
      <p className="loader"></p>
      <p className='loader__container--text'>cargando...</p>
    </div>
  )
}
