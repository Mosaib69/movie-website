import { useEffect, useState } from "react";
import "./App.css";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import MoviesList from "./components/MoviesList";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://dummyapi.online/api/movies");
    const data = await response.json();
    setMovies([...data]);
  };
  console.log(movies);

  return (
    <>
      <Navbar />
      <Container>
        <MoviesList movies={movies} />
      </Container>
    </>
  );
};

export default App;
