import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require("../Images/Logo.svg").default} alt="Logo" />
        </div>
        <div>Date</div>
      </div>
      <div className="header__avater-logo">
        <div>
          <button type="text">Add New Clothes</button>
        </div>
        <div>Terrence Tegegne</div>
        <div>
          <img src={require("../Images/Avatar.svg").default} alt="Avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
