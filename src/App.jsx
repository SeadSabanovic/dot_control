import "./App.scss";
import MovieDetails from "./components/MovieDetails";
import Rating from "./components/Rating";
import Header from "./components/UI/Header";

function App() {
  return (
    <>
      <Header />
      <MovieDetails />
      <Rating />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur,
        odio.
      </p>
    </>
  );
}

export default App;
