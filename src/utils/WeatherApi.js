const latitude = 63.44;
const longitude = 8.55;
const APIkey = "2424b2da9118db1227f56d063624cceb";

export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(processServerResponse);
  return weatherApi;
};

const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

// then(processServerResponse);
// if (res.ok) {
//   return res.json();
// } else {
//   return Promise.reject(`Error: ${res.status}`);
// }

export const parseWeatherData = (data) => {
  const main = data.main;
  const temp = main && main.temp;
  return Math.ceil(temp);
};
