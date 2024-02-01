import { useState } from "react";
import LoadMore from "../UI/LoadMoreButton";
import MovieOverviewCard from "./MovieOverviewCard";
import useMovieData from "../../hooks/useFetchMovies";

export default function MovieOverview() {
  const keyword = "superhero";
  const [currentPage, setCurrentPage] = useState(1);
  const { movies, loading, error } = useMovieData(keyword, currentPage);

  const onLoadMore = () => {
    if (!loading) {
      console.log("test");
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  if (loading && !movies.length) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="movie-overview">
      <div role="list" className="movie-overview__cards">
        {movies.map((movie, index) => {
          return <MovieOverviewCard data={movie} key={index} />;
        })}
      </div>
      {loading}
      <LoadMore onClick={() => onLoadMore()} />
    </div>
  );
}
