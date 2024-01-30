import Rating from "./Rating";

export default function MovieOverviewCard({ data }) {
  console.log(data);
  return (
    <div className="movie-overview__cards__card">
      <div className="movie-overview__cards__card__img">
        <img src={data.Poster} alt={data.Title + " Poster"} />
      </div>
      <div className="movie-overview__cards__card__inner">
        <h3 className="movie-overview__cards__card__title h3">{data.Title}</h3>
        <span className="movie-overview__cards__card__tags">
          Action, Adventure, Sci-Fi
        </span>
        <Rating></Rating>
      </div>
    </div>
  );
}
