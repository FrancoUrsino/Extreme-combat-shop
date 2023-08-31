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
    <div className='my-4'>
      <Toaster expand="true" closeButton/>
      <button className='hover:rounded-xl hover:border-2 hover:border-black border-2 border-transparent p-1 px-3 restar' onClick={restar}>-</button>
      <button className='mx-2 uppercase hover:text-gray-800 hover:rounded-3xl' onClick={() => {onAdd={quan}; toast.success('Producto agregado')}} >Agregar al carrito</button>
      <span className='px-1'>{quan}</span>
      <button className='hover:rounded-xl hover:border-2 hover:border-black border-2 border-transparent p-1 px-3 sumar' onClick={sumar}>+</button>
    </div>
  )
}

export default ItemCount
