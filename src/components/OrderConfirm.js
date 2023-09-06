import React from 'react'
import { Link } from 'react-router-dom'

export const OrderConfirm = ({order}) => {
  return (
    <>
      <h1 className="text-center my-3">
        El ID de su orden es: {order}
      </h1>
      <div className="text-center mt-3 mb-3">
        <Link to="/products">Volver a la tienda</Link>
      </div>
    </>
  )
}
