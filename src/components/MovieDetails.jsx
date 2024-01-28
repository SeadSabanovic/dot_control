export default function MovieDetails() {
  return (
    <div className="movie-details">
      <div className="movie-details__bg">
        <img
          className="movie-details__bg__img"
          src="https://images.pexels.com/photos/2925322/pexels-photo-2925322.jpeg"
        />
      </div>
      <div className="movie-details__inner">
        <h2 className="movie-details__title h1">Black Panther</h2>
        <p className="movie-details__description">
          T'Challa, heir to the hidden but advanced kingdom of Wakanda, must
          step forward to lead his people into a new future and must confront a
          challenger from his country's past.
        </p>
      </div>
    </div>
  );
}
