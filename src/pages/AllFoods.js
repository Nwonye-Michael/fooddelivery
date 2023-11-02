import React, { useState, useEffect } from "react"
import Helmet from "../components/Helmet/Helmet"
import CommonSection from "../components/UI/common-section/CommonSection"
import ReactPaginate from "react-paginate"
import { Container, Row, Col } from "reactstrap"

import products from "../assets/fake-data/products"
import ProductCard from "../components/UI/product/ProductCard"

import "./styles/AllFood.css"

function AllFoods() {
  const [searchTerm, setSearchTerm] = useState("")
  const [pageNumber, setPageNumber] = useState(0)
  const searchedProduct = products.filter((item) => {
    if (searchTerm === "") return item
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) return item
  })
  const productPerPage = 4
  const vistedPage = pageNumber * productPerPage
  const displayPage = searchedProduct.slice(
    vistedPage,
    vistedPage + productPerPage
  )
  const pageCount = Math.ceil(searchedProduct.length / productPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <Helmet title="All Foods">
      <CommonSection title="All Foods" />

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div
                className="search__widget "
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  type="text"
                  placeholder="I'm looking for..."
                />
                <span>
                  <i class="ri-search-line" />
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6" className="mb-5">
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option>Default</option>
                  <option value="ascending">Alphabethically A-Z</option>
                  <option value="descending">Alphabethically Z-A</option>{" "}
                  <option value="high-price">High Price</option>{" "}
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>
            {displayPage.map((item, i) => (
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                <ProductCard item={item} key={item.id} />
              </Col>
            ))}
            <div>
              <ReactPaginate
                pageCount={pageCount}
                onPageChange={changePage}
                previousLabel="Prev"
                nextLabel="Next"
                containerClassName="paginationBttns"
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default AllFoods
