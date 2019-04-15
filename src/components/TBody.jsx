import React, { Component } from "react";
import Like from "./Like";

class TBody extends Component {
  render() {
    console.log(this.props.data);
    const { onDelete } = this.props;
    return (
      <tbody>
        {this.props.data.map(movie => (
          <tr>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.stock}</td>
            <td>{movie.rate}</td>
            <td>
              <Like movie={movie} onLiked={this.props.onLiked} />
            </td>
            <td>
              <button
                onClick={() => onDelete(movie)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TBody;
