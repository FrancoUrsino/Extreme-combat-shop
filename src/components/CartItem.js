import { useContext } from "react";
import { CartContext } from './CartContext'

const CartItem = ({ product}) => {
  const { removeProd } = useContext(CartContext);

  return (
    <div className="w-6/12 mx-auto my-5">
      <div className="grid grid-cols-3 px-5 justify-center border-slate-200 border-2 rounded-2xl">
        <div>
          <img src={product.image} alt={product.name} className="w-48" />
        </div>
        <div className="flex flex-col space-y-14 my-4 justify-cente">
          <p className="uppercase font-bold">{product.name}</p>
          <p className=""> subtotal: ${product.price * product.quantity}</p>
        </div>
            <button className='bg-slate-200 hover:bg-slate-100 my-14 mx-32 rounded-xl' onClick={()=> removeProd(product.id)}>X</button>
      </div>
    </div>
  );
};

export default CartItem;