import React, { useEffect, useState } from 'react'
import { getProducts } from './stock'
import ItemList from './ItemList.js'
import '../components/Item.scss'


const ItemListContainer = () => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    getProducts()
    .then(response => {
      setProduct(response)
    })
    .catch(error => {
      console.error(error)
    })
  }, [])
  return (
    <div className='items'>
      <ItemList product={product} />
    </div>
  )
}

export default ItemListContainer