import React, { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from '../components/ItemList'
import '../components/Item.scss'
import { Link, NavLink, useParams } from 'react-router-dom'
import { db } from '../DB/Firebase.js'
import productsHero from '../components/images/productsHero.jpg'
import { Loader } from '../components/Loader';


const ItemListContainer = () => {
  const [product, setProduct] = useState([])
  console.log(product);
  const category = useParams().category
  const [isLoading, setIsLoading] = useState(true)



  useEffect(() => {
    const prodCollection = collection(db, "products");

    if (category) {
        const queryFilter = query(
            prodCollection,
            where("category", "==", category)
        );
        getDocs(queryFilter)
            .then((res) =>
                setProduct(
                    res.docs.map((prod) => ({
                        id: prod.id,
                        ...prod.data(),
                    }))
                )
            )
            .catch((error) => console.error(error)) // Aplicar .catch() aquí
            .finally(() => setIsLoading(false));
    } else {
        getDocs(prodCollection)
            .then((res) =>
                setProduct(
                    res.docs.map((prod) => ({
                        id: prod.id,
                        ...prod.data(),
                    }))
                )
            )
            .catch((err) => console.error(err)) // Aplicar .catch() aquí
            .finally(() => setIsLoading(false));
    }
}, [category]);

  return (
    <>
    {isLoading ? (<Loader/>): (
    <div>
          <img src={productsHero} alt="hero" className='items__img' />
          <ul className='flex text-center justify-center my-2 p-5 uppercase'>
            <li><Link to="/products" className='px-5 mx-5 items__categories'>todos</Link></li>
            <li><NavLink to="/products/guantes" className='px-5 mx-5 items__categories'>guantes</NavLink></li>
            <li><NavLink to="/products/tibiales" className='px-5 mx-5 items__categories'>tibiales</NavLink></li>
            <li><NavLink to="/products/bucal" className='px-5 mx-5 items__categories'>bucales</NavLink></li>
            <li><NavLink to="/products/vendas" className='px-5 mx-5 items__categories'>vendas</NavLink></li>
            <li><NavLink to="/products/pack" className='px-5 mx-5 items__categories'>kits</NavLink></li>
          </ul>
          <section className='items'>
            <ItemList product={product} />
          </section>
        </div>)}
  </>
  )
}

export default ItemListContainer