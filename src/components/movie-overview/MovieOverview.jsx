import LoadMore from "../UI/LoadMore";
import MovieOverviewCard from "./MovieOverviewCard";

export default function MovieOverview() {
  return (
    <div className="movie-overview">
      <div role="list" className="movie-overview__cards">
        <MovieOverviewCard />
        <MovieOverviewCard />
        <MovieOverviewCard />
      </div>
      <LoadMore />
    </div>
  );
}
