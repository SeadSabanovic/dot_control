import { useEffect, useRef } from "react";
import loadIcon from "../../assets/icons/load.png";
import gsap from "gsap";
export default function LoadMoreButton({ onClick, loading = false }) {
  const text = "Load more";
  const icon = useRef(null);

  useEffect(() => {
    const iconEl = icon.current;
    if (loading) {
      const tl = gsap.timeline({ repeat: -1, ease: "none" });
      tl.to(iconEl, { rotate: 360, duration: 2 });
      return () => {
        tl.kill();
      };
    }

    gsap.set(iconEl, { rotation: 0 });
  }, [loading]);
  return (
    <button className="load-more-btn" onClick={onClick}>
      <img ref={icon} src={loadIcon} alt="load more icon" />
      {text}
    </button>
  );
}
