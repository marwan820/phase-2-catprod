import React, { useState, useEffect } from "react"
import "./App.css"
import NavBar from "./NavBar"
import { Route, Routes } from "react-router-dom"
import "../src/styles.css"
import SearchForItem from "./SearchForItem"
import ProductList from "./ProductList"
import ShoppingCart from "./Shopping Cart/ShoppingCart"
import ProductForm from "./ProductForm"
/* import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col" */

function App() {
  const [catProducts, setCatProducts] = useState([])
  const [categorySelect, setCategorySelect] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [cartList, setToCartList] = useState([])

  useEffect(() => {
    fetch("http://localhost:3002/products")
      .then((res) => res.json())
      .then((items) => setCatProducts(items))
  }, [])

  const addCatProduct = (product) => {
    setCatProducts([...catProducts, product])
  }

  const productSearch = catProducts.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  function addToCartList(item) {
    setToCartList([...cartList, item])
  }

  function deleteFromCart(item) {
    const newArray = cartList.filter((product) => product.id !== item.id)
    setToCartList(newArray)
  }

  const handleDelete = (itemToDelete) => {
    const filterProducts = catProducts.filter(
      (item) => item.id !== itemToDelete
    )
  
    
    setCatProducts(filterProducts)
  }

  const filteredItems = productSearch.filter((item) => {
    if (categorySelect === "All") {
      return true
    } else {
      return item.category === categorySelect
    }
  })

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <SearchForItem 
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                catProducts={catProducts}
                categorySelect={categorySelect}
                setCategorySelect={setCategorySelect}
              />
              
              <ProductList
                handleDelete={handleDelete}
                catProducts={filteredItems}
                setCatProducts={setCatProducts}
                addToCartList={addToCartList}
                deleteFromCart={deleteFromCart}
              />
            </div>
          }
        />

        <Route
          exact
          path="/product-form"
          element={<ProductForm addCatProduct={addCatProduct} />}
        />
        <Route
          exact
          path="/cart"
          element={<ShoppingCart cartList={cartList} />}
        />
      </Routes>
    </>
  )
}

export default App
