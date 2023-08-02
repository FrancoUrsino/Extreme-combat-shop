import React from 'react'
import Item from './Item'
import './Item.scss'

function ItemList({product}) {
  return (
    <div>
      <div  className='items__container justify-center'>{product.map(prod => <Item key={prod.id} {...prod}/>)}</div>
    </div>
  )
}

export default ItemList