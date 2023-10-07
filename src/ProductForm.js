import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"


const ProductForm = ({ addCatProduct }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const newProductForm = {
      name: formData.name,
      price: formData.price,
      image: formData.image,
      category: formData.category,
    }

    /* const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProductForm),
    } */

    fetch("http://localhost:3002/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProductForm),
    })
      .then((r) => r.json())
      .then((product) => addCatProduct(product))
    setFormData({
      name: "",
      price: "",
      image: "",
      description:"",
      category: "",
    })
  }

  function handleChange(e) {
    const key = e.target.id
    const value = e.target.value
    const formDataCopy = { ...formData }
    formDataCopy[key] = value
    setFormData(formDataCopy)
  }

  //console.log(formData)

  return (
    <>
      <h1 className="form-header">Create a Product</h1>
      <Form type="submit" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="name">Product Name</Form.Label>
          <Form.Control
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="price">Item Price</Form.Label>
          <Form.Control
            id="price"
            type="text"
            value={formData.price}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="image">Upload Image url</Form.Label>
          <Form.Control
            id="image"
            type="text"
            value={formData.image}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="description" id="description">
            Description
          </Form.Label>
          <Form.Control
            id="description"
            type="text"
            value={formData.description}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="category">Choose category</Form.Label>
          <Form.Select
            id="category" value={formData.category}
            onChange={handleChange}>
            <option>Toys</option>
            <option>Furniture</option>
            <option>Accesories</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  )
}
export default ProductForm
