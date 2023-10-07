import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const SearchForItem = ({
  catProducts,
  categorySelect,
  setCategorySelect,
  setSearchTerm,
  searchTerm,
}) => {
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleCategoryChange = (e) => {
    const value = e.target.value
    setCategorySelect(value)
    // onCategoryChange();
  }

  const newArrayCategories = catProducts.map((product) => {
    return product.category
  })

  const filteredCategories = [...new Set(newArrayCategories)]

  const searchByCategory = filteredCategories.map((product) => {
    return (
      <option key={crypto.randomUUID()} value={product}>
        {product}
      </option>
    )
  })

  return (
    <Row  className="filter"style={{justifyContent:"space-evenly", alignItems:"baseline", marginBottom:"5%"}}>
<Col >
      <input
        id="search"
        value={searchTerm}
        type="text"
        placeholder="Search for product"
        onChange={handleSearchChange}
      /></Col>
      <Col>
      <select onChange={handleCategoryChange} value={categorySelect}>
        <option value="All">Filter by Category</option>
        {searchByCategory}
      </select>
      </Col>
    </Row>
  )
}

export default SearchForItem
