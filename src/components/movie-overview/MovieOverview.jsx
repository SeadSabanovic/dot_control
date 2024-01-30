import { useEffect, useState } from "react";
import LoadMore from "../UI/LoadMore";
import MovieOverviewCard from "./MovieOverviewCard";

export default function MovieOverview() {
  const movieTitle = "superhero";
  const [movies, setMovies] = useState([]);

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
        setMovies(data.Search);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };
    fetchMovieData();
  }, []);
  return (
    <div className="movie-overview">
      <div role="list" className="movie-overview__cards">
        {movies.map((movie, index) => {
          return <MovieOverviewCard data={movie} key={index} />;
        })}
      </div>
      <LoadMore />
    </div>
  );
}
