import React from "react";
import { Grid, Container } from "semantic-ui-react";

const SearchBody = () => {
  return (
    <div>
      <Container>
        <div className="home-header">
          <h1>Search</h1>
        </div>
        <div class="ui big input focus">
          <input type="text" placeholder="Search..." />
        </div>
        <div class="ui form">
          <div class="grouped fields">
            <label>What would you like to search by?</label>
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio" name="progress" />
                <label>In Progress</label>
              </div>
            </div>
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio" name="completed" />
                <label>Completed</label>
              </div>
            </div>
            <div class="field">
              <div class="ui radio checkbox">
                <input type="radio" name="example2" />
                <label>Future Idea</label>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchBody;
