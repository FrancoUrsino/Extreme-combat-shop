import React, { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from './ItemList.js'
import '../components/Item.scss'
import { Link, useParams } from 'react-router-dom'
import {db} from '../Firebase'


const ItemListContainer = () => {
  const [product, setProduct] = useState([])
  console.log(product);
  const category = useParams().category
  console.log(category)


  useEffect(() => {
    const prodCollection = collection(db, 'products');
    if (category) {
      const queryFilter = query(
        prodCollection,
        where("category", "==", category)
      );
      getDocs(queryFilter).then((res) =>
        setProduct(
          res.docs.map((prod) => ({
            id: prod.id,
            ...prod.data(),
          }))
        )
      );
    } else {
      getDocs(prodCollection).then((res) =>
        setProduct(
          res.docs.map((prod) => ({
            id: prod.id,
            ...prod.data(),
          }))
        )
      );
    }
  }, [category]);
  return (
    <div>
      <ul className='flex text-center justify-center my-2 uppercase'>
        <li><Link to="/products" className='px-5'>todos</Link></li>
        <li><Link to="/products/guantes" className='px-5'>guantes</Link></li>
        <li><Link to="/products/tibiales" className='px-5'>tibiales</Link></li>
        <li><Link to="/products/bucal" className='px-5'>bucales</Link></li>
        <li><Link to="/products/vendas" className='px-5'>vendas</Link></li>
        <li><Link to="/products/pack" className='px-5'>kits</Link></li>
      </ul>
      <section className='items'>
        <ItemList product={product} />
      </section>
    </div>
  )
}

export default ItemListContainer