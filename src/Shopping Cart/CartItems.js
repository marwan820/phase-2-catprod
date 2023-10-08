import React from "react"
import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card"
import "./cart.css"

const CartItems = ({ item,deleteFromCart }) => {
  return (
    <Card> 
   <Card.Body key={item.id} className="cart-card" >
      <Card.Img src={item.image} alt={item.name} />
      <Card.Text>{item.name}</Card.Text>
      <Card.Text>{item.price}</Card.Text>
      <Button onClick={deleteFromCart}>Remove from cart</Button>
      </Card.Body>
    </Card>
  )
}

export default CartItems
