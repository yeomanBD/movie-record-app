import React, { Component } from "react";

class TableHeader extends Component {
  render() {
    const { headers } = this.props;
    return (
      <thead>
        <tr>
          {headers.map(col => (
            <th key={col.marker} scope="col">
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
