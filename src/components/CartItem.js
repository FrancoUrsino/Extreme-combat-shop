// import React from 'react'

// function CartItem(props) {
//   const {name, img, price, stock} = props.data
//   return (
//     <>
//     <div>
//       <img src={img} alt={name} />
//       <div>
//         <h3>{name}</h3>
//         <p>{price}</p>
//         <p>{stock}</p>
//       </div>
//     </div>
//     </>
//   )
// }

// export default CartItem


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
      <div className="flex px-5 align-items-center">
        <div className="col-3">
          <img src={product.image}  alt={product.title}/>
        </div>
        <div className="col-md-8">
          <div className="card-body col-8">
            <p className="card-text">
              <small className="text-body-secondary"> ${product.price} x {quantity}</small>
            </p>
            <span
              className={`text-danger p-3 position-absolute bottom-0 end-0`}
              onClick={handleClickDelete}
            >
              {confirmDelete ? (
                <div className="d-flex flex-column">
                  <div className="deleteCounter mb-2">
                    <button className="btn" onClick={decrementDeleteQuantity}>
                      -
                    </button>
                    <span className="fw-bold">{deleteQuantity}</span>
                    <button className="btn" onClick={incrementDeleteQuantity}>
                      +
                    </button>
                  </div>
                  <span
                    className="confirm-delete cursor-pointer btn-link"
                    onClick={handleConfirmDelete}
                  >
                    Confirm
                  </span>
                </div>
              ) : (
                <i className="bi bi-trash-fill cursor-pointer"></i>
              )}
            </span>
          </div>
        </div>
      </div>
  );
};

export default CartItem;