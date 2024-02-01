import { useEffect, useState } from "react";
import LoadMore from "../UI/LoadMoreButton";
import MovieOverviewCard from "./MovieOverviewCard";

export default function MovieOverview() {
  const movieTitle = "superhero";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const apiUrl = `${
          import.meta.env.VITE_API_BASE_URL
        }?s=${movieTitle}&type=movie&apikey=${import.meta.env.VITE_API_KEY}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        // Fetch additional details for each movie using IMDb ID
        const movieDetailsPromises = data.Search.map(async (movie) => {
          const detailsUrl = `${import.meta.env.VITE_API_BASE_URL}?i=${
            movie.imdbID
          }&apikey=${import.meta.env.VITE_API_KEY}`;
          const detailsResponse = await fetch(detailsUrl);
          if (!detailsResponse.ok) {
            throw new Error("Error fetching movie details");
          }
          const detailsData = await detailsResponse.json();
          return detailsData;
        });

        const movieDetails = await Promise.all(movieDetailsPromises);
        setMovies(movieDetails);
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
