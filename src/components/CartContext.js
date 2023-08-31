import { createContext, useState } from "react";

export const CartContext = createContext({ cart: []})

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])
  console.log(cart)

  const addProd = (prod, q) =>{
    if(!isInCart(prod.id)){
      setCart(prev => [...prev, {...prod, q}])
    }else{
      console.error('producto agregado')
    }
  }

  const removeProd = (prodId)=>{
    const cartUpdate = cart.filter(prod => prod.id !== prodId)
    setCart(cartUpdate)
  }

  const clearCart = () => {
    setCart([])
  }

  const isInCart = (prodId) => {
    return cart.some(prod => prod.id === prodId)
  }

  return(
    <CartContext.Provider value={{ cart, addProd, removeProd, clearCart}}>
      {children}
    </CartContext.Provider>
  )
}