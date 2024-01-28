export default function Rating() {
  // Random Number from 3.0 to 10
  const randomRating = (Math.random() * 7 + 3).toFixed(1);
  const tenStarRating = Math.round(randomRating);
  const fiveStarRating = Math.round(tenStarRating * 0.5).toFixed(1);
  const heartClass = "rating__hearts__heart";

  return (
    <div className="rating">
      <div className="rating__hearts">
        {Array.from({ length: 5 }, (_, index) => (
          <svg
            key={index}
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${heartClass} ${
              fiveStarRating >= index + 1 ? heartClass + "--fill" : ""
            }`}
            preserveAspectRatio="none"
          >
            <path
              className={`${heartClass}__inner`}
              d="M10 18.35L8.55 17.03C3.4 12.36 0 9.27 0 5.5C0 2.41 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.08C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.41 20 5.5C20 9.27 16.6 12.36 11.45 17.03L10 18.35Z"
              fill="black"
            />
          </svg>
        ))}
      </div>
      <span className="rating__value">{randomRating}/10</span>
    </div>
  );
}
