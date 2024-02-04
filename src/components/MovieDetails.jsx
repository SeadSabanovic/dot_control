import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Button from "./UI/Button";
import imdb from "../assets/icons/imdb.svg";
import gsap from "gsap";

export default function MovieDetails() {
  const selectedMovie = useSelector((state) => state.movie.selectedMovie);
  const imageEl = useRef(null);

  useEffect(() => {
    gsap.set(imageEl.current, { autoAlpha: 0, scale: 1.05 });
  });

  const onImageLoaded = () => {
    gsap.to(imageEl.current, { autoAlpha: 1, scale: 1, duration: 0.4 });
  };

  return (
    <div className="movie-details">
      <div className="movie-details__bg">
        {/* 
        Added key to force rerender 
        for each image since I'm reusing 
        the same source for fallback images 
        */}
        <img
          key={Date.now()}
          ref={imageEl}
          className="movie-details__bg__img"
          src={selectedMovie.poster}
          onLoad={() => onImageLoaded()}
        />
      </div>
      <div className="movie-details__inner">
        <h2 className="movie-details__title h1">{selectedMovie.title}</h2>
        {selectedMovie.description !== "N/A" && (
          <p className="movie-details__description">
            {selectedMovie.description}
          </p>
        )}

        {selectedMovie.imdbID && (
          <Button href={`https://www.imdb.com/title/${selectedMovie.imdbID}`}>
            More information <img src={imdb} alt="IMDb logo" />
          </Button>
        )}
      </div>
    </div>
  );
}
