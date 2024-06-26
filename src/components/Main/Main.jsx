// import { defaultClothingItems } from "../../utils/constants";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import "./Main.css";

function Main({
  weatherTemp,
  onSelectCard,
  clothingItems,
  onCardLike,
  isLoggedIn,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;
  const getWeatherType = () => {
    if (currentTemperatureUnit === "F") {
      if (temp >= 86) {
        return "hot";
      } else if (temp >= 66 && temp <= 85) {
        return "warm";
      } else if (temp <= 65) {
        return "cold";
      }
    }

    if (currentTemperatureUnit === "C") {
      if (temp >= 30) {
        return "hot";
      } else if (temp >= 19 && temp <= 29) {
        return "warm";
      } else if (temp <= 18) {
        return "cold";
      }
    }
  };

  const weatherType = getWeatherType();

  const filteredCards = clothingItems.filter((item) => {
    return item.weather === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={true} type="cloudy" weatherTemp={temp} />
      <section className="card_section" id="card-section">
        Today is {temp}°{currentTemperatureUnit} / You may want to wear:
        <div className="card_items">
          {filteredCards.map((item) => {
            return (
              <ItemCard
                item={item}
                id={item._id}
                key={item._id}
                onSelectCard={onSelectCard}
                onCardLike={onCardLike}
                isLoggedIn={isLoggedIn}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Main;
