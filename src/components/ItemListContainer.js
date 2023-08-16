import React, { useEffect, useState } from 'react'
import { getProducts } from './AsinkMock'
import ItemList from './ItemList.js'
import '../components/Item.scss'



const ItemListContainer = () => {
  const [product, setProduct] = useState([])
  console.log(product);

  useEffect(() => {
    getProducts()
    .then(response => {
      setProduct(response)
    })
  }, [])
  return (
    <div className='items'>
      <ItemList product={product} />
    </div>
  )
}

export default ItemListContainer