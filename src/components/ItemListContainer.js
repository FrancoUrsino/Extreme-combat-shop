import React, { useEffect, useState } from 'react'
import { getProducts } from './stock'
import ItemList from './ItemList.js'
import '../components/Item.scss'


const ItemListContainer = ({greeting})=>{
  const [product, setProduct] = useState([])

  useEffect(() =>{getProducts()
    .then(response =>{ setProduct(response)
    })
    .catch(error =>{
      console.error(error)
    })
  }, [])
  return(
    <div className='items'>
      <h1>{greeting}</h1>
      <div>
      <ItemList product={product}/>
      </div>
    </div>
  )
}

export default ItemListContainer