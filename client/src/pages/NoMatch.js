import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const NoMatch = () => {
  return (
    <div>
      <Nav />
      <div
        style={{
          height: 560,
          clear: "both",
          paddingTop: 120,
          textAlign: "center",
        }}
      >
        <h1>404 Page Not Found</h1>
      </div>
      <Footer />
    </div>
  );
};

export default NoMatch;
