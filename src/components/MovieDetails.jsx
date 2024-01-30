import Button from "./UI/Button";

export default function MovieDetails() {
  return (
    <div className="movie-details">
      <div className="movie-details__bg">
        <img
          loading="lazy"
          className="movie-details__bg__img"
          loading="lazy"
          src="https://images.pexels.com/photos/7991436/pexels-photo-7991436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
      <div className="movie-details__inner">
        <h2 className="movie-details__title h1">Dot Control</h2>
        <p className="movie-details__description">
          Realizing a positive futurefor people, brands and organizations
        </p>
        <Button>More information</Button>
      </div>
    </div>
  );
}
