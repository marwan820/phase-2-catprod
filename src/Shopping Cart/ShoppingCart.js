import React from "react"
import CartItems from "./CartItems"

const ShoppingCart = ({ cartList,deleteFromLocalStorage }) => {

  const cartItems = cartList.map((item) => {
    return(
    <CartItems item={item} key={crypto.randomUUID()} deleteFromLocalStorage={deleteFromLocalStorage} />)
  })

  return (
    <div className="shopping-cart-container">
      {cartItems}
      </div>
  )
}

export default ShoppingCart
