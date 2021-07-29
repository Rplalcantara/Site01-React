import Menu from "../header/menu";
import Footer from "../footer/footer";
import React, { useState } from "react";
import Carousel, { consts } from "react-elastic-carousel";

function Home() {

  function slideIcon({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? "<" : ">"
    return (
      <a className="slide-icon" onClick={onClick} disabled={isEdge}>{pointer}</a>
    )
  }

  const slides =[
    <span className="slide01"> Aqui é o slide 01</span>,

    <span className="slide02"> Aqui é o slide 02</span>,
    
    <span className="slide03"> Aqui é o slide 03</span>
    ]

  const [items, setItems] = useState(slides);

  return (
    <>
      <Menu />
      <div className="carousel-container">
        <Carousel renderArrow={slideIcon}>
          {items.map((item) => (
            <div className="slider-card" key={item}>{item}</div>
          ))}
        </Carousel>
      </div>
      <Footer />
    </>
  );
}

export default Home;
