import React, { useEffect, useState } from 'react'
import { getProductsById } from './asyncMock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

function ItemDetailContainer() {
  const [product, setProduct] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    getProductsById(id).then(response => {
      setProduct(response)
    })
  }, [id])
  return (
    <>
      <ItemDetail {...product}/>
    </>
  )
}

export default ItemDetailContainer