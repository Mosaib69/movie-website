import styles from "./Navbar.module.css";
import img from "../myImages/film-reel.png";
import { useRef } from "react";

const SearchInput = ({ setSearch }) => {
  const searchTextElement = useRef();
  const handleSearch = (event) => {
    event.preventDefault();
    const searchText = searchTextElement.current.value;
    searchTextElement.current.value = "";
    setSearch(searchText);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img className={styles.movieLogo} src={img} alt="Movie logo" />
        <h1>
          <span>M</span>OVIES<span>U</span>NIVERSE
        </h1>
      </div>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="What are you looking for?"
          ref={searchTextElement}
        />
        <button className={styles.buttons} onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
