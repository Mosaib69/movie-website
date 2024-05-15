import styles from "./Movie.module.css";

const Movie = ({ movie }) => {
  const imagePath = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className={styles.movieContainer}>
      <img
        className={styles.movieImage}
        src={imagePath + movie.poster_path}
        alt="Image"
      />
      <div className={styles.movieContent}>
        <h3>{movie.title}</h3>
        <p className={styles.rating}>
          Rating : {`${Math.round(movie.vote_average)}/10`}
        </p>
      </div>
    </div>
  );
};

export default Movie;
