import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Container } from "semantic-ui-react";
 import SearchBody from '../components/Search/search-body';
const Search = () => {
  return (
    <div>
      <Nav />
      <Container>
      <SearchBody />
      </Container>
      <Footer />
    </div>
  );
};

export default Search;
