import "./Header.css";

const Header = () => {
  console.log("header");

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src="/images/logo.svg" alt="Logo" />
        </div>
        <div>Date</div>
      </div>
      <div className="header__avater-logo">
        <div>
          <button type="text">Add New Clothes</button>
        </div>
        <div>Name</div>
        <div>
          <img src="/images/Avatar.svg" alt="Avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
