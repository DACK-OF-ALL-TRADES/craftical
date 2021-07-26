import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel.js";
//

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="home-header">
        <h1>Homepage</h1>
      </div>
      <div className="carousel-container">
        <Carousel name="Popular Items" />
      </div>
      <div className="carousel-container">
        <Carousel name="Popular Categories" />
      </div>
      <div className="carousel-container">
        <Carousel name="Popular Users" />
      </div>
      <div className="home-container"></div>
      <Footer />
    </div>
  );
};

export default Home;
