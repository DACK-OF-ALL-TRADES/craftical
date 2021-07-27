import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Container } from "semantic-ui-react";
import Header from "../components/Home/Header";
import Body from "../components/Home/Body";

const Home = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
