import React from "react"
import { ListGroupItem } from "reactstrap"
import productImg from "../../../assets/images/product_01.1.jpg"
import "./cart-item.css"

function CartItem(props) {
  const incrementItem = () => {}
  const decreaseItem = () => {}

  const deleteItem = props.onDelete
  return (
    <ListGroupItem style={{ border: "0" }}>
      <div className="cart__item-info d-flex gap-2">
        <img src={props.image01} alt="product-img" />
        <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
          <div>
            <h6 className="cart__product-title">{props.title}</h6>
            <p className="d-flex align-items-center gap-5 cart__product-price">
              2x <span>{props.price}</span>
            </p>
            <div style={{ alignItems: "center", background: "" }}>
              <span className="increase__btn" onClick={incrementItem}>
                <i class="ri-add-line"></i>
              </span>

              <span className="quantity">{props.quantity}</span>
              <span className="decrease__btn" onClick={decreaseItem}>
                <i class="ri-subtract-line"></i>
              </span>
            </div>
          </div>
          <span className="delete__btn" onClick={deleteItem}>
            <i class="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  )
}

export default CartItem
