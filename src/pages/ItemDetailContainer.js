import React, { useEffect, useState } from 'react'
import ItemDetail from '../components/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../DB/Firebase'

function ItemDetailContainer() {
  const [product, setProduct] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const dataBase = doc(db, 'products', id);
    getDoc(dataBase)
      .then((res) => {
        const data = res.data();
        const newProd = { id: res.id, ...data };
        setProduct(newProd);
      })
      .catch((e) => console.error("No se pudo obtener producto", e))
  }, [id])
  return (
    <>
      <ItemDetail {...product} />
    </>
  )
}

export default ItemDetailContainer