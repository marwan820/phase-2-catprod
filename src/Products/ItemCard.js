import React, { useState } from "react"
/* import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col" */
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

const ItemCard = ({ handleDelete, item, addToCartList, deleteFromCart }) => {
  const { id, name, price, description, image, category } = item
  const [inCart, setIncart] = useState(false)

  const addToCart = () => {
    setIncart((inCart) => !inCart)
    if (inCart === false) {
      addToCartList(item)
    } else {
      deleteFromCart(item)
    }
  }

  function handleDeleteClick() {
    handleDelete(id)
    fetch(`http://localhost:3002/products/${id}`, { method: "DELETE" }).then()
  }

  return (
    <Card  key={id} /* style={{ width: "10000 rem", height: "10%" }} */>
      <Card.Img className="card-img" src={image} alt={name}></Card.Img>
      <Card.Body className="card-body">
        <Card.Title>{name}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{category}</Card.Text>
        <Button onClick={addToCart} type="submit">
          {inCart === false ? "Add to cart" : "Delete from cart"}
        </Button>
        <Button onClick={handleDeleteClick} variant="danger">
          Delete Item
        </Button>
      </Card.Body>
    </Card>
  )
}

export default ItemCard