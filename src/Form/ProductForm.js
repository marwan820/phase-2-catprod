import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "../Form/form.css"

const ProductForm = ({ addCatProduct }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
    category: "",
  })

  const categoryArray = [
    "Grooming",
    "Accessories",
    "Furniture",
    "Toys",
    "Miscellaneous",
  ]
  const sortedArray = [...categoryArray].sort()

  const categoryValues = sortedArray.map((category) => {
    return <option key={crypto.randomUUID()}>{category}</option>
  })


  const handleSubmit = (e) => {
    e.preventDefault()
    const newProductForm = {
      name: formData.name,
      price: formData.price,
      image: formData.image,
      description: formData.description,
      category: formData.category,
    }

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
      description: "",
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

  return (
    <>
      <h1 className="form-header">Create a Product</h1>
      <Form type="submit" onSubmit={handleSubmit} style={{marginLeft:"5px"}}>
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
            id="category"
            value={formData.category}
            onChange={handleChange}
          >
            {categoryValues}
            {/*  <option>Accessories</option>
            <option>Furniture</option>
            <option>Accessories</option> */}
          </Form.Select>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  )
}
export default ProductForm
