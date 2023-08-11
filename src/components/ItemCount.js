import React from 'react'
import { useState } from 'react';

function ItemCount({stock, initial, onAdd}) {

  const [quan, setQuan] = useState(initial);
  // const {totalquan} = useCartContext()

  const sumar = () => { if (quan < stock ){setQuan(quan + 1)}
    console.log(quan)
  }
  const restar = () => { if (quan > 0){setQuan (quan - 1)}
    console.log(quan)
  }
  return (
    <>
      <button className='hover:text-sky-600 p-5 restar' onClick={restar}>-</button>
      <button className='mx-2' onClick={()=> {onAdd(quan);}}>Agregar al carrito</button>
      <span className='px-2 border-2 border-black'>{quan}</span>
      <button className='hover:text-sky-600 p-5 sumar' onClick={sumar}>+</button>
    </>
  )
}

export default ItemCount