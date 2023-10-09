import React from "react"
import ItemCard from "./ItemCard"
const ProductList = ({
  handleDelete,
  catProducts,
  addToCartList,
  deleteFromCart,
}) => {
  const productList = catProducts.map((item) => (
    <ItemCard
      handleDelete={handleDelete}
      deleteFromCart={deleteFromCart}
      addToCartList={addToCartList}
      key={item.id}
      item={item}
    />
  ))
  return (
   
      <main className="product-container">  {productList} </main>
  )
}

export default ProductList
