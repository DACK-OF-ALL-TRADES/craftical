import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";

const options = [
  { key: 1, text: "In progress", value: 1 },
  { key: 2, text: "Completed", value: 2 },
  { key: 3, text: "Future idea", value: 3 },
];

export default class StatusDropdown extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;

    return (
      <Dropdown
        onChange={this.handleChange}
        options={options}
        placeholder="Choose a status"
        selection
        value={value}
      />
    );
  }
}
