// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
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
      <main></main>
      <footer></footer>
      {/* <modalWithForm /> */}
      {/* <ItemModal /> */}
    </div>
  );
}

export default App;
