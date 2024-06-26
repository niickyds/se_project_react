export const latitude = 56.94;
export const longitude = 24.09;
export const APIkey = "2424b2da9118db1227f56d063624cceb";

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    imageUrl:
      "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const weatherOptions = [
  {
    url: require("../images/Weather/Day/Sunny.svg").default,
    day: true,
    type: "sunny",
  },
  {
    url: require("../images/Weather/Day/Cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  {
    url: require("../images/Weather/Day/Fog.svg").default,
    day: true,
    type: "fog",
  },
  {
    url: require("../images/Weather/Day/Rain.svg").default,
    day: true,
    type: "rain",
  },
  {
    url: require("../images/Weather/Day/Snow.svg").default,
    day: true,
    type: "snow",
  },
  {
    url: require("../images/Weather/Day/Storm.svg").default,
    day: true,
    type: "storm",
  },
  {
    url: require("../images/Weather/Night/Moon.svg").default,
    day: false,
    type: "moon",
  },
  {
    url: require("../images/Weather/Night/Cloudy.svg").default,
    day: false,
    type: "cloudy",
  },
  {
    url: require("../images/Weather/Night/Fog.svg").default,
    day: false,
    type: "fog",
  },
  {
    url: require("../images/Weather/Night/Rain.svg").default,
    day: false,
    type: "rain",
  },
  {
    url: require("../images/Weather/Night/Snow.svg").default,
    day: false,
    type: "snow",
  },
  {
    url: require("../images/Weather/Night/Storm.svg").default,
    day: false,
    type: "storm",
  },
];
