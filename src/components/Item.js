import React from 'react'
import { Link } from 'react-router-dom'


function Item({id, name, price, img}) {
  return (
    <article key={id} className='card'>
      <div className='card__container'>
        <div className='card__container--img'>
          <img src={img} alt={name} className='card__img' />
        </div>
        <div className='card__container--container'>
          <h3 className='card__container--container--title py-3'>{name}</h3>
          <p className='card__container--container--price py-5'>${price}</p>
          <Link to={`/item/${id}`} className='card__container--container--btn'>ver más</Link>
        </div>
      </div>
    </article>
  )
}

export default Item