import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
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
   /*  <Container style={{ height: "10px" }}>
      <Row class="row align-items-start"> */
      <main className="product-container">  {productList} </main>
    /*   </Row>
    </Container> */
  )
}

export default ProductList
