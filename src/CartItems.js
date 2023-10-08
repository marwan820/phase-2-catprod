import React from "react"

const CartItems = ({ item }) => {
  return (
    <div key={item.id} className="cart-card">
      <img src={item.image} alt={item.name} />
      <p>{item.name}</p>
      <p>{item.price}</p>
      <button>Remove from cart</button>
    </div>
  )
}

export default CartItems
