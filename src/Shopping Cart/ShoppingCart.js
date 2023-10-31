import React from "react"
import CartItems from "./CartItems"

const ShoppingCart = ({ cartList, deleteFromLocalStorage }) => {
  const cartItems = cartList.map((item) => {
    return (
      <CartItems
        item={item}
        key={crypto.randomUUID()}
        deleteFromLocalStorage={deleteFromLocalStorage}
      />
    )
  })

  return (
    <>
      <h2>Shopping cart</h2>
      <div className="shopping-cart-container">{cartItems}</div>
    </>
  )
}

export default ShoppingCart
