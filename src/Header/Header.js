import "./Header.css";

const Header = ({ onCreateModal }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require("../Images/Logo.svg").default} alt="Logo" />
        </div>
        <div className="header__date">Date</div>
      </div>
      <div className="header__avater_logo">
        <div>
          <button
            type="text"
            onClick={onCreateModal}
            className="header__clothes-btn"
          >
            + Add Clothes
          </button>
        </div>
        <div className="header__avatar_name">Terrence Tegegne</div>
        <div>
          <img src={require("../Images/Avatar.svg").default} alt="Avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
