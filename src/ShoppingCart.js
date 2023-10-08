import React from "react"
import CartItems from "./CartItems"

const ShoppingCart = ({ cartList }) => {
  console.log(cartList)
  const cartItems = cartList.map((item) => {
    return(
    <CartItems item={item} key={item.id} />)
  })

  return (
    <div className="shopping-cart-container">
      {cartItems}
      </div>
  )
}

export default ShoppingCart
