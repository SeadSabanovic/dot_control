import { useSelector } from "react-redux";
import Button from "./UI/Button";
import imdb from "../assets/icons/imdb.svg";

export default function MovieDetails() {
  const selectedMovie = useSelector((state) => state.movie.selectedMovie);
  console.log(selectedMovie);
  return (
    <div className="movie-details">
      <div className="movie-details__bg">
        <img
          loading="lazy"
          className="movie-details__bg__img"
          src={selectedMovie.poster}
        />
      </div>
      <div className="movie-details__inner">
        <h2 className="movie-details__title h1">{selectedMovie.title}</h2>
        <p className="movie-details__description">
          {selectedMovie.description}
        </p>
        <Button>
          More information
          <img src={imdb} alt="IMDb logo" />
        </Button>
        {selectedMovie.imdbID && <Button>More information</Button>}
      </div>
    </div>
  );
}
