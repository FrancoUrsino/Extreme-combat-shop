import { CartContext } from './CartContext'
import { useContext } from "react";
import { Link } from "react-router-dom";

import CartItem from "./CartItem"

const Cart = () => {
  const { cart, clearCart, total } = useContext(CartContext);

  if (total === 0) {
    return (
      <div className="centered d-flex flex-column text-center">
        <h2 className="mb-4">Tu carrito está vacio</h2>
        <Link to="/products" className="btn btn-main col-md-6 col-11 m-auto">
          Ver Productos
        </Link>
      </div>
    );
  }
  console.log(cart)

  return (
    <div className="gap-3" >{cart.map((product) => <CartItem key={product.id} product={product}/>)}
      <div className="col-11 col-md-6 m-auto text-center mt-4">
        <h3>Total: ${total()}</h3>
        {/* <h3 className="mb-4">Cantidad de productos: {}</h3> */}
        <button onClick={() => clearCart()} className="">eliminar todo</button>
        <Link to="/checkout" className="">Go Checkout</Link>
      </div>
    </div>
  );
};

export default Cart;