import styles from "./Navbar.module.css";
import img from "../images/film-reel.png";

const SearchInput = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img className={styles.movieLogo} src={img} alt="Movie logo" />
        <h1>
          <span>M</span>OVIES<span>U</span>NIVERSE
        </h1>
      </div>
      <div className={styles.search}>
        <input type="text" placeholder="What are you looking for?" />
        <button className="">Search</button>
      </div>
    </div>
  );
};

export default SearchInput;
