import React, { Component } from "react";

class Like extends Component {
  render() {
    const { movie, onLiked } = this.props;
    const likedIndicator = movie.liked ? "" : "-o";
    console.log(likedIndicator);
    return (
      <i
        onClick={() => onLiked(movie)}
        className={"fa fa-heart" + likedIndicator}
        aria-hidden="true"
      />
    );
  }
}

export default Like;
