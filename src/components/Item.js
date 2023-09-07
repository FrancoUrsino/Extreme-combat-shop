import React from 'react'
import { Link } from 'react-router-dom'


function Item({ id, name, price, image, category }) {
  return (
    <article key={id} className='card'>
      <div className='card__container'>
        <div className='card__container--img'>
          <p className='card__container--category relative left-2 top-1 px-1 py-1 bg-slate-50 w-20 rounded-xl text-center z-10'>{category}</p>
          <img src={image} alt={name} className='card__img' />
        </div>
        <div className='card__container--container'>
          <h3 className='card__container--container--title'>{name}</h3>
          <p className='card__container--container--price py-1'>Precio ${price}</p>
          <Link to={`/item/${id}`} className='card__container--container--btn'>ver más</Link>
        </div>
      </div>
    </article>
  )
}

export default Item