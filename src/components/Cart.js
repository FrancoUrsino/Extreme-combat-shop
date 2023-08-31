import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'


function Cart() {
  const {cart, cleanCart, totalQuan, total} =useContext(CartContext)

  if(totalQuan === 0 ){
    return(
      <>
        <h2>No seleccionaste ningún producto</h2>
        <Link to='/products'>ver productos</Link>
      </>
    )
  }
  return (
  <>
    {cart.map(prod => <CartItem key={prod.id} {...prod} />)}
    <p>Total: {total}</p>
    <button onClick={()=> cleanCart()}>Eliminar productos del carrito</button>
    <Link to='/'>Terminar compra</Link>
  </>
  )
}

export default Cart