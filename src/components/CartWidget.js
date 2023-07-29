import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  return (
    <div className='flex p-5'>
      <a href="">
        <i className='material-icons'>local_mall</i>
        <span className='text-sm'>0</span>
      </a>
      
    </div>
  )
}

export default CartWidget