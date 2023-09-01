// import React, { useContext } from 'react'
// import { CartContext } from './CartContext'
// import { Link } from 'react-router-dom'
// import CartItem from './CartItem'


// function Cart() {
//   const {cart, cleanCart, totalProducts, total} =useContext(CartContext)

//   if(totalProducts === 0 ){
//     return(
//       <>
//         <h2>No seleccionaste ningún producto</h2>
//         <Link to='/products'>ver productos</Link>
//       </>
//     )
//   }
//   return (
//   <>
//     {cart.map(prod => <CartItem key={prod.id} {...prod} />)}
//     <p>Total: {total}</p>
//     <p>Prooductos totales: {totalProducts}</p>
//     <button className='m-5' onClick={()=> cleanCart()}>Eliminar productos del carrito</button>
//     <Link to='/'>Terminar compra</Link>
//   </>
//   )
// }

// export default Cart

import { CartContext } from './CartContext'
import { useContext } from "react";
import { Link } from "react-router-dom";

import CartItem from "./CartItem"

const Cart = () => {
  const { cart, clearCart, total, totalProducts } =
    useContext(CartContext);

  const handleClearCart = () => {
    clearCart()
    console.log('seguro compras?')
  };
  if (totalProducts === 0) {
    return (
      <div className="centered d-flex flex-column text-center">
        <h2 className="mb-4">Tu carrito está vacio</h2>
        <Link to="/products" className="btn btn-main col-md-6 col-11 m-auto">
          Ver Productos
        </Link>
      </div>
    );
  }
  return (
    <div className="col-11 m-top m-auto">
      {cart.map((product) => (
        <CartItem key={product.id} {...product} />
      ))}
      <div className="col-11 col-md-6 m-auto text-center mt-4">
        <h3>Total: ${total}</h3>
        <h3 className="mb-4">Cantidad de productos: {totalProducts}</h3>
        <button
          onClick={() => handleClearCart()}
          className="btn outlined col-md-4 col-11 me-1 mb-0 mb-md-5 text-danger"
        >
          {" "}
          eliminar todo{" "}
        </button>
        <Link
          to="/checkout"
          className="btn btn-main col-11 mt-3 mt-md-0 col-md-6 p-md-4 pt-md-2 pb-md-2 mb-5"
        >
          {" "}
          Go Checkout{" "}
        </Link>
      </div>
    </div>
  );
};

export default Cart;