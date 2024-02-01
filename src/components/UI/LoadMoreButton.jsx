import loadIcon from "../../assets/icons/load.png";
export default function LoadMoreButton() {
  const text = "Load more";
  return (
    <button className="load-more-btn">
      <img src={loadIcon} alt="load more icon" />
      {text}
    </button>
  );
}
