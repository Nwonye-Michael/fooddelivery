import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
// import Home from "../pages/Home"
import Home from "../pages/Home"
import AllFoods from "../pages/AllFoods"
import FoodDetails from "../pages/FoodDetails"
import Cart from "../pages/Cart"
import CheckOut from "../pages/CheckOut"
import Contact from "../pages/Contact"
import Login from "../pages/Login"
import Register from "../pages/Register"

function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/foods" element={<AllFoods />} />
        <Route path="/foods/:id" element={<FoodDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default Routers
