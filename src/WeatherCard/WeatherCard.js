import "./WeatherCard.css";

const weatherOptions = [
  {
    url: require("../Images/Weather/Day/Sunny.svg").default,
    day: true,
    type: "sunny",
  },
  {
    url: require("../Images/Weather/Day/Cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  {
    url: require("../Images/Weather/Day/Fog.svg").default,
    day: true,
    type: "fog",
  },
  {
    url: require("../Images/Weather/Day/Rain.svg").default,
    day: true,
    type: "rain",
  },
  {
    url: require("../Images/Weather/Day/Snow.svg").default,
    day: true,
    type: "snow",
  },
  {
    url: require("../Images/Weather/Day/Storm.svg").default,
    day: true,
    type: "storm",
  },
  {
    url: require("../Images/Weather/Night/Moon.svg").default,
    day: false,
    type: "moon",
  },
  {
    url: require("../Images/Weather/Night/Cloudy.svg").default,
    day: false,
    type: "cloudy",
  },
  {
    url: require("../Images/Weather/Night/Fog.svg").default,
    day: false,
    type: "fog",
  },
  {
    url: require("../Images/Weather/Night/Rain.svg").default,
    day: false,
    type: "rain",
  },
  {
    url: require("../Images/Weather/Night/Snow.svg").default,
    day: false,
    type: "snow",
  },
  {
    url: require("../Images/Weather/Night/Storm.svg").default,
    day: false,
    type: "storm",
  },
];

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <section className="weather" id="weather">
      <div className="weather_info">{weatherTemp}</div>
      <img src={imageSrcUrl} alt="" className="weather_image" />
    </section>
  );
};

export default WeatherCard;
