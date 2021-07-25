import React from "react";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const NoMatch = () => {
  return (
    <div>
      <Nav />
      <Jumbotron>
        <h1>404 Page Not Found</h1>
        <h1>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
        </h1>
      </Jumbotron>
      <Footer />
    </div>
  );
};

export default NoMatch;
