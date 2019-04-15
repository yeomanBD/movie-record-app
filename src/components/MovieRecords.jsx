import React, { Component } from "react";
import MovieTable from "./MovieTable";
import * as DBService from "../data/MoviesDB";
import ListGroup from "./ListGroup";

class MovieRecord extends Component {
  state = {
    movies: [],
    genres: []
  };

  componentDidMount() {
    const movies = DBService.getMovies();
    const genres = this.getGenre(movies);

    this.setState({ movies, genres });
  }

  getGenre = movies => {
    let setData = new Set();
    let listGenre = [{ id: 1, name: "All Genres" }];
    let index = 2;
    movies.forEach(element => {
      let genre = element.genre.name;
      if (!setData.has(genre)) {
        setData.add(genre);
        listGenre.push({ id: index, name: genre });
        index = index + 1;
      }
    });
    return listGenre;
  };

  handleGenreSelection = genre => {
    this.setState({ selectedItem: genre });
  };

  handleTotalMovies = () => {
    return this.state.movies.length;
  };

  handleDeleteMovie = movie => {
    const movies = this.state.movies.filter(item => item !== movie);
    this.setState({ movies });
    let deleteItemId = DBService.deleteMovie(movie.id);
    console.log(`Movie of Id : ${deleteItemId} is successfully deleted.`);
  };

  handleLikedMovie = movie => {
    const updatedMovies = this.state.movies.map(item => {
      if (item.id === movie.id) {
        if (item.liked !== null) {
          item.liked = item.liked ? false : true;
        } else {
          item.liked = true;
        }
      }
    });
    this.setState({ updatedMovies });
  };

  render() {
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedItem}
            onItemSelect={this.handleGenreSelection}
          />
        </div>
        <div className="col">
          <p>Showing {this.handleTotalMovies()} movies in the database.</p>
          <MovieTable
            movies={this.state.movies}
            onDelete={this.handleDeleteMovie}
            onLiked={this.handleLikedMovie}
          />
        </div>
      </div>
    );
  }
}

export default MovieRecord;
