import React, { Component } from "react";
import MovieTable from "./MovieTable";
import { getMovies } from "../data/moviesData";
import ListGroup from "./ListGroup";

class MovieRecord extends Component {
  state = {
    movies: [],
    genres: []
  };

  componentDidMount() {
    const movies = getMovies();
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
          <MovieTable movies={this.state.movies} />
        </div>
      </div>
    );
  }
}

export default MovieRecord;
