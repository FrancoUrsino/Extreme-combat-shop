import React from 'react'

const ItemListContainer = ({greeting})=>{
  console.log(greeting)
  return(
    <h1 className='text-6xl flex justify-center my-10'>{greeting}</h1>
  )
}

export default ItemListContainer