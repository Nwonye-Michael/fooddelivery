import React from "react"
import { Container, Col, Row } from "reactstrap"
import categoryImg01 from "../../../assets/images/category-01.png"
import categoryImg02 from "../../../assets/images/category-02.png"
import categoryImg03 from "../../../assets/images/category-03.png"
import categoryImg04 from "../../../assets/images/category-04.png"
import "./Category.css"

const categoryData = [
  {
    display: "Fastfood",
    imgURL: categoryImg01,
  },
  {
    display: "Pizza",
    imgURL: categoryImg02,
  },
  {
    display: "Asian Food",
    imgURL: categoryImg03,
  },
  {
    display: "Row Meat",
    imgURL: categoryImg04,
  },
]
function Category() {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" key={index}>
            <div
              className="category__items"
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
                gap: "12px",
              }}
            >
              <div className="category__img">
                <img src={item.imgURL} alt="category__item" />
              </div>{" "}
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Category
