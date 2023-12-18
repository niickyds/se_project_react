import "./Header.css";
import avatarImage from "../../images/Avatar.svg";
import logo from "../../images/Logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

const Header = ({ onCreateModal }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="header__date">Date</div>
      </div>
      <div className="header__avater_logo">
        <ToggleSwitch />
        <div>
          <button
            type="text"
            onClick={onCreateModal}
            className="header__clothes-btn"
          >
            + Add Clothes
          </button>
        </div>
        <Link to="/profile" className="header__avatar_name">
          Terrence Tegegne
        </Link>
        <div>
          <img src={avatarImage} alt="Avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
