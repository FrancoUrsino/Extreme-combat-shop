import React from 'react'

function CartWidget() {
  return (
    <div className='flex p-5'>
      <a href="/">
        <i className='material-icons'>local_mall</i>
        <span className='text-sm'>0</span>
      </a>
      
    </div>
  )
}

export default CartWidget