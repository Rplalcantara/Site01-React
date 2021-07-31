import Menu from "../header/menu";
import Footer from "../footer/footer";
import React, { useState } from "react";
import Carousel from "react-elastic-carousel";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.breakPoints = [
      { width: 1, itemsToShow: 1, showArrows: false },
      { width: 600, itemsToShow: 1, showArrows: true }
    ];
  }

  render() {
    return (
      <>
        <Menu />
        <div className="carousel-container">
          <Carousel breakPoints={this.breakPoints} transitionMs="800">
            <div className="slider-card">
              <span className="slide01"> Aqui é o slide 01</span>
            </div>
            <div className="slider-card">
              <span className="slide02"> Aqui é o slide 02</span>
            </div>
            <div className="slider-card">
              <span className="slide03"> Aqui é o slide 03</span>
            </div>
          </Carousel>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;

/* function Home() {

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
        <Carousel>
          {items.map((item) => (
            <div className="slider-card" key={item}>{item}</div>
          ))}
        </Carousel>
      </div>
      <Footer />
    </>
  );
}

export default Home; */
