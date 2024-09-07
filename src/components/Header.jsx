import { useState } from "react";
import "../blocks/Header.css";
import ellipse18 from "../images/Ellipse 18.png";
import logo from "../images/Logo.svg";

function Header({ onAddClothesClick }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header className="header">
      <div
        className={`header__content ${
          isMenuOpen ? "header__content--open" : ""
        }`}
      >
        <div className="header__full">
          <div className="header__unfull">
            <img src={logo} className="header__logo" alt="Logo" />
            <button
              className="header__menu-btn"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              &#9776; {/* Unicode for hamburger icon */}
            </button>
          </div>
          <p className="header__date-location">June 15, New York</p>
        </div>

        <div className="header__menu-content">
          <button
            className="header__add-clothes-btn"
            onClick={onAddClothesClick}
          >
            + Add clothes
          </button>
          <div className="header__user-container">
            <p className="header__user-name">name</p>
            <img
              src={ellipse18}
              alt="User Avatar"
              className="header__user-avatar"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
