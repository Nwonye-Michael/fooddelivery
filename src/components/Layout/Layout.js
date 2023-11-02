import React, { useState, createContext } from "react"
import Routers from "../../routes/Routers"

import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Carts from "../UI/Cart/Carts"

// create product context
export const ProductContext = createContext()

function Layout() {
  const [openCart, setOpenCart] = useState(false)

  // create the state that the product context will add the products to
  const [cartProducts, setCartProducts] = useState([])
  const [filteredCartProducts, setFilteredCartProducts] = useState([])

  return (
    <div>
      <ProductContext.Provider
        value={{
          cartProducts,
          setCartProducts,
          filteredCartProducts,
          setFilteredCartProducts,
        }}
      >
        <Header openCart={openCart} setOpenCart={setOpenCart} />{" "}
        <Carts openCart={openCart} setOpenCart={setOpenCart} />
        <div>
          <Routers />
        </div>
        <Footer />
      </ProductContext.Provider>
    </div>
  )
}

export default Layout
