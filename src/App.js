import React, { useState, useEffect } from "react"
import "./App.css"
import NavBar from "./NavBar"
import { Route, Routes } from "react-router-dom"
import "../src/styles.css"
import SearchForItem from "./SearchForItem"
import ProductList from "./Products/ProductList"
import ShoppingCart from "./Shopping Cart/ShoppingCart"
import ProductForm from "./ProductForm"

const cartLocalStorage = JSON.parse(localStorage.getItem("cartList") || "[]")
function App() {
  const [catProducts, setCatProducts] = useState([])
  const [categorySelect, setCategorySelect] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [cartList, setCartList] = useState(cartLocalStorage)

  useEffect(() => {
    fetch("http://localhost:3002/products")
      .then((res) => res.json())
      .then((items) => setCatProducts(items))
  }, [])

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartList))
  }, [cartList])

  const deleteFromLocalStorage = (itemToDelete) => {
    const cartStorageFilter = cartList.filter((item) => {
      return item.id !== itemToDelete
    })
    setCartList(cartStorageFilter)

    localStorage.setItem("cartList", JSON.stringify(cartStorageFilter))
  }

  const addCatProduct = (product) => {
    setCatProducts([...catProducts, product])
  }

  const productSearch = catProducts.filter((item) => {
    const itemName = item.name ? item.name.toLowerCase() : ""
    const itemDescription = item.description
      ? item.description.toLowerCase()
      : ""
    return (
      itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      itemDescription.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  function addToCartList(item) {
    setCartList([...cartList, item])
  }

  function deleteFromCart(item) {
    const newArray = cartList.filter((product) => product.id !== item.id)
    setCartList(newArray)
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
    <div className="app">
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
          element={
            <ShoppingCart
              cartList={cartList}
              deleteFromLocalStorage={deleteFromLocalStorage}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
