const movies = [
  {
    id: "1",
    title: "Terminator",
    genre: { id: "1", name: "Action" },
    stock: 6,
    rate: 2.5,
    liked: true
  },
  {
    id: "2",
    title: "Die Hard",
    genre: { id: "2", name: "Action" },
    stock: 5,
    rate: 2.5,
    liked: true
  },
  {
    id: "3",
    title: "Get Out",
    genre: { id: "3", name: "Thriller" },
    stock: 8,
    rate: 3.5,
    liked: false
  },
  {
    id: "4",
    title: "Trip to Italy",
    genre: { id: "4", name: "Comedy" },
    stock: 7,
    rate: 3.5,
    liked: true
  },
  {
    id: "5",
    title: "Airplane",
    genre: { id: "5", name: "Comedy" },
    stock: 7,
    rate: 3.5,
    liked: true
  },
  {
    id: "6",
    title: "Wedding Crashers",
    genre: { id: "6", name: "Comedy" },
    stock: 7,
    rate: 3.5,
    liked: true
  },
  {
    id: "7",
    title: "Gone Girl",
    genre: { id: "7", name: "Thriller" },
    stock: 7,
    rate: 4.5,
    liked: true
  },
  {
    id: "8",
    title: "The Sixth Sense",
    genre: { id: "8", name: "Thriller" },
    stock: 4,
    rate: 3.5,
    liked: true
  },
  {
    id: "9",
    title: "The Avengers",
    genre: { id: "9", name: "Action" },
    stock: 7,
    rate: 3.5,
    liked: true
  }
];

export function getMovies() {
  return movies;
}

export function saveMovie(movie) {
  let lastMovie = movies[movies.length - 1];

  movie.id = parseInt(lastMovie.id) + 1 + "";
  movie.genre = { id: movie.id, name: movie.genreName };

  movies.push(movie);
}

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m.id === id);
  console.log(movieInDb);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb.id;
}
