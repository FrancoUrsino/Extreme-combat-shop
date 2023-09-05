import { useContext } from "react";
import { CartContext } from './CartContext'

const CartItem = ({ product, quantity }) => {
  const { removeProd } = useContext(CartContext);

  return (
    <div className="w-5/12 mx-auto">
      <div className="grid grid-cols-3 px-5 justify-center border-slate-200 border-2 rounded-xl">
        <div className="">
          <img src={product.image} alt={product.name} style={{width:'200px'}} />
        </div>
        <div className=" flex flex-col text-center justify-center">
          <p className=''>{product.name}</p>
          <p className=""> subtotal: ${Number(quantity) * Number(product.price)}</p>
        </div>
            <button className=''  onClick={()=> removeProd(product.id)}>X</button>
      </div>
    </div>
  );
};

export default CartItem;