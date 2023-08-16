import React from 'react'
import ItemListContainer from '../components/ItemListContainer'
import ItemDetailContainer from '../components/ItemDetailContainer'
// import Filter from '../components/Filter'

function Products() {
  return (
    <>
      {/* <Filter cat={guantes}/> */}
      <ItemListContainer />
      <ItemDetailContainer/>
    </>
  )
}

export default Products