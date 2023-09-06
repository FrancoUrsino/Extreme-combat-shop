import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'

function ItemDetail({ id, image, name, desc, price, category, stock }) {
  const [quanAdd, setQuanAdd] = useState(0)
  const { addProd } = useContext(CartContext)
  const onAdd = (q) => {
    setQuanAdd(q)
    const prod = { id, name, price, image }

    addProd(prod, q)
  }

  return (
    <article className="cardItem">
      <div className="cardItem__container">
        <img src={image} alt={name} className="cardItem__container--img justify-self-center" />
        <div className="cardItem__container--container">
          <p className="cardItem__container--container--title">{name}</p>
          <p className="cardItem__container--container--category">categorías: {category}</p>
          <p className="cardItem__container--container--description">{desc}</p>
          <p className="cardItem__container--container--price">${price}</p>
          {quanAdd > 0 ? (
            <Link to='/cart' className='my-2'>IR AL CARRITO</Link>
          ) : (
            <ItemCount initial={1} stock={stock} onAdd={onAdd} />
          )}
          <Link to='/products' className='cardItem__container--container--btn'>regresar <i className="material-symbols-outlined">reply</i></Link>
        </div>
      </div>
    </article>
  )
}

export default ItemDetail