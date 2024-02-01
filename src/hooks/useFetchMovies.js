import { useEffect, useState } from "react";

const useMovieData = (movieTitle, page) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        setLoading(true);
        const apiUrl = `${
          import.meta.env.VITE_API_BASE_URL
        }?s=${movieTitle}&type=movie&page=${page}&apikey=${
          import.meta.env.VITE_API_KEY
        }`;
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

        const newMovies = await Promise.all(movieDetailsPromises);

        // Concatenate the new movies with the existing ones
        setMovies((prevMovies) => [...prevMovies, ...newMovies]);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [movieTitle, page]);

  return { movies, loading, error };
};

export default useMovieData;
