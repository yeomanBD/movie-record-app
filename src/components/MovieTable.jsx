import React, { Component } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

class MovieTable extends Component {
  headers = [
    { marker: "title", label: "Title" },
    { marker: "genre", label: "Genre" },
    { marker: "stock", label: "Stock" },
    { marker: "rate", label: "Rate" }
  ];

  render() {
    return (
      <table className="table">
        <TableHeader headers={this.headers} />
        <TableBody data={this.props.movies} headers={this.headers} />
      </table>
    );
  }
}

export default MovieTable;
