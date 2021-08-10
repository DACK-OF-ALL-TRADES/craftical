import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Container } from "semantic-ui-react";
import Head from "../components/Home/Head";
import Body from "../components/Home/Body";
import Auth from "../utils/auth";

const Home = () => {
  if (!Auth.loggedIn) {
    alert("Session Expired!");
    window.location.assign("/");
  }
  return (
    <div>
      <Nav />
      <Head />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
