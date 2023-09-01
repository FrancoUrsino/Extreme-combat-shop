import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import './Item.scss'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'

function ItemDetail({ id, image, title, description, price, category, stock }) {
  const [quanAdd, setQuanAdd] = useState(0)
  const { addProd } = useContext(CartContext)
  const onAdd = (q) => {
    setQuanAdd(q)
    const prod = { id, title, price }

    addProd(prod, q)
  }

  return (
    <article className="cardItem">
      <div className="cardItem__container">
        <img src={image} alt={title} className="cardItem__container--img" />
        <div className="cardItem__container--container">
          <p className="cardItem__container--container--title">{title}</p>
          <p className="cardItem__container--container--category">categorías: {category}</p>
          <p className="cardItem__container--container--descriptionription">{description}</p>
          <p className="cardItem__container--container--price">${price}</p>
          {
            quanAdd > 0 ? (
              <Link to='/cart'>Finalizar compra</Link>
            ) : (
              <ItemCount initial={1} stock={stock} onAdd={onAdd} />
            )
          }
          <Link to='/products' className='cardItem__container--container--btn bg-gray-800 text-white'>regresar <i className="material-symbols-outlined">reply</i></Link>
        </div>
      </div>
    </article>
  )
}

export default ItemDetail