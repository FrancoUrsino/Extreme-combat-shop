import { useState, useContext } from "react";
import { CartContext } from './CartContext'

const CartItem = ({ product, quantity }) => {
  const { removeProd } = useContext(CartContext);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleteQuantity, setDeleteQuantity] = useState(1);


  const handleClickDelete = () => {
    setConfirmDelete(true);
  };

  const handleConfirmDelete = () => {
  

    if (deleteQuantity === quantity) {
      setTimeout(() => {
        removeProd(product.id, deleteQuantity);
        setDeleteQuantity(1);
        setConfirmDelete(false);
      }, 500);
    } else {
      removeProd(product.id, deleteQuantity);
      setDeleteQuantity(1);
      setConfirmDelete(false);
    }
  };

  const incrementDeleteQuantity = () => {
    if (deleteQuantity < quantity) {
      setDeleteQuantity(deleteQuantity + 1);
      }
  };

  const decrementDeleteQuantity = () => {
    if (deleteQuantity > 1) {
      setDeleteQuantity(deleteQuantity - 1);
      }
  };

  return (
    <div className="w-5/12 mx-auto">
      <div className="grid grid-cols-3 px-5 justify-center border-slate-200 border-2 rounded-xl">
        <div className="">
          <img src={product.image} alt={product.name} style={{width:'200px'}} />
        </div>
        <div className=" flex flex-col text-center justify-center">
          <p className=''>{product.name}</p>
          <p className=""> x {quantity} ${product.price}</p>
        </div>
          <div className="flex flex-col">
            <span className={`p-3 relative bottom-0 right-0`}  onClick={handleClickDelete}>
              {confirmDelete ? (
                <div className="flex flex-col">
                  <div className="deleteCounter m-2">
                    <button className="btn" onClick={decrementDeleteQuantity}> - </button>
                    <span className="">{deleteQuantity}</span>
                    <button className="" onClick={incrementDeleteQuantity}> + </button>
                  </div>
                  <span className="confirm-delete cursor-pointer" onClick={handleConfirmDelete}> Confirm </span>
                </div>
              ) : (
                <span className="material-symbols-outlined">delete</span>
              )}
            </span>
          </div>
      </div>
    </div>
  );
};

export default CartItem;