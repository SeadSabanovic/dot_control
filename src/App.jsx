import "./App.scss";
import MovieDetails from "./components/MovieDetails";
import Header from "./components/UI/Header";
import MovieOverview from "./components/movie-overview/MovieOverview";

function App() {
  return (
    <>
      <Header />
      <MovieDetails />
      <MovieOverview />
    </>
  );
}

export default App;
