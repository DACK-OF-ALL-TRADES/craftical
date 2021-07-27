import React from "react";
import { Divider, Header, Icon } from "semantic-ui-react";

const Body = () => {
  return (
    <div>
      <Divider horizontal>
        <Header as="h4">
          <Icon name="search" />
          Discover
        </Header>
      </Divider>
    </div>
  );
};

export default Body;
