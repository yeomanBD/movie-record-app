import React, { Component } from "react";
import "./App.css";
import MovieRecord from "./components/MovieRecords";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MovieRecord />
      </React.Fragment>
    );
  }
}

export default App;
