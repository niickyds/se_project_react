import "./Header.css";
import React from "react";
// import avatar from "../../images/Avatar.svg";
import logo from "../../images/Logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Header = ({
  onCreateModal,
  isLoggedIn,
  onRegisterModal,
  onLoginModal,
  location,
}) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="header__date">
          {currentDate}, {location}
        </div>
      </div>
      <div className="header__avater_logo">
        <ToggleSwitch />
        {isLoggedIn ? (
          <div className="header__add-clothes_avatar">
            <button
              type="text"
              onClick={onCreateModal}
              className="header__clothes-btn"
            >
              + Add Clothes
            </button>
            <NavLink to="/profile" className="header__user-link">
              <p className="header__user">{`${currentUser.name}`}</p>
            </NavLink>
            <img
              className="header__avatar"
              src={currentUser.avatar}
              alt="Avatar"
            ></img>
          </div>
        ) : (
          <div>
            <button
              className="header__register"
              type="text"
              onClick={onRegisterModal}
            >
              Sign Up
            </button>{" "}
            <button
              className="header__login"
              type="text"
              onClick={onLoginModal}
            >
              Log In
            </button>{" "}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
