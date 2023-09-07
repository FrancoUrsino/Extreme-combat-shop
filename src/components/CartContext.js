import { createContext, useState } from "react";

export const CartContext = createContext({ cart: [] })

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])


  const addProd = (product, quantity) => {
    if (prodInCart(product.id)) {
      setCart(cart.map((prod) => {
        if (prod.id === product.id) {
          return { ...product, quantity: product.quantity + quantity }
        } else {
          return product
        }
      }))
    } else {
      setCart([...cart, { ...product, quantity }])
    }
  }
  const prodInCart = (id) => {
    return cart.some((prod) => prod.id === id)
  }

  const removeProd = (id) => {
    setCart(cart.filter((prod) => prod.id !== id))
  }

  const cartQuan = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0)
  }

  const clearCart = () => {
    setCart([])
  }

  const total = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0)
  }

  return (
    <CartContext.Provider value={{ cart, addProd, removeProd, cartQuan, clearCart, total }}>
      {children}
    </CartContext.Provider>
  )
}