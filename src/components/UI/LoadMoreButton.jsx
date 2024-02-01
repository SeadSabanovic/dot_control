import loadIcon from "../../assets/icons/load.png";
export default function LoadMoreButton({ onClick }) {
  const text = "Load more";
  return (
    <button className="load-more-btn" onClick={onClick}>
      <img src={loadIcon} alt="load more icon" />
      {text}
    </button>
  );
}
