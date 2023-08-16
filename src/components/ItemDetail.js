import React from 'react'
import ItemCount from './ItemCount'

function ItemDetail({img, name, desc, id, price, category, stock}) {
  return (
    <article className="cardItem">
      <div className="cardItem__container">
        <img src={img} alt={name} className="cardItem__container--img" />
        <div className="cardItem__container--container">
          <p className="cardItem__container--container--title">{name}</p>
          <p className="cardItem__container--container--category">{category}</p>
          <p className="cardItem__container--container--description">{desc}</p>
          <p className="cardItem__container--container--description">${price}</p>
        </div>
        <ItemCount initial={1} stock={stock} onAdd={''} />
      </div>
    </article>
  )
}

export default ItemDetail