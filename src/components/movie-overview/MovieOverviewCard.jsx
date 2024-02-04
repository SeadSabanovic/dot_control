import { useRef } from "react";
import Rating from "./Rating";
import fallbackImg from "../../assets/images/cinema.webp";

export default function MovieOverviewCard({ movie, onSelectMovie }) {
  const imageEl = useRef(null);

  const onImageLoaded = () => {
    const loadedClass = "movie-overview__cards__card__img__el--loaded";
    imageEl.current.classList.add(loadedClass);
  };

  const returnPoster = () => {
    return movie.Poster !== "N/A" ? movie.Poster : fallbackImg;
  };

  return (
    <div
      className="movie-overview__cards__card"
      onClick={() =>
        onSelectMovie({
          title: movie.Title,
          poster: returnPoster(),
          description: movie.Plot,
          imdbID: movie.imdbID,
        })
      }
    >
      <div className="movie-overview__cards__card__img">
        {movie.Poster && (
          <img
            className="movie-overview__cards__card__img__el"
            ref={imageEl}
            onLoad={() => onImageLoaded()}
            src={returnPoster()}
            alt={movie.Title + " Poster"}
          />
        )}
      </div>
      <div className="movie-overview__cards__card__inner">
        <h3 className="movie-overview__cards__card__title h3">{movie.Title}</h3>
        {movie.Genre !== "N/A" && (
          <span className="movie-overview__cards__card__tags">
            {movie.Genre}
          </span>
        )}

        {movie.imdbRating !== "N/A" && (
          <Rating score={movie.imdbRating}></Rating>
        )}
      </div>
    </div>
  );
}
