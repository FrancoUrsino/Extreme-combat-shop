import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  return (
    <div className='flex'>
      <a href="">
        <FontAwesomeIcon icon={faCartShopping} />
      </a>
      <p>0</p>
    </div>
  )
}

export default CartWidget