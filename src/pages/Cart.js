import React, { useContext } from "react"
import { Link } from "react-router-dom"
import Helmet from "../components/Helmet/Helmet"
import CommonSection from "../components/UI/common-section/CommonSection"
import { Container, Col, Row } from "reactstrap"
import { ProductContext } from "../components/Layout/Layout"
import "./styles/Cartpage.css"

function Cart() {
  const { cartProducts, setCartProducts } = useContext(ProductContext)

  let newCartProducts = cartProducts.map((r) => {
    return {
      ...r,
      quantity: 1,
    }
  })

  newCartProducts.forEach((value, index, self) => {
    let r = self.findIndex((t) => t.id === value.id)
    if (index !== r) {
      self[r].quantity += 1
    }
  })
  newCartProducts = newCartProducts.filter(
    (value, index, self) => index === self.findIndex((t) => t.id === value.id)
  )
  let totalAmount = 0
  newCartProducts.map((item) => {
    totalAmount = totalAmount + item.price
  })

  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {newCartProducts.length === 0 ? (
                <h5 className="text-center">Your cart is empty</h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {newCartProducts.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}

              <div className="mt-4">
                <h6>
                  Subtotal: $
                  <span className="cart__subtotal">{totalAmount}</span>
                </h6>
                <p>Taxes and shipping will calculate at checkout</p>
                <div className="cart__page-btn">
                  <button className="addToCart__btn me-4">
                    <Link to="/foods">Continue Shopping</Link>
                  </button>
                  <button className="addToCart__btn">
                    <Link to="/checkout">Proceed to checkout</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item
  const deleteItem = () => {}
  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={image01} alt="" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">${price}</td>
      <td className="text-center">{quantity}</td>
      <td className="text-center cart__item-del">
        <i class="ri-delete-bin-line" onClick={deleteItem}></i>
      </td>
    </tr>
  )
}

export default Cart
