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
    rate: 2.5
  },
  {
    id: "3",
    title: "Get Out",
    genre: { id: "3", name: "Thriller" },
    stock: 8,
    rate: 3.5
  },
  {
    id: "4",
    title: "Trip to Italy",
    genre: { id: "4", name: "Comedy" },
    stock: 7,
    rate: 3.5
  },
  {
    id: "5",
    title: "Airplane",
    genre: { id: "5", name: "Comedy" },
    stock: 7,
    rate: 3.5
  },
  {
    id: "6",
    title: "Wedding Crashers",
    genre: { id: "6", name: "Comedy" },
    stock: 7,
    rate: 3.5
  },
  {
    id: "7",
    title: "Gone Girl",
    genre: { id: "7", name: "Thriller" },
    stock: 7,
    rate: 4.5
  },
  {
    id: "8",
    title: "The Sixth Sense",
    genre: { id: "8", name: "Thriller" },
    stock: 4,
    rate: 3.5
  },
  {
    id: "9",
    title: "The Avengers",
    genre: { id: "9", name: "Action" },
    stock: 7,
    rate: 3.5
  }
];

export function getMovies() {
  return movies;
}
