import logo from "../../assets/images/dot-logo.svg";
export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <img src={logo} alt="Dot Control Logo" className="header__logo" />
      </div>
    </header>
  );
}
