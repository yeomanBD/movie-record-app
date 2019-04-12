import React, { Component } from "react";

class TableBody extends Component {
  renderCell = (movie, item) => {
    console.log(typeof item.marker);
    return item.marker;
  };

  render() {
    const { data, headers } = this.props;
    return (
      <tbody>
        {data.map(movie => (
          <tr>
            {headers.map(item => (
              <td>{this.renderCell(movie, item)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
