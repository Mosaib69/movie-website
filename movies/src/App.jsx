import { useEffect, useState } from "react";
import "./App.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import MoviesList from "./components/MoviesList";
import Footer from "./components/Footer";
import ErrorMessage from "./components/ErrorMessage";
import Buttons from "./components/Buttons";

const App = () => {
  const url =
    "https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&page=";
  const search_api =
    "https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query=";

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  let [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo > 1) {
      setPageNo((pageNo -= 1));
    }
  };
  const handleNext = () => {
    setPageNo((pageNo += 1));
  };

  useEffect(() => {
    if (search === "") {
      getAllMovies();
    } else {
      getSearchMovies();
    }
  }, [search, pageNo]);

  const getAllMovies = async () => {
    const response = await fetch(url + pageNo);
    const data = await response.json();
    setMovies([...data.results]);
  };

  const getSearchMovies = async () => {
    const response = await fetch(search_api + search);
    const data = await response.json();
    setMovies([...data.results]);
  };

  return (
    <>
      <Navbar setSearch={setSearch} />
      <Container>
        {movies.length === 0 ? (
          <ErrorMessage />
        ) : (
          <MoviesList movies={movies} />
        )}
      </Container>
      {movies.length >= 20 && (
        <Buttons handlePrev={handlePrev} handleNext={handleNext} />
      )}
      <Footer />
    </>
  );
};

export default App;
