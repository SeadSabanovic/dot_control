import { useRef } from "react";
import Rating from "./Rating";

export default function MovieOverviewCard({ data }) {
  const imageEl = useRef(null);
  const onImageLoaded = () => {
    const loadedClass = "movie-overview__cards__card__img__el--loaded";
    imageEl.current.classList.add(loadedClass);
    console.log(imageEl.current);
  };
  return (
    <div className="movie-overview__cards__card">
      <div className="movie-overview__cards__card__img">
        {data.Poster && (
          <img
            className="movie-overview__cards__card__img__el"
            ref={imageEl}
            onLoad={() => onImageLoaded()}
            src={data.Poster}
            alt={data.Title + " Poster"}
          />
        )}
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
