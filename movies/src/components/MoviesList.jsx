import Movie from "./Movie";

const MoviesList = ({ movies }) => {
  return (
    <>
      {movies.map(
        (movie) =>
          movie.poster_path !== null && <Movie key={movie.id} movie={movie} />
      )}
    </>
  );
};

export default MoviesList;
