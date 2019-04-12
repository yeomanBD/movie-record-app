import React, { Component } from "react";
import "./App.css";
import MovieRecord from "./components/MovieRecords";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieRecord />
      </div>
    );
  }
}

export default App;
