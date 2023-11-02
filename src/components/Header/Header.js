import React, { useRef, useEffect, useState, useContext } from "react"
import { Container, Nav } from "reactstrap"
import logo from "../../assets/images/res-logo.png"
import { NavLink, Link } from "react-router-dom"
import Carts from "../UI/Cart/Carts"

import { ProductContext } from "../Layout/Layout"

import "./Header.css"
const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "All Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
]

function Header(props) {
  const menuRef = useRef(null)
  const headRef = useRef(null)
  const toogleMenu = () => menuRef.current.classList.toggle("show__menu")
  const { cartProducts } = useContext(ProductContext)

  let totalQuantity = 0
  cartProducts.map((item) => {
    totalQuantity = totalQuantity + 1
  })

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // if (
      //   document.body.scrollTop > 80 ||
      //   document.documentElement.scrollTop > 80
      // ) {
      //   headRef.current.classList.add("header__shrink")
      // } else {
      //   headRef.current.classList.remove("header__shrink")
      // }
    })
    return () => window.removeEventListener("scroll", null)
  }, [])
  useEffect(() => {}, [cartProducts])
  return (
    <header className="header" ref={headRef}>
      <Container>
        <div className="nav__wrapper">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
          </div>
          {/* menu */}
          <div className="navigation" ref={menuRef} onClick={toogleMenu}>
            <div className="menu">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>
          {/* nav right icons */}
          <div className="nav__right ">
            {/* cart */}
            <span
              className="cart__icon"
              onClick={() => {
                props.setOpenCart(true)
                console.log("clicked cart")
              }}
            >
              <i class="ri-shopping-basket-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>

            <span className="user">
              <Link to="/login">
                <i class="ri-user-line"></i>
              </Link>
            </span>
            <span className="mobile__menu" onClick={toogleMenu}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
