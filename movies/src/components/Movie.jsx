import styles from "./Movie.module.css";

const Movie = () => {
  return (
    <div className={styles.movieContainer}>
      <img
        className={styles.movieImage}
        src="https://themoviesverse.cc/wp-content/uploads/Madame-Web-1.jpg"
        alt=""
      />
      <div className={styles.movieContent}>
        <h3>The Shawshank Redemption</h3>
        <p className={styles.rating}>Rating : 9.2</p>
      </div>
    </div>
  );
};

export default Movie;
