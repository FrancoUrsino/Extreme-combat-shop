import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import './Item.scss'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'

function ItemDetail({ id, img, name, desc, price, category, stock }) {
  const [quanAdd, setQuanAdd] = useState(0)
  const { addProd } = useContext(CartContext)
  const onAdd = (q) => {
    setQuanAdd(q)
    const prod = { id, name, price }

    addProd(prod, q)
  }

  return (
    <article className="cardItem">
      <div className="cardItem__container">
        <img src={img} alt={name} className="cardItem__container--img" />
        <div className="cardItem__container--container">
          <p className="cardItem__container--container--title">{name}</p>
          <p className="cardItem__container--container--category">categorías: {category}</p>
          <p className="cardItem__container--container--description">{desc}</p>
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