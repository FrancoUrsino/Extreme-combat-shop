import React from 'react'
import ItemCount from './ItemCount'
import './Item.scss'
import { Link } from 'react-router-dom'

function ItemDetail({ img, name, desc, id, price, category, stock }) {
  return (
    <article className="cardItem">
      <div className="cardItem__container">
        <img src={img} alt={name} className="cardItem__container--img" />
        <div className="cardItem__container--container">
          <p className="cardItem__container--container--title">{name}</p>
          <p className="cardItem__container--container--category">categorías: {category}</p>
          <p className="cardItem__container--container--description">{desc}</p>
          <p className="cardItem__container--container--price">${price}</p>
          <ItemCount initial={1} stock={stock} onAdd={''} />
          <Link to="/products" className='cardItem__container--container--btn bg-gray-800 text-white'>regresar <i class="material-symbols-outlined">reply</i></Link>
        </div>
      </div>
    </article>
  )
}

export default ItemDetail