import React, { useEffect, useState, useContext } from "react"
import CartItem from "./CartItem"
import { ListGroup } from "reactstrap"
import { Link } from "react-router-dom"
import "./shopping-cart.css"
import products from "../../../assets/fake-data/products"
import { ProductContext } from "../../Layout/Layout"

function Carts(props) {
  const onClickCartClose = () => {
    props.setOpenCart(false)
  }

  // on delete item

  // cart context
  const { cartProducts, setCartProducts } = useContext(ProductContext)
  //create array for various titles

  const [filteredCartProducts, setFilteredCartProduct] = useState([])
  let newCartProducts = cartProducts.map((r) => {
    r = {
      ...r,
      quantity: 1,
    }
    console.log(r)
    return r
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

  const onDelete = (id) => {
    // for (let i = newCartProducts.length - 1; i >= 0; --i) {
    //   if (newCartProducts[i].id == id) {
    //     newCartProducts.splice(i, 1)
    //   }
    // }
    // console.log("delte clicked")
  }
  return (
    <div>
      <div
        className={`cart__container
    
    ${!props.openCart ? "close__modal" : ""}
    `}
      >
        <ListGroup className="cart">
          <div className="cart__close" onClick={onClickCartClose}>
            <span>
              <i class="ri-close-fill"></i>
            </span>
          </div>
          <div className="cart__item-list">
            {/* {filteredCartProducts.map((item) => (
              <CartItem
                title={item.title}
                key={item.id}
                image01={item.image01}
                price={item.price}
                quantity={item.quantity}
                onDelete={onDelete}
              />
            ))} */}
          </div>

          <div
            className="cart__bottom"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h6>
              Subtotal amount:{" "}
              <span>
                $
                {
                  // totalAmount
                }{" "}
              </span>{" "}
            </h6>
            <button>
              <Link to="/checkout">CheckOut</Link>
            </button>
          </div>
        </ListGroup>
      </div>
    </div>
  )
}

export default Carts
