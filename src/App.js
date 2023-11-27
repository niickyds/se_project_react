// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <section className="weather" id="weather">
          <div className="weather_info">75F</div>
          <img
            src="/Images/Weather/Day/Sunny.svg"
            alt="Sunny Weather"
            className="weather_image"
          />
        </section>
        <section id="card-section">card section</section>
      </main>
      <footer></footer>
      {/* <modalWithForm /> */}
      {/* <ItemModal /> */}
    </div>
  );
}

export default App;
