import { useState } from "react";
import LoadMore from "../UI/LoadMoreButton";
import MovieOverviewCard from "./MovieOverviewCard";
import useMovieData from "../../hooks/useFetchMovies";
import { useDispatch, useSelector } from "react-redux";
import { selectMovie } from "../../redux/features/movieSlice";
import SkeletonCard from "../UI/SkeletonCard";

export default function MovieOverview() {
  const keyword = "superhero";
  const [currentPage, setCurrentPage] = useState(1);
  const { movies, loading, error } = useMovieData(keyword, currentPage);
  const selectedMovie = useSelector((state) => state.movie.selectedMovie);
  const dispatch = useDispatch();

  const onLoadMore = () => {
    // Prevent Double Click
    if (!loading) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const onSelectMovie = (movie) => {
    // Don't update if movie already selected
    if (selectedMovie && selectedMovie.imdbID !== movie.imdbID)
      dispatch(selectMovie(movie));
    // Scroll to the top to show Selected Movie
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  if (loading && !movies.length) {
    return (
      <div className="movie-overview">
        <div role="list" className="movie-overview__cards">
          {Array.from({ length: 3 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <h4 style={{ color: "red" }}>Error: {error.message}</h4>;
  }

  return (
    <div className="movie-overview">
      <div role="list" className="movie-overview__cards">
        {movies.map((movie, index) => {
          return (
            <MovieOverviewCard
              movie={movie}
              key={index}
              onSelectMovie={onSelectMovie}
            />
          );
        })}
      </div>
      <LoadMore onClick={() => onLoadMore()} loading={loading} />
    </div>
  );
}
