import { JSONdata } from "./jsonDATA";
import rainIcon from "./image/icon/rain.svg";
import pressureIcon from "./image/icon/pressure.svg";
import humidityIcon from "./image/icon/humidity.svg";
import temperatureIcon from "./image/icon/temperature.svg";
import feelsLikeIcon from "./image/icon/feelslike.svg";
import windIcon from "./image/icon/wind.svg";

const conditionImg = document.querySelector(".conditionImg");
const conditionToday = document.querySelector(".conditionToday");
const tempToday = document.querySelector(".tempToday");
const tempImg = document.querySelector(".tempImg");
const feelsLikeToday = document.querySelector(".feelsLikeToday");
const feelsLikeImg = document.querySelector(".feelsLikeImg");
const windToday = document.querySelector(".windToday");
const windImg = document.querySelector(".windImg");
const humidityToday = document.querySelector(".humidityToday");
const humidityImg = document.querySelector(".humidityImg");
const pressureToday = document.querySelector(".pressureToday");
const pressureImg = document.querySelector(".pressureImg");

const city = document.querySelector(".city");
const country = document.querySelector(".country");
const time = document.querySelector(".time");

const tomorrowContainer = document.getElementById("tomorrow");
const followingDayContainer = document.getElementById("followingDay");
const inTwoDaysContainer = document.getElementById("inTwoDays");

const forecastContainers = [];
forecastContainers.push(
  tomorrowContainer,
  followingDayContainer,
  inTwoDaysContainer
);

const dayImages = importAll(require.context("./image/day", false, /\.(png)$/));

const nightImages = importAll(
  require.context("./image/night", false, /\.(png)$/)
);

function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

function formatIconElement(element, source) {
  element.classList.add("weatherIcon");
  element.src = source;
  return element;
}

function addConditionImage(weatherData) {
  const isDay = weatherData.isday ? true : false;
  const conditionCode = weatherData.condition.code;
  let weatherIconCode;

  JSONdata.find((weather) => {
    if (weather.code === conditionCode) {
      weatherIconCode = weather.icon;
      return;
    }
  });

  if (isDay) {
    conditionImg.src = dayImages[`${weatherIconCode}.png`];
  } else {
    conditionImg.src = nightImages[`${weatherIconCode}.png`];
  }
}

function fillParameterValues(weatherData) {
  conditionToday.textContent = weatherData.condition.text;
  feelsLikeToday.textContent = weatherData.feelsLike + " °C";
  pressureToday.textContent = weatherData.pressure + " bar";
  tempToday.textContent = weatherData.temperature + " °C";
  windToday.textContent = weatherData.wind + " km/h";
  humidityToday.textContent = weatherData.humidity + " %";
}

function addParameterIcons() {
  formatIconElement(feelsLikeImg, feelsLikeIcon);
  formatIconElement(pressureImg, pressureIcon);
  formatIconElement(windImg, windIcon);
  formatIconElement(tempImg, temperatureIcon);
  formatIconElement(humidityImg, humidityIcon);
}

const addForecastConditionImage = function (image, code) {
  let weatherIconCode;
  JSONdata.find((weather) => {
    if (weather.code === code) {
      weatherIconCode = weather.icon;
    }
    image.src = dayImages[`${weatherIconCode}.png`];
  });
};

const fillOutForecastData = function (
  temperature,
  rain,
  humidity,
  date,
  forecastData,
  id
) {
  temperature.textContent = forecastData.temperature + " °C";
  rain.textContent = forecastData.rainProbability + " %";
  humidity.textContent = forecastData.humidity + " %";

  const today = new Date();
  const tomorrow = new Date(today);
  const inTwoDays = new Date(today);
  const inThreeDays = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  inTwoDays.setDate(today.getDate() + 2);
  inThreeDays.setDate(today.getDate() + 3);

  if (id === "tomorrow") date.textContent = tomorrow.toDateString();
  else if (id === "followingDay") date.textContent = inTwoDays.toDateString();
  else if (id === "inTwoDays") date.textContent = inThreeDays.toDateString();
};

function appendContainerData(container, dailyForecast) {
  const conditionCode = dailyForecast.condition.code;
  const forecastDate = container.querySelector(".forecastDate");
  const weatherImg = container.querySelector(".forecastIcon");
  const temperatureForecastIcon = container.querySelector(
    "#forecastedTemperatureImg"
  );
  const rainForecastIcon = container.querySelector("#forecastedRainImg");
  const humidityForecastIcon = container.querySelector("#forecastedHumidity");
  const forecastedTemperature = container.querySelector(
    "p.forecastedTemperature"
  );
  const forecastedRain = container.querySelector("p.forecastedRain");
  const forecastedHumidity = container.querySelector("p.forecastedHumidity");

  formatIconElement(temperatureForecastIcon, temperatureIcon);
  formatIconElement(rainForecastIcon, rainIcon);
  formatIconElement(humidityForecastIcon, humidityIcon);
  addForecastConditionImage(weatherImg, conditionCode);
  fillOutForecastData(
    forecastedTemperature,
    forecastedRain,
    forecastedHumidity,
    forecastDate,
    dailyForecast,
    container.id
  );
}
export const updateWeather = function (weatherData) {
  addConditionImage(weatherData);
  fillParameterValues(weatherData);
  addParameterIcons();
};

export const updateForecast = function (weatherData) {
  console.log(weatherData);
  forecastContainers.forEach((container, index) =>
    appendContainerData(container, weatherData[index])
  );
};

export const updateLocation = function (locationData) {
  city.textContent = locationData.city;
  country.textContent = locationData.country;
  time.textContent = locationData.localTime;
};
