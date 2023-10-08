import React from "react"
//import CartItems from "./CartItems"

const ShoppingCart = ({ cartList }) => {
  console.log(cartList)
  /* const cartItems = cartList.map((item) => {
    <CartItems item={item} key={item.id} />
  })
  console.log("cart items",cartItems) */ 

  return (
    <div className="shopping-cart-container">
      {cartList.map((item) => {
        return(
        <div key={item.name} className="cart-card">
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
          <p>{item.price}</p>
          <button>Remove from cart</button>
        </div>)
      })}
    </div>
  )
}

export default ShoppingCart
