import React, { Component } from "react";
import THeader from "./THeader";
import TBody from "./TBody";

class MovieTable extends Component {
  render() {
    const { onDelete, movies } = this.props;
    return (
      <table className="table">
        <THeader />
        <TBody onDelete={onDelete} data={movies} onLiked={this.props.onLiked} />
      </table>
    );
  }
}

export default MovieTable;
