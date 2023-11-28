import { defaultClothingItems } from "../utils/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import "./Main.css";

function Main({ weatherTemp }) {
  return (
    <main className="main">
      <WeatherCard day={true} type="sunny" weatherTemp={weatherTemp} />
      <section className="card_section" id="card-section">
        Today is {weatherTemp} / You may want to wear:
        <div className="card_items">
          {defaultClothingItems.map((data) => {
            return <ItemCard data={data} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default Main;
