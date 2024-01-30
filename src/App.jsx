import { useEffect } from "react";
import "./App.scss";
import MovieDetails from "./components/MovieDetails";
import Header from "./components/UI/Header";
import MovieOverview from "./components/movie-overview/MovieOverview";

function App() {
  const movieTitle = "superhero";
  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const apiUrl = `${
          import.meta.env.VITE_API_BASE_URL
        }?s=${movieTitle}&apikey=${import.meta.env.VITE_API_KEY}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };
    fetchMovieData();
  });

  return (
    <>
      <Header />
      <MovieDetails />
      <MovieOverview />
    </>
  );
}

export default App;
