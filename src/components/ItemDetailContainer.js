import React, { useEffect, useState } from 'react'
import { getProductsById } from './AsinkMock'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
  const [product, setProduct] = useState(null)

  useEffect(()=> {
    getProductsById().then(response =>{
      setProduct(response)
    })
  }, [])
  return (
    <>
      <ItemDetail {...product}/>
    </>
  )
}

export default ItemDetailContainer