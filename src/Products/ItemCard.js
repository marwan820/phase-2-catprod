import React, { useState } from "react"
import "./itemcard.css"
/* import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col" */
//import Card from "react-bootstrap/Card"
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
    <div className="card center-align" key={id}>
      <img className="card-img" src={image} alt={name} />
      <h1 className="card-title">{name}</h1>
      <p className="card-price">${price}</p>
      <p className="card-description">{description}</p>
      <p className="card-category">{category}</p>
      <Button onClick={addToCart} type="submit">
        {inCart === false ? "Add to cart" : "Delete from cart"}
      </Button>
      <Button onClick={handleDeleteClick} variant="danger">
        Delete Item
      </Button>
    </div>
  )
}

export default ItemCard
