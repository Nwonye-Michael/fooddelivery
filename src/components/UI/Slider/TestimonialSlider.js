import React from "react"
import Slider from "react-slick"
import ava01 from "../../../assets/images/ava-1.jpg"
import ava02 from "../../../assets/images/ava-2.jpg"
import ava03 from "../../../assets/images/ava-3.jpg"

import "./Slider.css"

function TestimonialSlider() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    slidesToScroll: 1,
    slidesToShow: true,
  }
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          tenetur, explicabo corporis ratione, enim, vitae sunt velit rerum
          neque aliquid pariatur voluptatem quae eveniet saepe vero ipsa modi
          ducimus numquam?
        </p>
        <div
          className="slider__content"
          style={{ display: "flex", alignItems: "center", gap: "12px" }}
        >
          <img src={ava01} alt="avatar" style={{}} className="rounded" />
          <h6>Jhon Doe</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          tenetur, explicabo corporis ratione, enim, vitae sunt velit rerum
          neque aliquid pariatur voluptatem quae eveniet saepe vero ipsa modi
          ducimus numquam?
        </p>
        <div
          className="slider__content"
          style={{ display: "flex", alignItems: "center", gap: "12px" }}
        >
          <img src={ava02} alt="avatar" style={{}} className="rounded" />
          <h6>Idan GanGan</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          tenetur, explicabo corporis ratione, enim, vitae sunt velit rerum
          neque aliquid pariatur voluptatem quae eveniet saepe vero ipsa modi
          ducimus numquam?
        </p>
        <div
          className="slider__content"
          style={{ display: "flex", alignItems: "center", gap: "12px" }}
        >
          <img src={ava03} alt="avatar" style={{}} className="rounded" />
          <h6>Michael E.</h6>
        </div>
      </div>
    </Slider>
  )
}

export default TestimonialSlider
