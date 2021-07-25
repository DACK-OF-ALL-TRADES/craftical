import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Nav />
      <h1>Homepage</h1>
      <div className="home-container"></div>
      <Footer />
    </div>
  );
};

export default Home;
