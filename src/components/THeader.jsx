import React, { Component } from "react";

class THeader extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Name</th>
          <th scope="col">Stock</th>
          <th scope="col">Rate</th>
          <th scope="col" />
          <th scope="col" />
        </tr>
      </thead>
    );
  }
}

export default THeader;
