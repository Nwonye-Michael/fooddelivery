import React from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap"
import logo from "../../assets/images/res-logo.png"
import "./Footer.css"
function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo">
              <img src={logo} alt="logo" />
              <h5 className="footer__title">Tasty Treat</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
                consectetur
              </p>
            </div>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Delivery Time</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem
                className="delivery__time-item"
                style={{ border: "0", padding: "0" }}
              >
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
              <ListGroupItem
                className="delivery__time-item"
                style={{ border: "0", padding: "0" }}
              >
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem
                className="delivery__time-item"
                style={{ border: "0", padding: "0" }}
              >
                <p>Location: Willow Creek, France</p>
              </ListGroupItem>
              <ListGroupItem
                className="delivery__time-item"
                style={{ border: "0", padding: "0" }}
              >
                <span>Phone:0123456789</span>
              </ListGroupItem>
              <ListGroupItem
                className="delivery__time-item"
                style={{ border: "0", padding: "0" }}
              >
                <span>Email: ectera@yahoo.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe for our newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <span>
                <i class="ri-send-plane-line" />
              </span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" style={{ marginTop: "20px" }}>
            <p className="copyright__text">
              Copyright - 2022, website cloned by Michael.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div
              className="social__links"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                justifyContent: "end",
              }}
            >
              <p style={{ marin: "0" }}>Follow:</p>
              <span>
                <Link to="https://wa.link/afot77">
                  <i class="ri-whatsapp-line"></i>
                </Link>
              </span>
              <span>
                <Link to="https://wa.link/afot77">
                  <i class="ri-github-line"></i>
                </Link>
              </span>
              <span>
                <Link to="https://wa.link/afot77">
                  <i class="ri-github-line"></i>
                </Link>
              </span>
              <span>
                <Link to="https://wa.link/afot77">
                  <i class="ri-github-line"></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
