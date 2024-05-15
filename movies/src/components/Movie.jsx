import styles from "./Movie.module.css";

const Movie = ({ movie }) => {
  let imageUrl = movie.image;
  return (
    <div className={styles.movieContainer}>
      <img className={styles.movieImage} src={`${imageUrl}`} alt="Image" />
      <div className={styles.movieContent}>
        <h3>{movie.movie}</h3>
        <p className={styles.rating}>Rating : {movie.rating}</p>
      </div>
    </div>
  );
};

export default Movie;
