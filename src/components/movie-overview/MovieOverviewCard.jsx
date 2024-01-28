import Rating from "./Rating";

export default function MovieOverviewCard() {
  return (
    <div className="movie-overview__cards__card">
      <div className="movie-overview__cards__card__img">
        <img
          src="https://images.pexels.com/photos/2925322/pexels-photo-2925322.jpeg"
          alt=""
        />
      </div>
      <div className="movie-overview__cards__card__inner">
        <h3 className="movie-overview__cards__card__title h3">Black Panther</h3>
        <span className="movie-overview__cards__card__tags">
          Action, Adventure, Sci-Fi
        </span>
        <Rating></Rating>
      </div>
    </div>
  );
}
