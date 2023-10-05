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
    <Container className="container" style={{ height: "1px" }}>
      <Row>{productList}</Row>
    </Container>
  )
}

export default ProductList