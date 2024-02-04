export default function Button({
  children,
  href = null,
  target = "_blank",
  rel = "noopener noreferrer",
}) {
  if (href) {
    return (
      <a href={href} target={target} rel={rel} className="button button--link">
        {children}
      </a>
    );
  }
  return <button className="button">{children}</button>;
}
