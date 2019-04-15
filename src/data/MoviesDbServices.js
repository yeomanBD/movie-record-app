import movies from "./MoviesDB";

var db = movies;

export function getMovies() {
  return movies;
}

function setMovies(changedData) {
  db = changedData;
}

export function deleteMovie(movie) {
  let deleteItem = db.findIndex(item => item === movie);
  console.log(`this : ${deleteItem}`);
  movies.splice(movies.indexOf(deleteItem), 1);
  return movies;
}
