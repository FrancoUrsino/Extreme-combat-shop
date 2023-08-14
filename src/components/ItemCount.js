import React from 'react'
import { useState } from 'react';
import { Toaster, toast } from 'sonner'
import 'react-toastify/dist/ReactToastify.css';

function ItemCount({stock, initial, onAdd}) {

  const [quan, setQuan] = useState(initial);

  const sumar = () => { if (quan < stock ){setQuan(quan + 1)}
    console.log(quan)
  }
  const restar = () => { if (quan > 0){setQuan (quan - 1)}
    console.log(quan)
  }


  return (
    <div>
      <Toaster expand="true" closeButton/>
      <button className='hover:text-sky-600 p-5 restar' onClick={restar}>-</button>
      <button className='mx-2'onClick={() => {onAdd={onAdd}; toast.success('My first toast')}} >Agregar al carrito</button>
      <span className='px-2 border-2 border-black'>{quan}</span>
      <button className='hover:text-sky-600 p-5 sumar' onClick={sumar}>+</button>
    </div>
  )
}

export default ItemCount
