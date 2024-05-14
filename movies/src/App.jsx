import "./App.css";
import Container from "./components/Container";
import Movie from "./components/Movie";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </Container>
    </>
  );
};

export default App;
