import React, { Component } from "react";
import THeader from "./THeader";
import TBody from "./TBody";
import Pagination from "./Pagination";

class MovieTable extends Component {
  render() {
    const { onDelete, movies, totalItems, pageSize } = this.props;
    return (
      <table className="table">
        <THeader />
        <TBody onDelete={onDelete} data={movies} onLiked={this.props.onLiked} />
        <Pagination totalItems={totalItems} pageSize={pageSize} />
      </table>
    );
  }
}

export default MovieTable;
