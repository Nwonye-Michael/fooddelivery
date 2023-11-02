import React, { useState, useEffect, useRef } from "react"

import Helmet from "../components/Helmet/Helmet"
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap"
import heroImg from "../assets/images/hero.png"
import "./styles/hero-section.css"
import { Link } from "react-router-dom"
import Category from "../components/UI/category/Category"
import "./styles/Home.css"

import featureImg01 from "../assets/images/service-01.png"
import featureImg02 from "../assets/images/service-02.png"
import featureImg03 from "../assets/images/service-03.png"

import products from "../assets/fake-data/products.js"

import foodcategoryImg01 from "../assets/images/hamburger.png"
import foodcategoryImg02 from "../assets/images/pizza.png"
import foodcategoryImg03 from "../assets/images/bread.png"

import ProductCard from "../components/UI/product/ProductCard"

import whyImg from "../assets/images/location.png"

import networkImg from "../assets/images/network.png"

import TestimonialSlider from "../components/UI/Slider/TestimonialSlider"

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquid quidem cumque adipisci possimus sunt quam nisi. ",
  },
  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquid quidem cumque adipisci possimus sunt quam nisi. ",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquid quidem cumque adipisci possimus sunt quam nisi. ",
  },
]

function Home() {
  const [category, setCategory] = useState("ALL")
  const [allProducts, setAllProducts] = useState(products)

  const [hotPizza, setHotPizza] = useState([])

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza")
    const slicedPizza = filteredPizza.slice(0, 4)
    setHotPizza(slicedPizza)
  }, [])

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products)
    }
    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      )
      setAllProducts(filteredProducts)
    }
    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      )
      setAllProducts(filteredProducts)
    }
    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      )
      setAllProducts(filteredProducts)
    }
  }, [category])

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 style={{ marginBottom: "12px" }}>
                  Easy way to make an order
                </h5>
                <h1 className="hero__title" style={{ marginBottom: "16px" }}>
                  <span>HUNGRY?</span> Just wait food at<span> your door</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Assumenda ratione quo porro nihil laborum inventore voluptates
                  temporibus ut pariatur animi? Reprehenderit ea mollitia a
                  earum laborum blanditiis alias vero. Provident!{" "}
                </p>
                <div
                  className="hero__btns"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    marginTop: "16px",
                  }}
                >
                  <button
                    className="order__btn"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    Order now
                    <i class="ri-arrow-right-s-line"></i>
                  </button>
                  <button className="all__foods-btn">
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>
                <div
                  className="hero__service"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "20px",
                    gap: "20px",
                  }}
                >
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>
                    100% shipping checkout
                  </p>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>
                    No shippping charge
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img
                  style={{ width: "400px" }}
                  src={heroImg}
                  alt="hero"
                  srcSet=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section style={{ paddingTop: "0" }}>
        <Category />
      </section>
      <section>
        <Container>
          <Row>
            <Col
              lg="12"
              style={{
                textAlign: "center",
              }}
            >
              <h5 className="feature__subtitle">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p
                className="feature__text"
                style={{ marginTop: "16px", marginBottom: "4px" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, rem! Vitae necessitatibus
              </p>
              <p
                className="feature__text"
                // style={{ marginTop: "16px", marginBottom: "4px" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, rem! Vitae necessitatibus
              </p>
            </Col>
            {featureData.map((item, index) => (
              <Col lg="4" md="4" key={index} style={{ marginTop: "20px" }}>
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    // style={{ width: "100px" }}
                    className="w-25 mb-3"
                  />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>
            <Col lg="12" className="text-center">
              <div
                className="food__category"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "16px",
                }}
              >
                <button
                  className={`all__btn ${
                    category === "ALL" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => {
                    setCategory("ALL")
                    console.log("category changed")
                  }}
                >
                  All
                </button>
                <button
                  className={`burger__btn ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  }`}
                  style={{ display: "flex", alignItems: "center", gap: `8px` }}
                  onClick={() => {
                    setCategory("BURGER")
                    console.log("category changed")
                  }}
                >
                  <img src={foodcategoryImg01} alt="burgers" />
                  Burger
                </button>
                <button
                  className={`pizza__btn ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  }`}
                  style={{ display: "flex", alignItems: "center", gap: `8px` }}
                  onClick={() => {
                    setCategory("PIZZA")
                    console.log("category changed")
                  }}
                >
                  <img src={foodcategoryImg02} alt="pizza" /> Pizza
                </button>
                <button
                  className={`bread__btn ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  }`}
                  style={{ display: "flex", alignItems: "center", gap: `8px` }}
                  onClick={() => {
                    setCategory("BREAD")
                    console.log("category changed")
                  }}
                >
                  <img src={foodcategoryImg03} alt="bread" />
                  Bread
                </button>
              </div>
            </Col>
            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6" style={{}}>
              <img
                src={whyImg}
                alt="why-tasty-treat"
                style={{ width: "100%" }}
              />
            </Col>
            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title">
                  Why <span style={{ color: "#df2020" }}>Tasty Treat</span>{" "}
                </h2>
                <p className="tasty__treat-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore quas magni expedita reiciendis minus veniam itaque
                  architecto repudiandae ullam, ex ad facere voluptas, incidunt
                  repellendus maiores vitae iure, molestias velit?
                </p>
                <ListGroup style={{ marginTop: "20px" }}>
                  <ListGroupItem
                    className=""
                    style={{
                      border: "0",
                      paddingLeft: "0",
                      paddingRight: "0",
                    }}
                  >
                    <p
                      className="choose__us-title"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <i class="ri-checkbox-circle-line"></i> Fresh and tasty
                      foods{" "}
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Tempore quas magni velit?
                    </p>
                  </ListGroupItem>
                  <ListGroupItem
                    className=""
                    style={{
                      border: "0",
                      paddingLeft: "0",
                      paddingRight: "0",
                    }}
                  >
                    <p
                      className="choose__us-title"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <i class="ri-checkbox-circle-line"></i> Quality support
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium, quos.
                    </p>
                  </ListGroupItem>
                  <ListGroupItem
                    className=""
                    style={{
                      border: "0",
                      paddingLeft: "0",
                      paddingRight: "0",
                    }}
                  >
                    <p
                      className="choose__us-title"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <i class="ri-checkbox-circle-line"></i> Order from any
                      location
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Laudantium, quos.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section style={{ paddingTop: "0" }}>
        <Container>
          <Row>
            <Col
              lg="12"
              className=""
              style={{ marginBottom: "20px", textAlign: "center" }}
            >
              <h2>Hot Pizza</h2>{" "}
            </Col>
            {hotPizza.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {" "}
            <Col lg="6" md="6">
              <div className="testimonial">
                <h5
                  className="testimonial__subtitle"
                  style={{ marginBottom: "16px" }}
                >
                  Testimonial
                </h5>
                <h2
                  className="testimonial__title"
                  style={{ marginBottom: "16px" }}
                >
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  tempore minus repudiandae, aliquam inventore ab dolorem
                  voluptate quas explicabo aperiam.
                </p>
                <TestimonialSlider />
              </div>
            </Col>
            <Col lg="6" md="6">
              <img
                src={networkImg}
                alt="testimonial-img"
                style={{ width: "100%" }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home
