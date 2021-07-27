import React from "react";
import { Dropdown } from "semantic-ui-react";

const DropdownExampleLabel = () => (
  <Dropdown
    scrolling
    text="Categories"
    floating
    labeled
    button
    className="icon"
  >
    <Dropdown.Menu>
      <Dropdown.Header icon="tags" content="Wood Working" />
      <Dropdown.Divider />
      <Dropdown.Item text="Bowls" />
      <Dropdown.Item text="Toys" />
      <Dropdown.Item text="Utensils" />
      <Dropdown.Header icon="tags" content="Jewelery" />
      <Dropdown.Divider />
      <Dropdown.Item text="Bracelet" />
      <Dropdown.Item text="Necklace" />
      <Dropdown.Item text="Ring" />
      <Dropdown.Header icon="tags" content="Fashion and Fabric" />
      <Dropdown.Divider />
      <Dropdown.Item text="Clothing" />
      <Dropdown.Item text="Blankets" />
      <Dropdown.Item text="Hats" />
      <Dropdown.Header icon="tags" content="Candles" />
      <Dropdown.Divider />
      <Dropdown.Item text="Lavender" />
      <Dropdown.Item text="Bee wax" />
      <Dropdown.Item text="Soy" />
    </Dropdown.Menu>
  </Dropdown>
);

export default DropdownExampleLabel;
