import React from "react"

const CartItems = ({ item }) => {
  console.log("Item", item)

  return <p key={item.id}>{item.name}</p>
}

export default CartItems
