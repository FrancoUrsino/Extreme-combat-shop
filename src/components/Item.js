import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'


function Item({ name, price, img, stock }) {
  return (
    <article className='card'>
      <Link to="/Item" className='card__container'>
        <div className='card__container--img'>
          <img src={img} alt={name} className='card__img' />
        </div>
        <div className='card__container--container'>
          <h3 className='card__container--container--title'>{name}</h3>
          <p className='card__container--container--price'>${price}</p>
          <ItemCount stock={stock} initial={0} onAdd={''} />
          <button className='card__container--container--btn'>ver más</button>
        </div>
      </Link>
    </article>
  )
}

export default Item