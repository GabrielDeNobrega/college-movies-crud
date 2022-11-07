export type MovieList = {
  movies: Array<Movie>;
};

export type Movie = {
  id: number;
  name: string;
  genre: string;
  release: number;
};
