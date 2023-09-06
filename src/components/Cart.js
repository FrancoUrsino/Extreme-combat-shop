import { CartContext } from './CartContext'
import { useContext } from "react";
import { Link } from "react-router-dom";

import CartItem from "./CartItem"

const Cart = () => {
  const { cart, clearCart, total } = useContext(CartContext);

  return (

    <div>
      {cart.length > 0 ?
        (<div className="gap-3" >{cart.map((product) => <CartItem key={product.id} product={product} />)}
          <div className="text-center">
            <h3 className='font-semibold text-lg mb-8'>Total: ${total()}</h3>
            <button onClick={() => clearCart()} className="mx-6 uppercase p-2 rounded-xl bg-stone-700 text-white">eliminar todo</button>
            <Link to="/checkout" className="cartRealizeBtn uppercase bg-stone-700 text-white rounded-xl">realizar pedido</Link>
          </div>
        </div>)
        :
        (<div className="flex flex-col text-center">
          <h2 className="mb-4">Tu carrito está vacio</h2>
          <Link to="/products" className="btn btn-main col-md-6 col-11 m-auto">Ver Productos</Link>
        </div>)
      }
    </div>
  )

};

export default Cart;