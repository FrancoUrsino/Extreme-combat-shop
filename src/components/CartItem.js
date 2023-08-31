import React from 'react'
import ItemCount from './ItemCount'

function CartItem(props) {
  const {name, img, price, stock} = props.data
  return (
    <>
    <div>
      <img src={img} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{price}</p>
        <p>{stock}</p>
      </div>
    </div>
    <ItemCount data={props.data}/>
    </>
  )
}

export default CartItem