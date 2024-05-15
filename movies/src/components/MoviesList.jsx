import Movie from "./Movie";

const MoviesList = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </>
  );
};

export default MoviesList;
