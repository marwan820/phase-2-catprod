import React from "react"
import ItemCard from "./ItemCard"
import "./products.css"
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
  return <div className="container">{productList}</div>
}

export default ProductList
