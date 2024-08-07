import "../blocks/Header.css";
import ellipse18 from "../images/Ellipse 18.png";
import logo from "../images/Logo.svg";
function Header() {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="Logo" />
      <p className="header__date-location">DATE LOCATION</p>
      <button className="header__add-clothes-btn">+ Add clothes</button>
      <div className="header__user-container">
        <p className="header__user-name">name</p>
        <img
          src={ellipse18}
          alt="User Avatar"
          className="header__user-avatar"
        />
      </div>
    </header>
  );
}

export default Header;
