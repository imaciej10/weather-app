/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateForecast: () => (/* binding */ updateForecast),
/* harmony export */   updateLocation: () => (/* binding */ updateLocation),
/* harmony export */   updateWeather: () => (/* binding */ updateWeather)
/* harmony export */ });
/* harmony import */ var _jsonDATA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsonDATA */ "./src/jsonDATA.js");
/* harmony import */ var _image_icon_rain_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image/icon/rain.svg */ "./src/image/icon/rain.svg");
/* harmony import */ var _image_icon_pressure_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image/icon/pressure.svg */ "./src/image/icon/pressure.svg");
/* harmony import */ var _image_icon_humidity_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image/icon/humidity.svg */ "./src/image/icon/humidity.svg");
/* harmony import */ var _image_icon_temperature_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image/icon/temperature.svg */ "./src/image/icon/temperature.svg");
/* harmony import */ var _image_icon_feelslike_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image/icon/feelslike.svg */ "./src/image/icon/feelslike.svg");
/* harmony import */ var _image_icon_wind_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image/icon/wind.svg */ "./src/image/icon/wind.svg");







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
forecastContainers.push(tomorrowContainer, followingDayContainer, inTwoDaysContainer);
const dayImages = importAll(__webpack_require__("./src/image/day sync \\.(png)$"));
const nightImages = importAll(__webpack_require__("./src/image/night sync \\.(png)$"));
function importAll(r) {
  let images = {};
  r.keys().map(function (item) {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const formatIconElement = function (element, source) {
  element.classList.add("weatherIcon");
  element.src = source;
  return element;
};
const addConditionImage = function (weatherData) {
  const isDay = weatherData.isday ? true : false;
  const conditionCode = weatherData.condition.code;
  let weatherIconCode;
  _jsonDATA__WEBPACK_IMPORTED_MODULE_0__.JSONdata.find(function (weather) {
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
};
const fillParameterValues = function (weatherData) {
  conditionToday.textContent = weatherData.condition.text;
  feelsLikeToday.textContent = weatherData.feelsLike + " °C";
  pressureToday.textContent = weatherData.pressure + " hPa";
  tempToday.textContent = weatherData.temperature + " °C";
  windToday.textContent = weatherData.wind + " km/h";
  humidityToday.textContent = weatherData.humidity + " %";
};
const addParameterIcons = function () {
  formatIconElement(feelsLikeImg, _image_icon_feelslike_svg__WEBPACK_IMPORTED_MODULE_5__);
  formatIconElement(pressureImg, _image_icon_pressure_svg__WEBPACK_IMPORTED_MODULE_2__);
  formatIconElement(windImg, _image_icon_wind_svg__WEBPACK_IMPORTED_MODULE_6__);
  formatIconElement(tempImg, _image_icon_temperature_svg__WEBPACK_IMPORTED_MODULE_4__);
  formatIconElement(humidityImg, _image_icon_humidity_svg__WEBPACK_IMPORTED_MODULE_3__);
};
const addForecastConditionImage = function (image, code) {
  let weatherIconCode;
  _jsonDATA__WEBPACK_IMPORTED_MODULE_0__.JSONdata.find(function (weather) {
    if (weather.code === code) {
      weatherIconCode = weather.icon;
    }
    image.src = dayImages[`${weatherIconCode}.png`];
  });
};
const fillOutForecastData = function (temperature, rain, humidity, date, forecastData, id) {
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
  if (id === "tomorrow") date.textContent = tomorrow.toDateString();else if (id === "followingDay") date.textContent = inTwoDays.toDateString();else if (id === "inTwoDays") date.textContent = inThreeDays.toDateString();
};
const appendContainerData = function (container, dailyForecast) {
  const conditionCode = dailyForecast.condition.code;
  const forecastDate = container.querySelector(".forecastDate");
  const weatherImg = container.querySelector(".forecastIcon");
  const temperatureForecastIcon = container.querySelector("#forecastedTemperatureImg");
  const rainForecastIcon = container.querySelector("#forecastedRainImg");
  const humidityForecastIcon = container.querySelector("#forecastedHumidity");
  const forecastedTemperature = container.querySelector("p.forecastedTemperature");
  const forecastedRain = container.querySelector("p.forecastedRain");
  const forecastedHumidity = container.querySelector("p.forecastedHumidity");
  formatIconElement(temperatureForecastIcon, _image_icon_temperature_svg__WEBPACK_IMPORTED_MODULE_4__);
  formatIconElement(rainForecastIcon, _image_icon_rain_svg__WEBPACK_IMPORTED_MODULE_1__);
  formatIconElement(humidityForecastIcon, _image_icon_humidity_svg__WEBPACK_IMPORTED_MODULE_3__);
  addForecastConditionImage(weatherImg, conditionCode);
  fillOutForecastData(forecastedTemperature, forecastedRain, forecastedHumidity, forecastDate, dailyForecast, container.id);
};
const updateWeather = function (weatherData) {
  addConditionImage(weatherData);
  fillParameterValues(weatherData);
  addParameterIcons();
};
const updateForecast = function (weatherData) {
  console.log(weatherData);
  forecastContainers.forEach(function (container, index) {
    return appendContainerData(container, weatherData[index]);
  });
};
const updateLocation = function (locationData) {
  city.textContent = locationData.city;
  country.textContent = locationData.country;
  time.textContent = locationData.localTime;
};

/***/ }),

/***/ "./src/jsonDATA.js":
/*!*************************!*\
  !*** ./src/jsonDATA.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JSONdata: () => (/* binding */ JSONdata)
/* harmony export */ });
const JSONdata = [{
  code: 1000,
  day: "Sunny",
  night: "Clear",
  icon: 113
}, {
  code: 1003,
  day: "Partly cloudy",
  night: "Partly cloudy",
  icon: 116
}, {
  code: 1006,
  day: "Cloudy",
  night: "Cloudy",
  icon: 119
}, {
  code: 1009,
  day: "Overcast",
  night: "Overcast",
  icon: 122
}, {
  code: 1030,
  day: "Mist",
  night: "Mist",
  icon: 143
}, {
  code: 1063,
  day: "Patchy rain possible",
  night: "Patchy rain possible",
  icon: 176
}, {
  code: 1066,
  day: "Patchy snow possible",
  night: "Patchy snow possible",
  icon: 179
}, {
  code: 1069,
  day: "Patchy sleet possible",
  night: "Patchy sleet possible",
  icon: 182
}, {
  code: 1072,
  day: "Patchy freezing drizzle possible",
  night: "Patchy freezing drizzle possible",
  icon: 185
}, {
  code: 1087,
  day: "Thundery outbreaks possible",
  night: "Thundery outbreaks possible",
  icon: 200
}, {
  code: 1114,
  day: "Blowing snow",
  night: "Blowing snow",
  icon: 227
}, {
  code: 1117,
  day: "Blizzard",
  night: "Blizzard",
  icon: 230
}, {
  code: 1135,
  day: "Fog",
  night: "Fog",
  icon: 248
}, {
  code: 1147,
  day: "Freezing fog",
  night: "Freezing fog",
  icon: 260
}, {
  code: 1150,
  day: "Patchy light drizzle",
  night: "Patchy light drizzle",
  icon: 263
}, {
  code: 1153,
  day: "Light drizzle",
  night: "Light drizzle",
  icon: 266
}, {
  code: 1168,
  day: "Freezing drizzle",
  night: "Freezing drizzle",
  icon: 281
}, {
  code: 1171,
  day: "Heavy freezing drizzle",
  night: "Heavy freezing drizzle",
  icon: 284
}, {
  code: 1180,
  day: "Patchy light rain",
  night: "Patchy light rain",
  icon: 293
}, {
  code: 1183,
  day: "Light rain",
  night: "Light rain",
  icon: 296
}, {
  code: 1186,
  day: "Moderate rain at times",
  night: "Moderate rain at times",
  icon: 299
}, {
  code: 1189,
  day: "Moderate rain",
  night: "Moderate rain",
  icon: 302
}, {
  code: 1192,
  day: "Heavy rain at times",
  night: "Heavy rain at times",
  icon: 305
}, {
  code: 1195,
  day: "Heavy rain",
  night: "Heavy rain",
  icon: 308
}, {
  code: 1198,
  day: "Light freezing rain",
  night: "Light freezing rain",
  icon: 311
}, {
  code: 1201,
  day: "Moderate or heavy freezing rain",
  night: "Moderate or heavy freezing rain",
  icon: 314
}, {
  code: 1204,
  day: "Light sleet",
  night: "Light sleet",
  icon: 317
}, {
  code: 1207,
  day: "Moderate or heavy sleet",
  night: "Moderate or heavy sleet",
  icon: 320
}, {
  code: 1210,
  day: "Patchy light snow",
  night: "Patchy light snow",
  icon: 323
}, {
  code: 1213,
  day: "Light snow",
  night: "Light snow",
  icon: 326
}, {
  code: 1216,
  day: "Patchy moderate snow",
  night: "Patchy moderate snow",
  icon: 329
}, {
  code: 1219,
  day: "Moderate snow",
  night: "Moderate snow",
  icon: 332
}, {
  code: 1222,
  day: "Patchy heavy snow",
  night: "Patchy heavy snow",
  icon: 335
}, {
  code: 1225,
  day: "Heavy snow",
  night: "Heavy snow",
  icon: 338
}, {
  code: 1237,
  day: "Ice pellets",
  night: "Ice pellets",
  icon: 350
}, {
  code: 1240,
  day: "Light rain shower",
  night: "Light rain shower",
  icon: 353
}, {
  code: 1243,
  day: "Moderate or heavy rain shower",
  night: "Moderate or heavy rain shower",
  icon: 356
}, {
  code: 1246,
  day: "Torrential rain shower",
  night: "Torrential rain shower",
  icon: 359
}, {
  code: 1249,
  day: "Light sleet showers",
  night: "Light sleet showers",
  icon: 362
}, {
  code: 1252,
  day: "Moderate or heavy sleet showers",
  night: "Moderate or heavy sleet showers",
  icon: 365
}, {
  code: 1255,
  day: "Light snow showers",
  night: "Light snow showers",
  icon: 368
}, {
  code: 1258,
  day: "Moderate or heavy snow showers",
  night: "Moderate or heavy snow showers",
  icon: 371
}, {
  code: 1261,
  day: "Light showers of ice pellets",
  night: "Light showers of ice pellets",
  icon: 374
}, {
  code: 1264,
  day: "Moderate or heavy showers of ice pellets",
  night: "Moderate or heavy showers of ice pellets",
  icon: 377
}, {
  code: 1273,
  day: "Patchy light rain with thunder",
  night: "Patchy light rain with thunder",
  icon: 386
}, {
  code: 1276,
  day: "Moderate or heavy rain with thunder",
  night: "Moderate or heavy rain with thunder",
  icon: 389
}, {
  code: 1279,
  day: "Patchy light snow with thunder",
  night: "Patchy light snow with thunder",
  icon: 392
}, {
  code: 1282,
  day: "Moderate or heavy snow with thunder",
  night: "Moderate or heavy snow with thunder",
  icon: 395
}];

/***/ }),

/***/ "./src/weatherAPI.js":
/*!***************************!*\
  !*** ./src/weatherAPI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchWeather: () => (/* binding */ fetchWeather)
/* harmony export */ });
const getWeatherData = function (data) {
  const weather = {
    condition: data.condition,
    temperature: data.temp_c,
    feelsLike: data.feelslike_c,
    wind: data.wind_mph,
    pressure: data.pressure_mb,
    humidity: data.humidity,
    isday: data.is_day
  };
  return weather;
};
const getForecastData = function (data) {
  const forecast = [];
  for (let i = 0; i < data.length; i++) {
    const selectedDay = data[i].day;
    const day = {
      condition: selectedDay.condition,
      temperature: selectedDay.avgtemp_c,
      humidity: selectedDay.avghumidity,
      rainProbability: selectedDay.daily_chance_of_rain
    };
    forecast.push(day);
  }
  return forecast;
};
const getLocationData = function (data) {
  const location = {
    country: data.country,
    localTime: data.localtime,
    city: data.name
  };
  return location;
};
const fetchWeather = async function (location) {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=2f8de12621774ad2bad70438242305&q=${location}&days=4`, {
      mode: "cors"
    });
    if (!response.ok) {
      alert("Something went wrong");
      throw new Error("Something went wrong" + response.statusText);
    }
    const data = await response.json();
    const currentWeather = getWeatherData(data.current);
    const forecastedWeather = getForecastData(data.forecast.forecastday);
    const locationData = getLocationData(data.location);
    return [currentWeather, forecastedWeather, locationData];
  } catch (error) {
    console.error("There was a problem", error);
    throw new Error(`Something went wrong, ${error.message} appeared`);
  }
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Manrope[wght].ttf */ "./src/fonts/Manrope[wght].ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: "MyFont";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
  font-weight: 400;
  font-style: normal;
}

:root {
  font-size: 16px;
  font-family: Charter, "Bitstream Charter", "Sitka Text", Cambria, serif;
  font-weight: normal;
  --nav-color: #79addc;
  --background-color: #ffee93;
  --forecast--color: #fcf5c7;
  --location--color: #f0a868;
  --footer--color: #f0a868;
  --header--color: #ffc09f;
  --accent-color: #e4ff1a;
}

button#check:hover,
button.openNav:hover {
  cursor: pointer;
}

.gitHubLogo:hover {
  transform: scale(1.1);
  cursor: pointer;
}

nav *:hover {
  color: red;
  cursor: pointer;
}

.weatherIcon,
.conditionImg,
.forecastIcon {
  user-select: none;
}
/* header */

nav {
  padding: 2rem 1rem;
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--nav-color);
}

.menuBtn {
  display: inline-block;
  width: 15ch;
  border: none;
  background: none;
  font-size: 2.5rem;
  color: var(--accent-color);
}

.menuBtn {
  transform: scale(0);
  transition: 200ms ease-in-out;
}
.menuBtn.active {
  transform: scale(1);
}

button.openMenu {
  margin-right: auto;
  width: 2ch;
}

.openMenu {
  width: 40px;
  height: auto;
  margin-left: 10px;
}
/* main */

body {
  margin: auto;
  width: 100vw;
  height: 100vh;
  background-color: var(--background-color);
}

.search {
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  height: 230px;
  padding: 2rem;
  background-color: var(--header--color);
  box-shadow: 0rem 0.1rem 0.7rem var(--header--color);
}

.weather {
  display: grid;
  padding: 2rem;
  grid-template: repeat(2, 1fr) / repeat(3, 1fr);
  gap: 1rem;
  background-color: var(--background-color);
  height: 85vh;
  width: 100vw;
}

.location {
  grid-area: 1 / 1 / 2 / 2;
  background-color: var(--location--color);
  color: var(--background-color);
  border-radius: 1rem;
}

#tomorrow {
  grid-area: 2 / 1 / 3 / 2;
}

#followingDay {
  grid-area: 2 / 2 / 3 / 3;
}

#inTwoDays {
  grid-area: 2 / 3 / 3 / 4;
}

/* today */

.today {
  grid-area: 1 / 2 / 2 / 3;
  background-color: var(--forecast--color);
  border-radius: 1rem;
  gap: 1.5rem;
  display: grid;
  grid-template: repeat(6, 1fr) / repeat(2, 1fr);
  padding: 1rem 2rem;
  align-items: start;
}

.conditionToday {
  font-size: 2.5rem;
  grid-row: 1-3;
  justify-self: start;
  align-self: center;
}
.weatherIcon {
  height: 70px;
  width: auto;
}

.date {
  grid-area: 1 / 1 / 2 / 2;
}

.conditionImg {
  grid-area: 1 / 2 / 2 / 3;
  justify-self: end;
  align-self: stretch;
}

.temperature {
  grid-area: 2 / 1 / 3 / 3;
}

.feelsLike {
  grid-area: 3 / 1 / 4 / 3;
}

.wind {
  grid-area: 4 / 1 / 5 / 3;
}

.humidity {
  grid-area: 5 / 1 / 6 / 3;
}

.pressure {
  grid-area: 6 / 1 / 7 / 3;
}

.temperature,
.feelsLike,
.wind,
.humidity,
.pressure {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

p {
  font-size: 1.7rem;
}

/* location */

.location {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.city {
  font-size: 3.5rem;
  font-weight: bold;
}

.country {
  font-size: 2.5rem;
}

.time {
  font-size: 2.2rem;
}

/* forecast */

.forecast {
  background-color: var(--forecast--color);
  padding: 2rem;
  border-radius: 1rem;
  display: grid;
  grid-template: repeat(4, 1fr) / repeat(3, 1fr);
  gap: 1rem;
  overflow: auto;
}

.today,
.forecast {
  border: 2px solid var(--footer--color);
}

.forecastDate {
  grid-area: 1/ 1/ 2/ 4;
  justify-self: center;
  font-size: 1.8rem;
}

.forecastIcon {
  grid-area: 2 / 1 / 3 / 4;
  justify-self: center;
}

.forecastedTemperature {
  grid-area: 3 / 1 / 5 / 2;
  object-fit: contain;
}

.forecastedRain {
  grid-area: 3 / 2 / 5 / 3;
}

.forecastedHumidity {
  grid-area: 3 / 3 / 5 / 4;
}

.forecastParamIcon {
  height: 40px;
  width: auto;
}

.forecastedHumidity,
.forecastedRain,
.forecastedTemperature {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
/* form */

.locationForm {
  display: flex;
  gap: 2rem;
  align-items: center;
  position: relative;
}

button#check {
  padding: 0.5rem 1.7rem;
  font-size: 2rem;
  font-weight: 600;
  border-radius: 0.9rem;
  outline: none;
  border: none;
  color: var(--footer--color);
  background-color: var(--background-color);
}

h1 {
  font-family: "MyFont", "Bitstream Charter", "Sitka Text", Cambria, serif;
  font-size: 3.4rem;
  letter-spacing: 0.3rem;
  text-transform: capitalize;
}

label {
  font-size: 2rem;
  letter-spacing: 0.3rem;
}

input {
  padding: 0.7rem 1.5rem;
  font-size: 1.5rem;
  border: none;
  outline: none;
  background-color: var(--forecast--color);
  border-radius: 0.5rem;
  color: black;
}

.error {
  position: absolute;
  top: 65px;
  left: 190px;
  color: red;
  font-size: 1.2rem;
}

input.valid {
  border: 2px green solid;
}

input.invalid {
  border: 2px red solid;
}

/* footer */

footer {
  background-color: var(--footer--color);
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  font-size: 2rem;
  padding: 1rem;
  gap: 10px;
  margin-bottom: 0;
  height: 7vh;
  letter-spacing: 0.1rem;
}

.gitHubLogo {
  height: 50px;
  width: auto;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-family: \"MyFont\";\n  src: url(\"./fonts/Manrope[wght].ttf\") format(\"truetype\");\n  font-weight: 400;\n  font-style: normal;\n}\n\n:root {\n  font-size: 16px;\n  font-family: Charter, \"Bitstream Charter\", \"Sitka Text\", Cambria, serif;\n  font-weight: normal;\n  --nav-color: #79addc;\n  --background-color: #ffee93;\n  --forecast--color: #fcf5c7;\n  --location--color: #f0a868;\n  --footer--color: #f0a868;\n  --header--color: #ffc09f;\n  --accent-color: #e4ff1a;\n}\n\nbutton#check:hover,\nbutton.openNav:hover {\n  cursor: pointer;\n}\n\n.gitHubLogo:hover {\n  transform: scale(1.1);\n  cursor: pointer;\n}\n\nnav *:hover {\n  color: red;\n  cursor: pointer;\n}\n\n.weatherIcon,\n.conditionImg,\n.forecastIcon {\n  user-select: none;\n}\n/* header */\n\nnav {\n  padding: 2rem 1rem;\n  width: 100vw;\n  height: 50px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  background-color: var(--nav-color);\n}\n\n.menuBtn {\n  display: inline-block;\n  width: 15ch;\n  border: none;\n  background: none;\n  font-size: 2.5rem;\n  color: var(--accent-color);\n}\n\n.menuBtn {\n  transform: scale(0);\n  transition: 200ms ease-in-out;\n}\n.menuBtn.active {\n  transform: scale(1);\n}\n\nbutton.openMenu {\n  margin-right: auto;\n  width: 2ch;\n}\n\n.openMenu {\n  width: 40px;\n  height: auto;\n  margin-left: 10px;\n}\n/* main */\n\nbody {\n  margin: auto;\n  width: 100vw;\n  height: 100vh;\n  background-color: var(--background-color);\n}\n\n.search {\n  margin-top: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2rem;\n  width: 100%;\n  height: 230px;\n  padding: 2rem;\n  background-color: var(--header--color);\n  box-shadow: 0rem 0.1rem 0.7rem var(--header--color);\n}\n\n.weather {\n  display: grid;\n  padding: 2rem;\n  grid-template: repeat(2, 1fr) / repeat(3, 1fr);\n  gap: 1rem;\n  background-color: var(--background-color);\n  height: 85vh;\n  width: 100vw;\n}\n\n.location {\n  grid-area: 1 / 1 / 2 / 2;\n  background-color: var(--location--color);\n  color: var(--background-color);\n  border-radius: 1rem;\n}\n\n#tomorrow {\n  grid-area: 2 / 1 / 3 / 2;\n}\n\n#followingDay {\n  grid-area: 2 / 2 / 3 / 3;\n}\n\n#inTwoDays {\n  grid-area: 2 / 3 / 3 / 4;\n}\n\n/* today */\n\n.today {\n  grid-area: 1 / 2 / 2 / 3;\n  background-color: var(--forecast--color);\n  border-radius: 1rem;\n  gap: 1.5rem;\n  display: grid;\n  grid-template: repeat(6, 1fr) / repeat(2, 1fr);\n  padding: 1rem 2rem;\n  align-items: start;\n}\n\n.conditionToday {\n  font-size: 2.5rem;\n  grid-row: 1-3;\n  justify-self: start;\n  align-self: center;\n}\n.weatherIcon {\n  height: 70px;\n  width: auto;\n}\n\n.date {\n  grid-area: 1 / 1 / 2 / 2;\n}\n\n.conditionImg {\n  grid-area: 1 / 2 / 2 / 3;\n  justify-self: end;\n  align-self: stretch;\n}\n\n.temperature {\n  grid-area: 2 / 1 / 3 / 3;\n}\n\n.feelsLike {\n  grid-area: 3 / 1 / 4 / 3;\n}\n\n.wind {\n  grid-area: 4 / 1 / 5 / 3;\n}\n\n.humidity {\n  grid-area: 5 / 1 / 6 / 3;\n}\n\n.pressure {\n  grid-area: 6 / 1 / 7 / 3;\n}\n\n.temperature,\n.feelsLike,\n.wind,\n.humidity,\n.pressure {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\np {\n  font-size: 1.7rem;\n}\n\n/* location */\n\n.location {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.city {\n  font-size: 3.5rem;\n  font-weight: bold;\n}\n\n.country {\n  font-size: 2.5rem;\n}\n\n.time {\n  font-size: 2.2rem;\n}\n\n/* forecast */\n\n.forecast {\n  background-color: var(--forecast--color);\n  padding: 2rem;\n  border-radius: 1rem;\n  display: grid;\n  grid-template: repeat(4, 1fr) / repeat(3, 1fr);\n  gap: 1rem;\n  overflow: auto;\n}\n\n.today,\n.forecast {\n  border: 2px solid var(--footer--color);\n}\n\n.forecastDate {\n  grid-area: 1/ 1/ 2/ 4;\n  justify-self: center;\n  font-size: 1.8rem;\n}\n\n.forecastIcon {\n  grid-area: 2 / 1 / 3 / 4;\n  justify-self: center;\n}\n\n.forecastedTemperature {\n  grid-area: 3 / 1 / 5 / 2;\n  object-fit: contain;\n}\n\n.forecastedRain {\n  grid-area: 3 / 2 / 5 / 3;\n}\n\n.forecastedHumidity {\n  grid-area: 3 / 3 / 5 / 4;\n}\n\n.forecastParamIcon {\n  height: 40px;\n  width: auto;\n}\n\n.forecastedHumidity,\n.forecastedRain,\n.forecastedTemperature {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n/* form */\n\n.locationForm {\n  display: flex;\n  gap: 2rem;\n  align-items: center;\n  position: relative;\n}\n\nbutton#check {\n  padding: 0.5rem 1.7rem;\n  font-size: 2rem;\n  font-weight: 600;\n  border-radius: 0.9rem;\n  outline: none;\n  border: none;\n  color: var(--footer--color);\n  background-color: var(--background-color);\n}\n\nh1 {\n  font-family: \"MyFont\", \"Bitstream Charter\", \"Sitka Text\", Cambria, serif;\n  font-size: 3.4rem;\n  letter-spacing: 0.3rem;\n  text-transform: capitalize;\n}\n\nlabel {\n  font-size: 2rem;\n  letter-spacing: 0.3rem;\n}\n\ninput {\n  padding: 0.7rem 1.5rem;\n  font-size: 1.5rem;\n  border: none;\n  outline: none;\n  background-color: var(--forecast--color);\n  border-radius: 0.5rem;\n  color: black;\n}\n\n.error {\n  position: absolute;\n  top: 65px;\n  left: 190px;\n  color: red;\n  font-size: 1.2rem;\n}\n\ninput.valid {\n  border: 2px green solid;\n}\n\ninput.invalid {\n  border: 2px red solid;\n}\n\n/* footer */\n\nfooter {\n  background-color: var(--footer--color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-items: center;\n  font-size: 2rem;\n  padding: 1rem;\n  gap: 10px;\n  margin-bottom: 0;\n  height: 7vh;\n  letter-spacing: 0.1rem;\n}\n\n.gitHubLogo {\n  height: 50px;\n  width: auto;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/image/day sync \\.(png)$":
/*!***************************************************!*\
  !*** ./src/image/day/ sync nonrecursive \.(png)$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./113.png": "./src/image/day/113.png",
	"./116.png": "./src/image/day/116.png",
	"./119.png": "./src/image/day/119.png",
	"./122.png": "./src/image/day/122.png",
	"./143.png": "./src/image/day/143.png",
	"./176.png": "./src/image/day/176.png",
	"./179.png": "./src/image/day/179.png",
	"./182.png": "./src/image/day/182.png",
	"./185.png": "./src/image/day/185.png",
	"./200.png": "./src/image/day/200.png",
	"./227.png": "./src/image/day/227.png",
	"./230.png": "./src/image/day/230.png",
	"./248.png": "./src/image/day/248.png",
	"./260.png": "./src/image/day/260.png",
	"./263.png": "./src/image/day/263.png",
	"./266.png": "./src/image/day/266.png",
	"./281.png": "./src/image/day/281.png",
	"./284.png": "./src/image/day/284.png",
	"./293.png": "./src/image/day/293.png",
	"./296.png": "./src/image/day/296.png",
	"./299.png": "./src/image/day/299.png",
	"./302.png": "./src/image/day/302.png",
	"./305.png": "./src/image/day/305.png",
	"./308.png": "./src/image/day/308.png",
	"./311.png": "./src/image/day/311.png",
	"./314.png": "./src/image/day/314.png",
	"./317.png": "./src/image/day/317.png",
	"./320.png": "./src/image/day/320.png",
	"./323.png": "./src/image/day/323.png",
	"./326.png": "./src/image/day/326.png",
	"./329.png": "./src/image/day/329.png",
	"./332.png": "./src/image/day/332.png",
	"./335.png": "./src/image/day/335.png",
	"./338.png": "./src/image/day/338.png",
	"./350.png": "./src/image/day/350.png",
	"./353.png": "./src/image/day/353.png",
	"./356.png": "./src/image/day/356.png",
	"./359.png": "./src/image/day/359.png",
	"./362.png": "./src/image/day/362.png",
	"./365.png": "./src/image/day/365.png",
	"./368.png": "./src/image/day/368.png",
	"./371.png": "./src/image/day/371.png",
	"./374.png": "./src/image/day/374.png",
	"./377.png": "./src/image/day/377.png",
	"./386.png": "./src/image/day/386.png",
	"./389.png": "./src/image/day/389.png",
	"./392.png": "./src/image/day/392.png",
	"./395.png": "./src/image/day/395.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/image/day sync \\.(png)$";

/***/ }),

/***/ "./src/image/night sync \\.(png)$":
/*!*****************************************************!*\
  !*** ./src/image/night/ sync nonrecursive \.(png)$ ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./113.png": "./src/image/night/113.png",
	"./116.png": "./src/image/night/116.png",
	"./119.png": "./src/image/night/119.png",
	"./122.png": "./src/image/night/122.png",
	"./143.png": "./src/image/night/143.png",
	"./176.png": "./src/image/night/176.png",
	"./179.png": "./src/image/night/179.png",
	"./182.png": "./src/image/night/182.png",
	"./185.png": "./src/image/night/185.png",
	"./200.png": "./src/image/night/200.png",
	"./227.png": "./src/image/night/227.png",
	"./230.png": "./src/image/night/230.png",
	"./248.png": "./src/image/night/248.png",
	"./260.png": "./src/image/night/260.png",
	"./263.png": "./src/image/night/263.png",
	"./266.png": "./src/image/night/266.png",
	"./281.png": "./src/image/night/281.png",
	"./284.png": "./src/image/night/284.png",
	"./293.png": "./src/image/night/293.png",
	"./296.png": "./src/image/night/296.png",
	"./299.png": "./src/image/night/299.png",
	"./302.png": "./src/image/night/302.png",
	"./305.png": "./src/image/night/305.png",
	"./308.png": "./src/image/night/308.png",
	"./311.png": "./src/image/night/311.png",
	"./314.png": "./src/image/night/314.png",
	"./317.png": "./src/image/night/317.png",
	"./320.png": "./src/image/night/320.png",
	"./323.png": "./src/image/night/323.png",
	"./326.png": "./src/image/night/326.png",
	"./329.png": "./src/image/night/329.png",
	"./332.png": "./src/image/night/332.png",
	"./335.png": "./src/image/night/335.png",
	"./338.png": "./src/image/night/338.png",
	"./350.png": "./src/image/night/350.png",
	"./353.png": "./src/image/night/353.png",
	"./356.png": "./src/image/night/356.png",
	"./359.png": "./src/image/night/359.png",
	"./362.png": "./src/image/night/362.png",
	"./365.png": "./src/image/night/365.png",
	"./368.png": "./src/image/night/368.png",
	"./371.png": "./src/image/night/371.png",
	"./374.png": "./src/image/night/374.png",
	"./377.png": "./src/image/night/377.png",
	"./386.png": "./src/image/night/386.png",
	"./389.png": "./src/image/night/389.png",
	"./392.png": "./src/image/night/392.png",
	"./395.png": "./src/image/night/395.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/image/night sync \\.(png)$";

/***/ }),

/***/ "./src/fonts/Manrope[wght].ttf":
/*!*************************************!*\
  !*** ./src/fonts/Manrope[wght].ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "432d367cb8138cde9b24.ttf";

/***/ }),

/***/ "./src/image/day/113.png":
/*!*******************************!*\
  !*** ./src/image/day/113.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "17608b0baa1391eb05a0.png";

/***/ }),

/***/ "./src/image/day/116.png":
/*!*******************************!*\
  !*** ./src/image/day/116.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8ea9e73debaf4c25a8cf.png";

/***/ }),

/***/ "./src/image/day/119.png":
/*!*******************************!*\
  !*** ./src/image/day/119.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e740cebbccd7be04d824.png";

/***/ }),

/***/ "./src/image/day/122.png":
/*!*******************************!*\
  !*** ./src/image/day/122.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "036a7f4b9402e1d74535.png";

/***/ }),

/***/ "./src/image/day/143.png":
/*!*******************************!*\
  !*** ./src/image/day/143.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a93c5cdce8f09616fc0e.png";

/***/ }),

/***/ "./src/image/day/176.png":
/*!*******************************!*\
  !*** ./src/image/day/176.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "307889846f4a6877a9ea.png";

/***/ }),

/***/ "./src/image/day/179.png":
/*!*******************************!*\
  !*** ./src/image/day/179.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ff6c626ccae29522a258.png";

/***/ }),

/***/ "./src/image/day/182.png":
/*!*******************************!*\
  !*** ./src/image/day/182.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6fe62e8748f042a1cbc4.png";

/***/ }),

/***/ "./src/image/day/185.png":
/*!*******************************!*\
  !*** ./src/image/day/185.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b29c7a91f5f0986860ea.png";

/***/ }),

/***/ "./src/image/day/200.png":
/*!*******************************!*\
  !*** ./src/image/day/200.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cc1054a285a2ec8fecca.png";

/***/ }),

/***/ "./src/image/day/227.png":
/*!*******************************!*\
  !*** ./src/image/day/227.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b129e818f96bfd5302e9.png";

/***/ }),

/***/ "./src/image/day/230.png":
/*!*******************************!*\
  !*** ./src/image/day/230.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b8b0bf9be35bccc67ed8.png";

/***/ }),

/***/ "./src/image/day/248.png":
/*!*******************************!*\
  !*** ./src/image/day/248.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b2a1d4434712ee44f9ba.png";

/***/ }),

/***/ "./src/image/day/260.png":
/*!*******************************!*\
  !*** ./src/image/day/260.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "83e24a5eb9c1903d153a.png";

/***/ }),

/***/ "./src/image/day/263.png":
/*!*******************************!*\
  !*** ./src/image/day/263.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9f768941645c662c7fad.png";

/***/ }),

/***/ "./src/image/day/266.png":
/*!*******************************!*\
  !*** ./src/image/day/266.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9f768941645c662c7fad.png";

/***/ }),

/***/ "./src/image/day/281.png":
/*!*******************************!*\
  !*** ./src/image/day/281.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b29c7a91f5f0986860ea.png";

/***/ }),

/***/ "./src/image/day/284.png":
/*!*******************************!*\
  !*** ./src/image/day/284.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "56ec9edb8b4e68fe86cd.png";

/***/ }),

/***/ "./src/image/day/293.png":
/*!*******************************!*\
  !*** ./src/image/day/293.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "307889846f4a6877a9ea.png";

/***/ }),

/***/ "./src/image/day/296.png":
/*!*******************************!*\
  !*** ./src/image/day/296.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "be8d48a6fb6962fa1edd.png";

/***/ }),

/***/ "./src/image/day/299.png":
/*!*******************************!*\
  !*** ./src/image/day/299.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "307889846f4a6877a9ea.png";

/***/ }),

/***/ "./src/image/day/302.png":
/*!*******************************!*\
  !*** ./src/image/day/302.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "be8d48a6fb6962fa1edd.png";

/***/ }),

/***/ "./src/image/day/305.png":
/*!*******************************!*\
  !*** ./src/image/day/305.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b79f79a47ff26675bbb6.png";

/***/ }),

/***/ "./src/image/day/308.png":
/*!*******************************!*\
  !*** ./src/image/day/308.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "abccde130cb90d6b8d28.png";

/***/ }),

/***/ "./src/image/day/311.png":
/*!*******************************!*\
  !*** ./src/image/day/311.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a856df694720212e414a.png";

/***/ }),

/***/ "./src/image/day/314.png":
/*!*******************************!*\
  !*** ./src/image/day/314.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a856df694720212e414a.png";

/***/ }),

/***/ "./src/image/day/317.png":
/*!*******************************!*\
  !*** ./src/image/day/317.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "21cb978b0b5bc99863da.png";

/***/ }),

/***/ "./src/image/day/320.png":
/*!*******************************!*\
  !*** ./src/image/day/320.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "21cb978b0b5bc99863da.png";

/***/ }),

/***/ "./src/image/day/323.png":
/*!*******************************!*\
  !*** ./src/image/day/323.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ff6c626ccae29522a258.png";

/***/ }),

/***/ "./src/image/day/326.png":
/*!*******************************!*\
  !*** ./src/image/day/326.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "997f80887a654d8e2bd8.png";

/***/ }),

/***/ "./src/image/day/329.png":
/*!*******************************!*\
  !*** ./src/image/day/329.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ff6c626ccae29522a258.png";

/***/ }),

/***/ "./src/image/day/332.png":
/*!*******************************!*\
  !*** ./src/image/day/332.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "997f80887a654d8e2bd8.png";

/***/ }),

/***/ "./src/image/day/335.png":
/*!*******************************!*\
  !*** ./src/image/day/335.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f112e7b7295449ca0f2c.png";

/***/ }),

/***/ "./src/image/day/338.png":
/*!*******************************!*\
  !*** ./src/image/day/338.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "33ecc25ad9b9bcdead64.png";

/***/ }),

/***/ "./src/image/day/350.png":
/*!*******************************!*\
  !*** ./src/image/day/350.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e2ffeba8f660e868882d.png";

/***/ }),

/***/ "./src/image/day/353.png":
/*!*******************************!*\
  !*** ./src/image/day/353.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "307889846f4a6877a9ea.png";

/***/ }),

/***/ "./src/image/day/356.png":
/*!*******************************!*\
  !*** ./src/image/day/356.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b79f79a47ff26675bbb6.png";

/***/ }),

/***/ "./src/image/day/359.png":
/*!*******************************!*\
  !*** ./src/image/day/359.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a4e620fd4749c3b4e4e0.png";

/***/ }),

/***/ "./src/image/day/362.png":
/*!*******************************!*\
  !*** ./src/image/day/362.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6fe62e8748f042a1cbc4.png";

/***/ }),

/***/ "./src/image/day/365.png":
/*!*******************************!*\
  !*** ./src/image/day/365.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "de693c69934c56d7621b.png";

/***/ }),

/***/ "./src/image/day/368.png":
/*!*******************************!*\
  !*** ./src/image/day/368.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ff6c626ccae29522a258.png";

/***/ }),

/***/ "./src/image/day/371.png":
/*!*******************************!*\
  !*** ./src/image/day/371.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f112e7b7295449ca0f2c.png";

/***/ }),

/***/ "./src/image/day/374.png":
/*!*******************************!*\
  !*** ./src/image/day/374.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bbb2a9027eb47dd6fc81.png";

/***/ }),

/***/ "./src/image/day/377.png":
/*!*******************************!*\
  !*** ./src/image/day/377.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d5b7ec94bf807ad7a1f5.png";

/***/ }),

/***/ "./src/image/day/386.png":
/*!*******************************!*\
  !*** ./src/image/day/386.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cc1054a285a2ec8fecca.png";

/***/ }),

/***/ "./src/image/day/389.png":
/*!*******************************!*\
  !*** ./src/image/day/389.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f01fba5ae744838fbf95.png";

/***/ }),

/***/ "./src/image/day/392.png":
/*!*******************************!*\
  !*** ./src/image/day/392.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "654b4a200e85db363fc9.png";

/***/ }),

/***/ "./src/image/day/395.png":
/*!*******************************!*\
  !*** ./src/image/day/395.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1cb8e1c8dd3b23368d56.png";

/***/ }),

/***/ "./src/image/icon/feelslike.svg":
/*!**************************************!*\
  !*** ./src/image/icon/feelslike.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "405e6f076bd4be317761.svg";

/***/ }),

/***/ "./src/image/icon/humidity.svg":
/*!*************************************!*\
  !*** ./src/image/icon/humidity.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "303319376ae0250ca39f.svg";

/***/ }),

/***/ "./src/image/icon/pressure.svg":
/*!*************************************!*\
  !*** ./src/image/icon/pressure.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c31213d47668cd245c47.svg";

/***/ }),

/***/ "./src/image/icon/rain.svg":
/*!*********************************!*\
  !*** ./src/image/icon/rain.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b13d37dfa34b40427dd3.svg";

/***/ }),

/***/ "./src/image/icon/temperature.svg":
/*!****************************************!*\
  !*** ./src/image/icon/temperature.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8039ff1e2c4b9932bbd7.svg";

/***/ }),

/***/ "./src/image/icon/wind.svg":
/*!*********************************!*\
  !*** ./src/image/icon/wind.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "accff9d5c93281f9376c.svg";

/***/ }),

/***/ "./src/image/night/113.png":
/*!*********************************!*\
  !*** ./src/image/night/113.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9a181351a22b54059f46.png";

/***/ }),

/***/ "./src/image/night/116.png":
/*!*********************************!*\
  !*** ./src/image/night/116.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "337f58255916e54ea1e1.png";

/***/ }),

/***/ "./src/image/night/119.png":
/*!*********************************!*\
  !*** ./src/image/night/119.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "877a68f87ae89bb957ef.png";

/***/ }),

/***/ "./src/image/night/122.png":
/*!*********************************!*\
  !*** ./src/image/night/122.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fe1ad0ff1820050f573a.png";

/***/ }),

/***/ "./src/image/night/143.png":
/*!*********************************!*\
  !*** ./src/image/night/143.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3a38774211eb11741b54.png";

/***/ }),

/***/ "./src/image/night/176.png":
/*!*********************************!*\
  !*** ./src/image/night/176.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2274b0f9afde269933e5.png";

/***/ }),

/***/ "./src/image/night/179.png":
/*!*********************************!*\
  !*** ./src/image/night/179.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a05c0ed9c03235edca96.png";

/***/ }),

/***/ "./src/image/night/182.png":
/*!*********************************!*\
  !*** ./src/image/night/182.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "17b97c48fb138ff20843.png";

/***/ }),

/***/ "./src/image/night/185.png":
/*!*********************************!*\
  !*** ./src/image/night/185.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "73c62dfd22eaf889b373.png";

/***/ }),

/***/ "./src/image/night/200.png":
/*!*********************************!*\
  !*** ./src/image/night/200.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a85bb9589ece1a589e53.png";

/***/ }),

/***/ "./src/image/night/227.png":
/*!*********************************!*\
  !*** ./src/image/night/227.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a417dc841fb787a3121e.png";

/***/ }),

/***/ "./src/image/night/230.png":
/*!*********************************!*\
  !*** ./src/image/night/230.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "af63c80cb02f1b88520b.png";

/***/ }),

/***/ "./src/image/night/248.png":
/*!*********************************!*\
  !*** ./src/image/night/248.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "360b1cd2a1b3bf3eccf0.png";

/***/ }),

/***/ "./src/image/night/260.png":
/*!*********************************!*\
  !*** ./src/image/night/260.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cb1570c9ecb894bc1087.png";

/***/ }),

/***/ "./src/image/night/263.png":
/*!*********************************!*\
  !*** ./src/image/night/263.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3e3495b8348354827949.png";

/***/ }),

/***/ "./src/image/night/266.png":
/*!*********************************!*\
  !*** ./src/image/night/266.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3e3495b8348354827949.png";

/***/ }),

/***/ "./src/image/night/281.png":
/*!*********************************!*\
  !*** ./src/image/night/281.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "73c62dfd22eaf889b373.png";

/***/ }),

/***/ "./src/image/night/284.png":
/*!*********************************!*\
  !*** ./src/image/night/284.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bf216d4d2f4aa9d2a734.png";

/***/ }),

/***/ "./src/image/night/293.png":
/*!*********************************!*\
  !*** ./src/image/night/293.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2274b0f9afde269933e5.png";

/***/ }),

/***/ "./src/image/night/296.png":
/*!*********************************!*\
  !*** ./src/image/night/296.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e15944de07d227742faa.png";

/***/ }),

/***/ "./src/image/night/299.png":
/*!*********************************!*\
  !*** ./src/image/night/299.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2274b0f9afde269933e5.png";

/***/ }),

/***/ "./src/image/night/302.png":
/*!*********************************!*\
  !*** ./src/image/night/302.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e15944de07d227742faa.png";

/***/ }),

/***/ "./src/image/night/305.png":
/*!*********************************!*\
  !*** ./src/image/night/305.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f3012ddd8e268e19eb2e.png";

/***/ }),

/***/ "./src/image/night/308.png":
/*!*********************************!*\
  !*** ./src/image/night/308.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3b4d7dcbbedd8be85713.png";

/***/ }),

/***/ "./src/image/night/311.png":
/*!*********************************!*\
  !*** ./src/image/night/311.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "32aa06f17c3f7cfb3a99.png";

/***/ }),

/***/ "./src/image/night/314.png":
/*!*********************************!*\
  !*** ./src/image/night/314.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "32aa06f17c3f7cfb3a99.png";

/***/ }),

/***/ "./src/image/night/317.png":
/*!*********************************!*\
  !*** ./src/image/night/317.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5b39c4234abc34044d08.png";

/***/ }),

/***/ "./src/image/night/320.png":
/*!*********************************!*\
  !*** ./src/image/night/320.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5b39c4234abc34044d08.png";

/***/ }),

/***/ "./src/image/night/323.png":
/*!*********************************!*\
  !*** ./src/image/night/323.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a05c0ed9c03235edca96.png";

/***/ }),

/***/ "./src/image/night/326.png":
/*!*********************************!*\
  !*** ./src/image/night/326.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "66cad1fd4ea2b425476d.png";

/***/ }),

/***/ "./src/image/night/329.png":
/*!*********************************!*\
  !*** ./src/image/night/329.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a05c0ed9c03235edca96.png";

/***/ }),

/***/ "./src/image/night/332.png":
/*!*********************************!*\
  !*** ./src/image/night/332.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "66cad1fd4ea2b425476d.png";

/***/ }),

/***/ "./src/image/night/335.png":
/*!*********************************!*\
  !*** ./src/image/night/335.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a05c0ed9c03235edca96.png";

/***/ }),

/***/ "./src/image/night/338.png":
/*!*********************************!*\
  !*** ./src/image/night/338.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "68e33fb0d2d3d215a5fe.png";

/***/ }),

/***/ "./src/image/night/350.png":
/*!*********************************!*\
  !*** ./src/image/night/350.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1c33e3dd2cb58a8c51b7.png";

/***/ }),

/***/ "./src/image/night/353.png":
/*!*********************************!*\
  !*** ./src/image/night/353.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2274b0f9afde269933e5.png";

/***/ }),

/***/ "./src/image/night/356.png":
/*!*********************************!*\
  !*** ./src/image/night/356.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f3012ddd8e268e19eb2e.png";

/***/ }),

/***/ "./src/image/night/359.png":
/*!*********************************!*\
  !*** ./src/image/night/359.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f0ea4e443a205a9cfbbf.png";

/***/ }),

/***/ "./src/image/night/362.png":
/*!*********************************!*\
  !*** ./src/image/night/362.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "17b97c48fb138ff20843.png";

/***/ }),

/***/ "./src/image/night/365.png":
/*!*********************************!*\
  !*** ./src/image/night/365.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3e3b2a1ad34b9471b980.png";

/***/ }),

/***/ "./src/image/night/368.png":
/*!*********************************!*\
  !*** ./src/image/night/368.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a05c0ed9c03235edca96.png";

/***/ }),

/***/ "./src/image/night/371.png":
/*!*********************************!*\
  !*** ./src/image/night/371.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2c7b41d4dea564886958.png";

/***/ }),

/***/ "./src/image/night/374.png":
/*!*********************************!*\
  !*** ./src/image/night/374.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "42f4df0e587e14e2ec2d.png";

/***/ }),

/***/ "./src/image/night/377.png":
/*!*********************************!*\
  !*** ./src/image/night/377.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2821934c72b0870a790d.png";

/***/ }),

/***/ "./src/image/night/386.png":
/*!*********************************!*\
  !*** ./src/image/night/386.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a85bb9589ece1a589e53.png";

/***/ }),

/***/ "./src/image/night/389.png":
/*!*********************************!*\
  !*** ./src/image/night/389.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "815a9988eef459cc98c3.png";

/***/ }),

/***/ "./src/image/night/392.png":
/*!*********************************!*\
  !*** ./src/image/night/392.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "972cf01edfd40c105c6c.png";

/***/ }),

/***/ "./src/image/night/395.png":
/*!*********************************!*\
  !*** ./src/image/night/395.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1cb8e1c8dd3b23368d56.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _weatherAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherAPI */ "./src/weatherAPI.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");



const openMenuBtn = document.querySelector(".openMenu");
const menuButtons = document.querySelectorAll(".menuBtn");
const form = document.querySelector(".locationForm");
const locationInput = document.getElementById("location");
const errorSpan = document.querySelector(".error");
const submitButton = document.querySelector("#check");
document.addEventListener("DOMContentLoaded", function () {
  activateDropdown(menuButtons, openMenuBtn);
  getWeatherData("San Francisco");
  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    if (!validateInput()) return;
    await getWeatherData(locationInput.value);
    form.reset();
  });
});
locationInput.addEventListener("input", function () {
  validateInput();
});
submitButton.addEventListener("click", function (event) {
  if (!validateInput()) {
    event.preventDefault();
    alert("Please provide valid city name");
  }
});
function activateDropdown(menuBttns, openBtn) {
  openBtn.addEventListener("click", function () {
    menuBttns.forEach(function (button) {
      return button.classList.toggle("active");
    });
    openBtn.classList.toggle("toggled");
  });
}
const getWeatherData = async function (place) {
  let current;
  let forecasted;
  let location;
  try {
    [current, forecasted, location] = await (0,_weatherAPI__WEBPACK_IMPORTED_MODULE_1__.fetchWeather)(place);
    (0,_DOM__WEBPACK_IMPORTED_MODULE_2__.updateWeather)(current);
    (0,_DOM__WEBPACK_IMPORTED_MODULE_2__.updateForecast)(forecasted);
    (0,_DOM__WEBPACK_IMPORTED_MODULE_2__.updateLocation)(location);
  } catch (error) {
    console.error("Error fetching weather:", error);
  }
};
const validateInput = function () {
  const pattern = /^[A-Za-z][A-Za-z\s'-]{0,18}[A-Za-z]$/;
  const inputValue = locationInput.value.trim();
  if (!pattern.test(inputValue)) {
    errorSpan.textContent = "Invalid city name";
    locationInput.classList.remove("valid");
    locationInput.classList.add("invalid");
    return false;
  }
  locationInput.classList.remove("invalid");
  locationInput.classList.add("valid");
  errorSpan.textContent = "";
  return true;
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sT0FBTyxZQUFZLE1BQU0sV0FBVyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxXQUFXLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxTQUFTLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sV0FBVyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVks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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Es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QyxDQUFDLE9BQU9nQixLQUFLLEVBQUU7SUFDZHpDLE9BQU8sQ0FBQ3lDLEtBQUssQ0FBQyx5QkFBeUIsRUFBRUEsS0FBSyxDQUFDO0VBQ2pEO0FBQ0YsQ0FBQztBQUVELE1BQU1hLGFBQWEsR0FBRyxTQUFBQSxDQUFBLEVBQVk7RUFDaEMsTUFBTVMsT0FBTyxHQUFHLHNDQUFzQztFQUN0RCxNQUFNQyxVQUFVLEdBQUdqQixhQUFhLENBQUNRLEtBQUssQ0FBQ1UsSUFBSSxDQUFDLENBQUM7RUFFN0MsSUFBSSxDQUFDRixPQUFPLENBQUNHLElBQUksQ0FBQ0YsVUFBVSxDQUFDLEVBQUU7SUFDN0JoQixTQUFTLENBQUNyRixXQUFXLEdBQUcsbUJBQW1CO0lBQzNDb0YsYUFBYSxDQUFDbkcsU0FBUyxDQUFDdUgsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUN2Q3BCLGFBQWEsQ0FBQ25HLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUN0QyxPQUFPLEtBQUs7RUFDZDtFQUNBa0csYUFBYSxDQUFDbkcsU0FBUyxDQUFDdUgsTUFBTSxDQUFDLFNBQVMsQ0FBQztFQUN6Q3BCLGFBQWEsQ0FBQ25HLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztFQUNwQ21HLFNBQVMsQ0FBQ3JGLFdBQVcsR0FBRyxFQUFFO0VBQzFCLE9BQU8sSUFBSTtBQUNiLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9qc29uREFUQS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy93ZWF0aGVyQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9pbWFnZS9kYXkvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmcpJCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9pbWFnZS9uaWdodC8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZykkIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEpTT05kYXRhIH0gZnJvbSBcIi4vanNvbkRBVEFcIjtcbmltcG9ydCByYWluSWNvbiBmcm9tIFwiLi9pbWFnZS9pY29uL3JhaW4uc3ZnXCI7XG5pbXBvcnQgcHJlc3N1cmVJY29uIGZyb20gXCIuL2ltYWdlL2ljb24vcHJlc3N1cmUuc3ZnXCI7XG5pbXBvcnQgaHVtaWRpdHlJY29uIGZyb20gXCIuL2ltYWdlL2ljb24vaHVtaWRpdHkuc3ZnXCI7XG5pbXBvcnQgdGVtcGVyYXR1cmVJY29uIGZyb20gXCIuL2ltYWdlL2ljb24vdGVtcGVyYXR1cmUuc3ZnXCI7XG5pbXBvcnQgZmVlbHNMaWtlSWNvbiBmcm9tIFwiLi9pbWFnZS9pY29uL2ZlZWxzbGlrZS5zdmdcIjtcbmltcG9ydCB3aW5kSWNvbiBmcm9tIFwiLi9pbWFnZS9pY29uL3dpbmQuc3ZnXCI7XG5cbmNvbnN0IGNvbmRpdGlvbkltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uZGl0aW9uSW1nXCIpO1xuY29uc3QgY29uZGl0aW9uVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbmRpdGlvblRvZGF5XCIpO1xuY29uc3QgdGVtcFRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wVG9kYXlcIik7XG5jb25zdCB0ZW1wSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wSW1nXCIpO1xuY29uc3QgZmVlbHNMaWtlVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWxzTGlrZVRvZGF5XCIpO1xuY29uc3QgZmVlbHNMaWtlSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mZWVsc0xpa2VJbWdcIik7XG5jb25zdCB3aW5kVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmRUb2RheVwiKTtcbmNvbnN0IHdpbmRJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmRJbWdcIik7XG5jb25zdCBodW1pZGl0eVRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1pZGl0eVRvZGF5XCIpO1xuY29uc3QgaHVtaWRpdHlJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bWlkaXR5SW1nXCIpO1xuY29uc3QgcHJlc3N1cmVUb2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlc3N1cmVUb2RheVwiKTtcbmNvbnN0IHByZXNzdXJlSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVzc3VyZUltZ1wiKTtcblxuY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eVwiKTtcbmNvbnN0IGNvdW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdW50cnlcIik7XG5jb25zdCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lXCIpO1xuXG5jb25zdCB0b21vcnJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9tb3Jyb3dcIik7XG5jb25zdCBmb2xsb3dpbmdEYXlDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvbGxvd2luZ0RheVwiKTtcbmNvbnN0IGluVHdvRGF5c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5Ud29EYXlzXCIpO1xuXG5jb25zdCBmb3JlY2FzdENvbnRhaW5lcnMgPSBbXTtcbmZvcmVjYXN0Q29udGFpbmVycy5wdXNoKFxuICB0b21vcnJvd0NvbnRhaW5lcixcbiAgZm9sbG93aW5nRGF5Q29udGFpbmVyLFxuICBpblR3b0RheXNDb250YWluZXJcbik7XG5cbmNvbnN0IGRheUltYWdlcyA9IGltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoXCIuL2ltYWdlL2RheVwiLCBmYWxzZSwgL1xcLihwbmcpJC8pKTtcblxuY29uc3QgbmlnaHRJbWFnZXMgPSBpbXBvcnRBbGwoXG4gIHJlcXVpcmUuY29udGV4dChcIi4vaW1hZ2UvbmlnaHRcIiwgZmFsc2UsIC9cXC4ocG5nKSQvKVxuKTtcblxuZnVuY3Rpb24gaW1wb3J0QWxsKHIpIHtcbiAgbGV0IGltYWdlcyA9IHt9O1xuICByLmtleXMoKS5tYXAoKGl0ZW0pID0+IHtcbiAgICBpbWFnZXNbaXRlbS5yZXBsYWNlKFwiLi9cIiwgXCJcIildID0gcihpdGVtKTtcbiAgfSk7XG4gIHJldHVybiBpbWFnZXM7XG59XG5cbmNvbnN0IGZvcm1hdEljb25FbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHNvdXJjZSkge1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ3ZWF0aGVySWNvblwiKTtcbiAgZWxlbWVudC5zcmMgPSBzb3VyY2U7XG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuY29uc3QgYWRkQ29uZGl0aW9uSW1hZ2UgPSBmdW5jdGlvbiAod2VhdGhlckRhdGEpIHtcbiAgY29uc3QgaXNEYXkgPSB3ZWF0aGVyRGF0YS5pc2RheSA/IHRydWUgOiBmYWxzZTtcbiAgY29uc3QgY29uZGl0aW9uQ29kZSA9IHdlYXRoZXJEYXRhLmNvbmRpdGlvbi5jb2RlO1xuICBsZXQgd2VhdGhlckljb25Db2RlO1xuXG4gIEpTT05kYXRhLmZpbmQoKHdlYXRoZXIpID0+IHtcbiAgICBpZiAod2VhdGhlci5jb2RlID09PSBjb25kaXRpb25Db2RlKSB7XG4gICAgICB3ZWF0aGVySWNvbkNvZGUgPSB3ZWF0aGVyLmljb247XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9KTtcblxuICBpZiAoaXNEYXkpIHtcbiAgICBjb25kaXRpb25JbWcuc3JjID0gZGF5SW1hZ2VzW2Ake3dlYXRoZXJJY29uQ29kZX0ucG5nYF07XG4gIH0gZWxzZSB7XG4gICAgY29uZGl0aW9uSW1nLnNyYyA9IG5pZ2h0SW1hZ2VzW2Ake3dlYXRoZXJJY29uQ29kZX0ucG5nYF07XG4gIH1cbn07XG5cbmNvbnN0IGZpbGxQYXJhbWV0ZXJWYWx1ZXMgPSBmdW5jdGlvbiAod2VhdGhlckRhdGEpIHtcbiAgY29uZGl0aW9uVG9kYXkudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5jb25kaXRpb24udGV4dDtcbiAgZmVlbHNMaWtlVG9kYXkudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5mZWVsc0xpa2UgKyBcIiDCsENcIjtcbiAgcHJlc3N1cmVUb2RheS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLnByZXNzdXJlICsgXCIgaFBhXCI7XG4gIHRlbXBUb2RheS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLnRlbXBlcmF0dXJlICsgXCIgwrBDXCI7XG4gIHdpbmRUb2RheS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLndpbmQgKyBcIiBrbS9oXCI7XG4gIGh1bWlkaXR5VG9kYXkudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5odW1pZGl0eSArIFwiICVcIjtcbn07XG5cbmNvbnN0IGFkZFBhcmFtZXRlckljb25zID0gZnVuY3Rpb24gKCkge1xuICBmb3JtYXRJY29uRWxlbWVudChmZWVsc0xpa2VJbWcsIGZlZWxzTGlrZUljb24pO1xuICBmb3JtYXRJY29uRWxlbWVudChwcmVzc3VyZUltZywgcHJlc3N1cmVJY29uKTtcbiAgZm9ybWF0SWNvbkVsZW1lbnQod2luZEltZywgd2luZEljb24pO1xuICBmb3JtYXRJY29uRWxlbWVudCh0ZW1wSW1nLCB0ZW1wZXJhdHVyZUljb24pO1xuICBmb3JtYXRJY29uRWxlbWVudChodW1pZGl0eUltZywgaHVtaWRpdHlJY29uKTtcbn07XG5cbmNvbnN0IGFkZEZvcmVjYXN0Q29uZGl0aW9uSW1hZ2UgPSBmdW5jdGlvbiAoaW1hZ2UsIGNvZGUpIHtcbiAgbGV0IHdlYXRoZXJJY29uQ29kZTtcbiAgSlNPTmRhdGEuZmluZCgod2VhdGhlcikgPT4ge1xuICAgIGlmICh3ZWF0aGVyLmNvZGUgPT09IGNvZGUpIHtcbiAgICAgIHdlYXRoZXJJY29uQ29kZSA9IHdlYXRoZXIuaWNvbjtcbiAgICB9XG4gICAgaW1hZ2Uuc3JjID0gZGF5SW1hZ2VzW2Ake3dlYXRoZXJJY29uQ29kZX0ucG5nYF07XG4gIH0pO1xufTtcblxuY29uc3QgZmlsbE91dEZvcmVjYXN0RGF0YSA9IGZ1bmN0aW9uIChcbiAgdGVtcGVyYXR1cmUsXG4gIHJhaW4sXG4gIGh1bWlkaXR5LFxuICBkYXRlLFxuICBmb3JlY2FzdERhdGEsXG4gIGlkXG4pIHtcbiAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBmb3JlY2FzdERhdGEudGVtcGVyYXR1cmUgKyBcIiDCsENcIjtcbiAgcmFpbi50ZXh0Q29udGVudCA9IGZvcmVjYXN0RGF0YS5yYWluUHJvYmFiaWxpdHkgKyBcIiAlXCI7XG4gIGh1bWlkaXR5LnRleHRDb250ZW50ID0gZm9yZWNhc3REYXRhLmh1bWlkaXR5ICsgXCIgJVwiO1xuXG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgdG9tb3Jyb3cgPSBuZXcgRGF0ZSh0b2RheSk7XG4gIGNvbnN0IGluVHdvRGF5cyA9IG5ldyBEYXRlKHRvZGF5KTtcbiAgY29uc3QgaW5UaHJlZURheXMgPSBuZXcgRGF0ZSh0b2RheSk7XG4gIHRvbW9ycm93LnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICsgMSk7XG4gIGluVHdvRGF5cy5zZXREYXRlKHRvZGF5LmdldERhdGUoKSArIDIpO1xuICBpblRocmVlRGF5cy5zZXREYXRlKHRvZGF5LmdldERhdGUoKSArIDMpO1xuXG4gIGlmIChpZCA9PT0gXCJ0b21vcnJvd1wiKSBkYXRlLnRleHRDb250ZW50ID0gdG9tb3Jyb3cudG9EYXRlU3RyaW5nKCk7XG4gIGVsc2UgaWYgKGlkID09PSBcImZvbGxvd2luZ0RheVwiKSBkYXRlLnRleHRDb250ZW50ID0gaW5Ud29EYXlzLnRvRGF0ZVN0cmluZygpO1xuICBlbHNlIGlmIChpZCA9PT0gXCJpblR3b0RheXNcIikgZGF0ZS50ZXh0Q29udGVudCA9IGluVGhyZWVEYXlzLnRvRGF0ZVN0cmluZygpO1xufTtcblxuY29uc3QgYXBwZW5kQ29udGFpbmVyRGF0YSA9IGZ1bmN0aW9uIChjb250YWluZXIsIGRhaWx5Rm9yZWNhc3QpIHtcbiAgY29uc3QgY29uZGl0aW9uQ29kZSA9IGRhaWx5Rm9yZWNhc3QuY29uZGl0aW9uLmNvZGU7XG4gIGNvbnN0IGZvcmVjYXN0RGF0ZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmZvcmVjYXN0RGF0ZVwiKTtcbiAgY29uc3Qgd2VhdGhlckltZyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmZvcmVjYXN0SWNvblwiKTtcbiAgY29uc3QgdGVtcGVyYXR1cmVGb3JlY2FzdEljb24gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICBcIiNmb3JlY2FzdGVkVGVtcGVyYXR1cmVJbWdcIlxuICApO1xuICBjb25zdCByYWluRm9yZWNhc3RJY29uID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjZm9yZWNhc3RlZFJhaW5JbWdcIik7XG4gIGNvbnN0IGh1bWlkaXR5Rm9yZWNhc3RJY29uID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIjZm9yZWNhc3RlZEh1bWlkaXR5XCIpO1xuICBjb25zdCBmb3JlY2FzdGVkVGVtcGVyYXR1cmUgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICBcInAuZm9yZWNhc3RlZFRlbXBlcmF0dXJlXCJcbiAgKTtcbiAgY29uc3QgZm9yZWNhc3RlZFJhaW4gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcInAuZm9yZWNhc3RlZFJhaW5cIik7XG4gIGNvbnN0IGZvcmVjYXN0ZWRIdW1pZGl0eSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwicC5mb3JlY2FzdGVkSHVtaWRpdHlcIik7XG5cbiAgZm9ybWF0SWNvbkVsZW1lbnQodGVtcGVyYXR1cmVGb3JlY2FzdEljb24sIHRlbXBlcmF0dXJlSWNvbik7XG4gIGZvcm1hdEljb25FbGVtZW50KHJhaW5Gb3JlY2FzdEljb24sIHJhaW5JY29uKTtcbiAgZm9ybWF0SWNvbkVsZW1lbnQoaHVtaWRpdHlGb3JlY2FzdEljb24sIGh1bWlkaXR5SWNvbik7XG4gIGFkZEZvcmVjYXN0Q29uZGl0aW9uSW1hZ2Uod2VhdGhlckltZywgY29uZGl0aW9uQ29kZSk7XG4gIGZpbGxPdXRGb3JlY2FzdERhdGEoXG4gICAgZm9yZWNhc3RlZFRlbXBlcmF0dXJlLFxuICAgIGZvcmVjYXN0ZWRSYWluLFxuICAgIGZvcmVjYXN0ZWRIdW1pZGl0eSxcbiAgICBmb3JlY2FzdERhdGUsXG4gICAgZGFpbHlGb3JlY2FzdCxcbiAgICBjb250YWluZXIuaWRcbiAgKTtcbn07XG5leHBvcnQgY29uc3QgdXBkYXRlV2VhdGhlciA9IGZ1bmN0aW9uICh3ZWF0aGVyRGF0YSkge1xuICBhZGRDb25kaXRpb25JbWFnZSh3ZWF0aGVyRGF0YSk7XG4gIGZpbGxQYXJhbWV0ZXJWYWx1ZXMod2VhdGhlckRhdGEpO1xuICBhZGRQYXJhbWV0ZXJJY29ucygpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUZvcmVjYXN0ID0gZnVuY3Rpb24gKHdlYXRoZXJEYXRhKSB7XG4gIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcbiAgZm9yZWNhc3RDb250YWluZXJzLmZvckVhY2goKGNvbnRhaW5lciwgaW5kZXgpID0+XG4gICAgYXBwZW5kQ29udGFpbmVyRGF0YShjb250YWluZXIsIHdlYXRoZXJEYXRhW2luZGV4XSlcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVMb2NhdGlvbiA9IGZ1bmN0aW9uIChsb2NhdGlvbkRhdGEpIHtcbiAgY2l0eS50ZXh0Q29udGVudCA9IGxvY2F0aW9uRGF0YS5jaXR5O1xuICBjb3VudHJ5LnRleHRDb250ZW50ID0gbG9jYXRpb25EYXRhLmNvdW50cnk7XG4gIHRpbWUudGV4dENvbnRlbnQgPSBsb2NhdGlvbkRhdGEubG9jYWxUaW1lO1xufTtcbiIsImV4cG9ydCBjb25zdCBKU09OZGF0YSA9IFtcbiAge1xuICAgIGNvZGU6IDEwMDAsXG4gICAgZGF5OiBcIlN1bm55XCIsXG4gICAgbmlnaHQ6IFwiQ2xlYXJcIixcbiAgICBpY29uOiAxMTMsXG4gIH0sXG4gIHtcbiAgICBjb2RlOiAxMDAzLFxuICAgIGRheTogXCJQYXJ0bHkgY2xvdWR5XCIsXG4gICAgbmlnaHQ6IFwiUGFydGx5IGNsb3VkeVwiLFxuICAgIGljb246IDExNixcbiAgfSxcbiAge1xuICAgIGNvZGU6IDEwMDYsXG4gICAgZGF5OiBcIkNsb3VkeVwiLFxuICAgIG5pZ2h0OiBcIkNsb3VkeVwiLFxuICAgIGljb246IDExOSxcbiAgfSxcbiAge1xuICAgIGNvZGU6IDEwMDksXG4gICAgZGF5OiBcIk92ZXJjYXN0XCIsXG4gICAgbmlnaHQ6IFwiT3ZlcmNhc3RcIixcbiAgICBpY29uOiAxMjIsXG4gIH0sXG4gIHtcbiAgICBjb2RlOiAxMDMwLFxuICAgIGRheTogXCJNaXN0XCIsXG4gICAgbmlnaHQ6IFwiTWlzdFwiLFxuICAgIGljb246IDE0MyxcbiAgfSxcbiAge1xuICAgIGNvZGU6IDEwNjMsXG4gICAgZGF5OiBcIlBhdGNoeSByYWluIHBvc3NpYmxlXCIsXG4gICAgbmlnaHQ6IFwiUGF0Y2h5IHJhaW4gcG9zc2libGVcIixcbiAgICBpY29uOiAxNzYsXG4gIH0sXG4gIHtcbiAgICBjb2RlOiAxMDY2LFxuICAgIGRheTogXCJQYXRjaHkgc25vdyBwb3NzaWJsZVwiLFxuICAgIG5pZ2h0OiBcIlBhdGNoeSBzbm93IHBvc3NpYmxlXCIsXG4gICAgaWNvbjogMTc5LFxuICB9LFxuICB7XG4gICAgY29kZTogMTA2OSxcbiAgICBkYXk6IFwiUGF0Y2h5IHNsZWV0IHBvc3NpYmxlXCIsXG4gICAgbmlnaHQ6IFwiUGF0Y2h5IHNsZWV0IHBvc3NpYmxlXCIsXG4gICAgaWNvbjogMTgyLFxuICB9LFxuICB7XG4gICAgY29kZTogMTA3MixcbiAgICBkYXk6IFwiUGF0Y2h5IGZyZWV6aW5nIGRyaXp6bGUgcG9zc2libGVcIixcbiAgICBuaWdodDogXCJQYXRjaHkgZnJlZXppbmcgZHJpenpsZSBwb3NzaWJsZVwiLFxuICAgIGljb246IDE4NSxcbiAgfSxcbiAge1xuICAgIGNvZGU6IDEwODcsXG4gICAgZGF5OiBcIlRodW5kZXJ5IG91dGJyZWFrcyBwb3NzaWJsZVwiLFxuICAgIG5pZ2h0OiBcIlRodW5kZXJ5IG91dGJyZWFrcyBwb3NzaWJsZVwiLFxuICAgIGljb246IDIwMCxcbiAgfSxcbiAge1xuICAgIGNvZGU6IDExMTQsXG4gICAgZGF5OiBcIkJsb3dpbmcgc25vd1wiLFxuICAgIG5pZ2h0OiBcIkJsb3dpbmcgc25vd1wiLFxuICAgIGljb246IDIyNyxcbiAgfSxcbiAge1xuICAgIGNvZGU6IDExMTcsXG4gICAgZGF5OiBcIkJsaXp6YXJkXCIsXG4gICAgbmlnaHQ6IFwiQmxpenphcmRcIixcbiAgICBpY29uOiAyMzAsXG4gIH0sXG4gIHtcbiAgICBjb2RlOiAxMTM1LFxuICAgIGRheTogXCJGb2dcIixcbiAgICBuaWdodDogXCJGb2dcIixcbiAgICBpY29uOiAyNDgsXG4gIH0sXG4gIHtcbiAgICBjb2RlOiAxMTQ3LFxuICAgIGRheTogXCJGcmVlemluZyBmb2dcIixcbiAgICBuaWdodDogXCJGcmVlemluZyBmb2dcIixcbiAgICBpY29uOiAyNjAsXG4gIH0sXG4gIHtcbiAgICBjb2RlOiAxMTUwLFxuICAgIGRheTogXCJQYXRjaHkgbGlnaHQgZHJpenpsZVwiLFxuICAgIG5pZ2h0OiBcIlBhdGNoeSBsaWdodCBkcml6emxlXCIsXG4gICAgaWNvbjogMjYzLFxuICB9LFxuICB7XG4gICAgY29kZTogMTE1MyxcbiAgICBkYXk6IFwiTGlnaHQgZHJpenpsZVwiLFxuICAgIG5pZ2h0OiBcIkxpZ2h0IGRyaXp6bGVcIixcbiAgICBpY29uOiAyNjYsXG4gIH0sXG4gIHtcbiAgICBjb2RlOiAxMTY4LFxuICAgIGRheTogXCJGcmVlemluZyBkcml6emxlXCIsXG4gICAgbmlnaHQ6IFwiRnJlZXppbmcgZHJpenpsZVwiLFxuICAgIGljb246IDI4MSxcbiAgfSxcbiAge1xuICAgIGNvZGU6IDExNzEsXG4gICAgZGF5OiBcIkhlYXZ5IGZyZWV6aW5nIGRyaXp6bGVcIixcbiAgICBuaWdodDogXCJIZWF2eSBmcmVlemluZyBkcml6emxlXCIsXG4gICAgaWNvbjogMjg0LFxuICB9LFxuICB7XG4gICAgY29kZTogMTE4MCxcbiAgICBkYXk6IFwiUGF0Y2h5IGxpZ2h0IHJhaW5cIixcbiAgICBuaWdodDogXCJQYXRjaHkgbGlnaHQgcmFpblwiLFxuICAgIGljb246IDI5MyxcbiAgfSxcbiAge1xuICAgIGNvZGU6IDExODMsXG4gICAgZGF5OiBcIkxpZ2h0IHJhaW5cIixcbiAgICBuaWdodDogXCJMaWdodCByYWluXCIsXG4gICAgaWNvbjogMjk2LFxuICB9LFxuICB7XG4gICAgY29kZTogMTE4NixcbiAgICBkYXk6IFwiTW9kZXJhdGUgcmFpbiBhdCB0aW1lc1wiLFxuICAgIG5pZ2h0OiBcIk1vZGVyYXRlIHJhaW4gYXQgdGltZXNcIixcbiAgICBpY29uOiAyOTksXG4gIH0sXG4gIHtcbiAgICBjb2RlOiAxMTg5LFxuICAgIGRheTogXCJNb2RlcmF0ZSByYWluXCIsXG4gICAgbmlnaHQ6IFwiTW9kZXJhdGUgcmFpblwiLFxuICAgIGljb246IDMwMixcbiAgfSxcbiAge1xuICAgIGNvZGU6IDExOTIsXG4gICAgZGF5OiBcIkhlYXZ5IHJhaW4gYXQgdGltZXNcIixcbiAgICBuaWdodDogXCJIZWF2eSByYWluIGF0IHRpbWVzXCIsXG4gICAgaWNvbjogMzA1LFxuICB9LFxuICB7XG4gICAgY29kZTogMTE5NSxcbiAgICBkYXk6IFwiSGVhdnkgcmFpblwiLFxuICAgIG5pZ2h0OiBcIkhlYXZ5IHJhaW5cIixcbiAgICBpY29uOiAzMDgsXG4gIH0sXG4gIHtcbiAgICBjb2RlOiAxMTk4LFxuICAgIGRheTogXCJMaWdodCBmcmVlemluZyByYWluXCIsXG4gICAgbmlnaHQ6IFwiTGlnaHQgZnJlZXppbmcgcmFpblwiLFxuICAgIGljb246IDMxMSxcbiAgfSxcbiAge1xuICAgIGNvZGU6IDEyMDEsXG4gICAgZGF5OiBcIk1vZGVyYXRlIG9yIGhlYXZ5IGZyZWV6aW5nIHJhaW5cIixcbiAgICBuaWdodDogXCJNb2RlcmF0ZSBvciBoZWF2eSBmcmVlemluZyByYWluXCIsXG4gICAgaWNvbjogMzE0LFxuICB9LFxuICB7XG4gICAgY29kZTogMTIwNCxcbiAgICBkYXk6IFwiTGlnaHQgc2xlZXRcIixcbiAgICBuaWdodDogXCJMaWdodCBzbGVldFwiLFxuICAgIGljb246IDMxNyxcbiAgfSxcbiAge1xuICAgIGNvZGU6IDEyMDcsXG4gICAgZGF5OiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0XCIsXG4gICAgbmlnaHQ6IFwiTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXRcIixcbiAgICBpY29uOiAzMjAsXG4gIH0sXG4gIHtcbiAgICBjb2RlOiAxMjEwLFxuICAgIGRheTogXCJQYXRjaHkgbGlnaHQgc25vd1wiLFxuICAgIG5pZ2h0OiBcIlBhdGNoeSBsaWdodCBzbm93XCIsXG4gICAgaWNvbjogMzIzLFxuICB9LFxuICB7XG4gICAgY29kZTogMTIxMyxcbiAgICBkYXk6IFwiTGlnaHQgc25vd1wiLFxuICAgIG5pZ2h0OiBcIkxpZ2h0IHNub3dcIixcbiAgICBpY29uOiAzMjYsXG4gIH0sXG4gIHtcbiAgICBjb2RlOiAxMjE2LFxuICAgIGRheTogXCJQYXRjaHkgbW9kZXJhdGUgc25vd1wiLFxuICAgIG5pZ2h0OiBcIlBhdGNoeSBtb2RlcmF0ZSBzbm93XCIsXG4gICAgaWNvbjogMzI5LFxuICB9LFxuICB7XG4gICAgY29kZTogMTIxOSxcbiAgICBkYXk6IFwiTW9kZXJhdGUgc25vd1wiLFxuICAgIG5pZ2h0OiBcIk1vZGVyYXRlIHNub3dcIixcbiAgICBpY29uOiAzMzIsXG4gIH0sXG4gIHtcbiAgICBjb2RlOiAxMjIyLFxuICAgIGRheTogXCJQYXRjaHkgaGVhdnkgc25vd1wiLFxuICAgIG5pZ2h0OiBcIlBhdGNoeSBoZWF2eSBzbm93XCIsXG4gICAgaWNvbjogMzM1LFxuICB9LFxuICB7XG4gICAgY29kZTogMTIyNSxcbiAgICBkYXk6IFwiSGVhdnkgc25vd1wiLFxuICAgIG5pZ2h0OiBcIkhlYXZ5IHNub3dcIixcbiAgICBpY29uOiAzMzgsXG4gIH0sXG4gIHtcbiAgICBjb2RlOiAxMjM3LFxuICAgIGRheTogXCJJY2UgcGVsbGV0c1wiLFxuICAgIG5pZ2h0OiBcIkljZSBwZWxsZXRzXCIsXG4gICAgaWNvbjogMzUwLFxuICB9LFxuICB7XG4gICAgY29kZTogMTI0MCxcbiAgICBkYXk6IFwiTGlnaHQgcmFpbiBzaG93ZXJcIixcbiAgICBuaWdodDogXCJMaWdodCByYWluIHNob3dlclwiLFxuICAgIGljb246IDM1MyxcbiAgfSxcbiAge1xuICAgIGNvZGU6IDEyNDMsXG4gICAgZGF5OiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gc2hvd2VyXCIsXG4gICAgbmlnaHQ6IFwiTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiBzaG93ZXJcIixcbiAgICBpY29uOiAzNTYsXG4gIH0sXG4gIHtcbiAgICBjb2RlOiAxMjQ2LFxuICAgIGRheTogXCJUb3JyZW50aWFsIHJhaW4gc2hvd2VyXCIsXG4gICAgbmlnaHQ6IFwiVG9ycmVudGlhbCByYWluIHNob3dlclwiLFxuICAgIGljb246IDM1OSxcbiAgfSxcbiAge1xuICAgIGNvZGU6IDEyNDksXG4gICAgZGF5OiBcIkxpZ2h0IHNsZWV0IHNob3dlcnNcIixcbiAgICBuaWdodDogXCJMaWdodCBzbGVldCBzaG93ZXJzXCIsXG4gICAgaWNvbjogMzYyLFxuICB9LFxuICB7XG4gICAgY29kZTogMTI1MixcbiAgICBkYXk6IFwiTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXQgc2hvd2Vyc1wiLFxuICAgIG5pZ2h0OiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNsZWV0IHNob3dlcnNcIixcbiAgICBpY29uOiAzNjUsXG4gIH0sXG4gIHtcbiAgICBjb2RlOiAxMjU1LFxuICAgIGRheTogXCJMaWdodCBzbm93IHNob3dlcnNcIixcbiAgICBuaWdodDogXCJMaWdodCBzbm93IHNob3dlcnNcIixcbiAgICBpY29uOiAzNjgsXG4gIH0sXG4gIHtcbiAgICBjb2RlOiAxMjU4LFxuICAgIGRheTogXCJNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHNob3dlcnNcIixcbiAgICBuaWdodDogXCJNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHNob3dlcnNcIixcbiAgICBpY29uOiAzNzEsXG4gIH0sXG4gIHtcbiAgICBjb2RlOiAxMjYxLFxuICAgIGRheTogXCJMaWdodCBzaG93ZXJzIG9mIGljZSBwZWxsZXRzXCIsXG4gICAgbmlnaHQ6IFwiTGlnaHQgc2hvd2VycyBvZiBpY2UgcGVsbGV0c1wiLFxuICAgIGljb246IDM3NCxcbiAgfSxcbiAge1xuICAgIGNvZGU6IDEyNjQsXG4gICAgZGF5OiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNob3dlcnMgb2YgaWNlIHBlbGxldHNcIixcbiAgICBuaWdodDogXCJNb2RlcmF0ZSBvciBoZWF2eSBzaG93ZXJzIG9mIGljZSBwZWxsZXRzXCIsXG4gICAgaWNvbjogMzc3LFxuICB9LFxuICB7XG4gICAgY29kZTogMTI3MyxcbiAgICBkYXk6IFwiUGF0Y2h5IGxpZ2h0IHJhaW4gd2l0aCB0aHVuZGVyXCIsXG4gICAgbmlnaHQ6IFwiUGF0Y2h5IGxpZ2h0IHJhaW4gd2l0aCB0aHVuZGVyXCIsXG4gICAgaWNvbjogMzg2LFxuICB9LFxuICB7XG4gICAgY29kZTogMTI3NixcbiAgICBkYXk6IFwiTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiB3aXRoIHRodW5kZXJcIixcbiAgICBuaWdodDogXCJNb2RlcmF0ZSBvciBoZWF2eSByYWluIHdpdGggdGh1bmRlclwiLFxuICAgIGljb246IDM4OSxcbiAgfSxcbiAge1xuICAgIGNvZGU6IDEyNzksXG4gICAgZGF5OiBcIlBhdGNoeSBsaWdodCBzbm93IHdpdGggdGh1bmRlclwiLFxuICAgIG5pZ2h0OiBcIlBhdGNoeSBsaWdodCBzbm93IHdpdGggdGh1bmRlclwiLFxuICAgIGljb246IDM5MixcbiAgfSxcbiAge1xuICAgIGNvZGU6IDEyODIsXG4gICAgZGF5OiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNub3cgd2l0aCB0aHVuZGVyXCIsXG4gICAgbmlnaHQ6IFwiTW9kZXJhdGUgb3IgaGVhdnkgc25vdyB3aXRoIHRodW5kZXJcIixcbiAgICBpY29uOiAzOTUsXG4gIH0sXG5dO1xuIiwiY29uc3QgZ2V0V2VhdGhlckRhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xuICBjb25zdCB3ZWF0aGVyID0ge1xuICAgIGNvbmRpdGlvbjogZGF0YS5jb25kaXRpb24sXG4gICAgdGVtcGVyYXR1cmU6IGRhdGEudGVtcF9jLFxuICAgIGZlZWxzTGlrZTogZGF0YS5mZWVsc2xpa2VfYyxcbiAgICB3aW5kOiBkYXRhLndpbmRfbXBoLFxuICAgIHByZXNzdXJlOiBkYXRhLnByZXNzdXJlX21iLFxuICAgIGh1bWlkaXR5OiBkYXRhLmh1bWlkaXR5LFxuICAgIGlzZGF5OiBkYXRhLmlzX2RheSxcbiAgfTtcbiAgcmV0dXJuIHdlYXRoZXI7XG59O1xuXG5jb25zdCBnZXRGb3JlY2FzdERhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xuICBjb25zdCBmb3JlY2FzdCA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHNlbGVjdGVkRGF5ID0gZGF0YVtpXS5kYXk7XG5cbiAgICBjb25zdCBkYXkgPSB7XG4gICAgICBjb25kaXRpb246IHNlbGVjdGVkRGF5LmNvbmRpdGlvbixcbiAgICAgIHRlbXBlcmF0dXJlOiBzZWxlY3RlZERheS5hdmd0ZW1wX2MsXG4gICAgICBodW1pZGl0eTogc2VsZWN0ZWREYXkuYXZnaHVtaWRpdHksXG4gICAgICByYWluUHJvYmFiaWxpdHk6IHNlbGVjdGVkRGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluLFxuICAgIH07XG5cbiAgICBmb3JlY2FzdC5wdXNoKGRheSk7XG4gIH1cbiAgcmV0dXJuIGZvcmVjYXN0O1xufTtcblxuY29uc3QgZ2V0TG9jYXRpb25EYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgY29uc3QgbG9jYXRpb24gPSB7XG4gICAgY291bnRyeTogZGF0YS5jb3VudHJ5LFxuICAgIGxvY2FsVGltZTogZGF0YS5sb2NhbHRpbWUsXG4gICAgY2l0eTogZGF0YS5uYW1lLFxuICB9O1xuXG4gIHJldHVybiBsb2NhdGlvbjtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaFdlYXRoZXIgPSBhc3luYyBmdW5jdGlvbiAobG9jYXRpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTJmOGRlMTI2MjE3NzRhZDJiYWQ3MDQzODI0MjMwNSZxPSR7bG9jYXRpb259JmRheXM9NGAsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgYWxlcnQoXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIgKyByZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGdldFdlYXRoZXJEYXRhKGRhdGEuY3VycmVudCk7XG4gICAgY29uc3QgZm9yZWNhc3RlZFdlYXRoZXIgPSBnZXRGb3JlY2FzdERhdGEoZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheSk7XG4gICAgY29uc3QgbG9jYXRpb25EYXRhID0gZ2V0TG9jYXRpb25EYXRhKGRhdGEubG9jYXRpb24pO1xuXG4gICAgcmV0dXJuIFtjdXJyZW50V2VhdGhlciwgZm9yZWNhc3RlZFdlYXRoZXIsIGxvY2F0aW9uRGF0YV07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlRoZXJlIHdhcyBhIHByb2JsZW1cIiwgZXJyb3IpO1xuICAgIHRocm93IG5ldyBFcnJvcihgU29tZXRoaW5nIHdlbnQgd3JvbmcsICR7ZXJyb3IubWVzc2FnZX0gYXBwZWFyZWRgKTtcbiAgfVxufTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL01hbnJvcGVbd2dodF0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTXlGb250XCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbjpyb290IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogQ2hhcnRlciwgXCJCaXRzdHJlYW0gQ2hhcnRlclwiLCBcIlNpdGthIFRleHRcIiwgQ2FtYnJpYSwgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIC0tbmF2LWNvbG9yOiAjNzlhZGRjO1xuICAtLWJhY2tncm91bmQtY29sb3I6ICNmZmVlOTM7XG4gIC0tZm9yZWNhc3QtLWNvbG9yOiAjZmNmNWM3O1xuICAtLWxvY2F0aW9uLS1jb2xvcjogI2YwYTg2ODtcbiAgLS1mb290ZXItLWNvbG9yOiAjZjBhODY4O1xuICAtLWhlYWRlci0tY29sb3I6ICNmZmMwOWY7XG4gIC0tYWNjZW50LWNvbG9yOiAjZTRmZjFhO1xufVxuXG5idXR0b24jY2hlY2s6aG92ZXIsXG5idXR0b24ub3Blbk5hdjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmdpdEh1YkxvZ286aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubmF2ICo6aG92ZXIge1xuICBjb2xvcjogcmVkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi53ZWF0aGVySWNvbixcbi5jb25kaXRpb25JbWcsXG4uZm9yZWNhc3RJY29uIHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4vKiBoZWFkZXIgKi9cblxubmF2IHtcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1jb2xvcik7XG59XG5cbi5tZW51QnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTVjaDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG59XG5cbi5tZW51QnRuIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XG59XG4ubWVudUJ0bi5hY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG5idXR0b24ub3Blbk1lbnUge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiAyY2g7XG59XG5cbi5vcGVuTWVudSB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLyogbWFpbiAqL1xuXG5ib2R5IHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG4uc2VhcmNoIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAycmVtO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMzBweDtcbiAgcGFkZGluZzogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLS1jb2xvcik7XG4gIGJveC1zaGFkb3c6IDByZW0gMC4xcmVtIDAuN3JlbSB2YXIoLS1oZWFkZXItLWNvbG9yKTtcbn1cblxuLndlYXRoZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiAycmVtO1xuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMiwgMWZyKSAvIHJlcGVhdCgzLCAxZnIpO1xuICBnYXA6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICBoZWlnaHQ6IDg1dmg7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuLmxvY2F0aW9uIHtcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb2NhdGlvbi0tY29sb3IpO1xuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG5cbiN0b21vcnJvdyB7XG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcbn1cblxuI2ZvbGxvd2luZ0RheSB7XG4gIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcbn1cblxuI2luVHdvRGF5cyB7XG4gIGdyaWQtYXJlYTogMiAvIDMgLyAzIC8gNDtcbn1cblxuLyogdG9kYXkgKi9cblxuLnRvZGF5IHtcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JlY2FzdC0tY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBnYXA6IDEuNXJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDYsIDFmcikgLyByZXBlYXQoMiwgMWZyKTtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG59XG5cbi5jb25kaXRpb25Ub2RheSB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuICBncmlkLXJvdzogMS0zO1xuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4ud2VhdGhlckljb24ge1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4uZGF0ZSB7XG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcbn1cblxuLmNvbmRpdGlvbkltZyB7XG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG59XG5cbi50ZW1wZXJhdHVyZSB7XG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMztcbn1cblxuLmZlZWxzTGlrZSB7XG4gIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMztcbn1cblxuLndpbmQge1xuICBncmlkLWFyZWE6IDQgLyAxIC8gNSAvIDM7XG59XG5cbi5odW1pZGl0eSB7XG4gIGdyaWQtYXJlYTogNSAvIDEgLyA2IC8gMztcbn1cblxuLnByZXNzdXJlIHtcbiAgZ3JpZC1hcmVhOiA2IC8gMSAvIDcgLyAzO1xufVxuXG4udGVtcGVyYXR1cmUsXG4uZmVlbHNMaWtlLFxuLndpbmQsXG4uaHVtaWRpdHksXG4ucHJlc3N1cmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnAge1xuICBmb250LXNpemU6IDEuN3JlbTtcbn1cblxuLyogbG9jYXRpb24gKi9cblxuLmxvY2F0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbn1cblxuLmNpdHkge1xuICBmb250LXNpemU6IDMuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb3VudHJ5IHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbi50aW1lIHtcbiAgZm9udC1zaXplOiAyLjJyZW07XG59XG5cbi8qIGZvcmVjYXN0ICovXG5cbi5mb3JlY2FzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcmVjYXN0LS1jb2xvcik7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCg0LCAxZnIpIC8gcmVwZWF0KDMsIDFmcik7XG4gIGdhcDogMXJlbTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi50b2RheSxcbi5mb3JlY2FzdCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvb3Rlci0tY29sb3IpO1xufVxuXG4uZm9yZWNhc3REYXRlIHtcbiAgZ3JpZC1hcmVhOiAxLyAxLyAyLyA0O1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjhyZW07XG59XG5cbi5mb3JlY2FzdEljb24ge1xuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDQ7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4uZm9yZWNhc3RlZFRlbXBlcmF0dXJlIHtcbiAgZ3JpZC1hcmVhOiAzIC8gMSAvIDUgLyAyO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uZm9yZWNhc3RlZFJhaW4ge1xuICBncmlkLWFyZWE6IDMgLyAyIC8gNSAvIDM7XG59XG5cbi5mb3JlY2FzdGVkSHVtaWRpdHkge1xuICBncmlkLWFyZWE6IDMgLyAzIC8gNSAvIDQ7XG59XG5cbi5mb3JlY2FzdFBhcmFtSWNvbiB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5mb3JlY2FzdGVkSHVtaWRpdHksXG4uZm9yZWNhc3RlZFJhaW4sXG4uZm9yZWNhc3RlZFRlbXBlcmF0dXJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4vKiBmb3JtICovXG5cbi5sb2NhdGlvbkZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDJyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuYnV0dG9uI2NoZWNrIHtcbiAgcGFkZGluZzogMC41cmVtIDEuN3JlbTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXItcmFkaXVzOiAwLjlyZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWZvb3Rlci0tY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuaDEge1xuICBmb250LWZhbWlseTogXCJNeUZvbnRcIiwgXCJCaXRzdHJlYW0gQ2hhcnRlclwiLCBcIlNpdGthIFRleHRcIiwgQ2FtYnJpYSwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMy40cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxubGFiZWwge1xuICBmb250LXNpemU6IDJyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XG59XG5cbmlucHV0IHtcbiAgcGFkZGluZzogMC43cmVtIDEuNXJlbTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9yZWNhc3QtLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5lcnJvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2NXB4O1xuICBsZWZ0OiAxOTBweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbmlucHV0LnZhbGlkIHtcbiAgYm9yZGVyOiAycHggZ3JlZW4gc29saWQ7XG59XG5cbmlucHV0LmludmFsaWQge1xuICBib3JkZXI6IDJweCByZWQgc29saWQ7XG59XG5cbi8qIGZvb3RlciAqL1xuXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb290ZXItLWNvbG9yKTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBnYXA6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGhlaWdodDogN3ZoO1xuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xufVxuXG4uZ2l0SHViTG9nbyB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IGF1dG87XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwrREFBd0Q7RUFDeEQsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1RUFBdUU7RUFDdkUsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQiwyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQix3QkFBd0I7RUFDeEIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTs7O0VBR0Us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QUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSx3RUFBd0U7RUFDeEUsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtFQUNiLHdDQUF3QztFQUN4QyxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQSxXQUFXOztBQUVYO0VBQ0Usc0NBQXNDO0VBQ3RDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsYUFBYTtFQUNiLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk15Rm9udFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9mb250cy9NYW5yb3BlW3dnaHRdLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtZmFtaWx5OiBDaGFydGVyLCBcXFwiQml0c3RyZWFtIENoYXJ0ZXJcXFwiLCBcXFwiU2l0a2EgVGV4dFxcXCIsIENhbWJyaWEsIHNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIC0tbmF2LWNvbG9yOiAjNzlhZGRjO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZlZTkzO1xcbiAgLS1mb3JlY2FzdC0tY29sb3I6ICNmY2Y1Yzc7XFxuICAtLWxvY2F0aW9uLS1jb2xvcjogI2YwYTg2ODtcXG4gIC0tZm9vdGVyLS1jb2xvcjogI2YwYTg2ODtcXG4gIC0taGVhZGVyLS1jb2xvcjogI2ZmYzA5ZjtcXG4gIC0tYWNjZW50LWNvbG9yOiAjZTRmZjFhO1xcbn1cXG5cXG5idXR0b24jY2hlY2s6aG92ZXIsXFxuYnV0dG9uLm9wZW5OYXY6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZ2l0SHViTG9nbzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbm5hdiAqOmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi53ZWF0aGVySWNvbixcXG4uY29uZGl0aW9uSW1nLFxcbi5mb3JlY2FzdEljb24ge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi8qIGhlYWRlciAqL1xcblxcbm5hdiB7XFxuICBwYWRkaW5nOiAycmVtIDFyZW07XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWNvbG9yKTtcXG59XFxuXFxuLm1lbnVCdG4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDE1Y2g7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuLm1lbnVCdG4ge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4ubWVudUJ0bi5hY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuYnV0dG9uLm9wZW5NZW51IHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIHdpZHRoOiAyY2g7XFxufVxcblxcbi5vcGVuTWVudSB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG4vKiBtYWluICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi5zZWFyY2gge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyMzBweDtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItLWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IDByZW0gMC4xcmVtIDAuN3JlbSB2YXIoLS1oZWFkZXItLWNvbG9yKTtcXG59XFxuXFxuLndlYXRoZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMiwgMWZyKSAvIHJlcGVhdCgzLCAxZnIpO1xcbiAgZ2FwOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICBoZWlnaHQ6IDg1dmg7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5sb2NhdGlvbiB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1sb2NhdGlvbi0tY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuI3RvbW9ycm93IHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG59XFxuXFxuI2ZvbGxvd2luZ0RheSB7XFxuICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XFxufVxcblxcbiNpblR3b0RheXMge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMyAvIDMgLyA0O1xcbn1cXG5cXG4vKiB0b2RheSAqL1xcblxcbi50b2RheSB7XFxuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JlY2FzdC0tY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGdhcDogMS41cmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCg2LCAxZnIpIC8gcmVwZWF0KDIsIDFmcik7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcblxcbi5jb25kaXRpb25Ub2RheSB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGdyaWQtcm93OiAxLTM7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4ud2VhdGhlckljb24ge1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5kYXRlIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG59XFxuXFxuLmNvbmRpdGlvbkltZyB7XFxuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XFxufVxcblxcbi50ZW1wZXJhdHVyZSB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDM7XFxufVxcblxcbi5mZWVsc0xpa2Uge1xcbiAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAzO1xcbn1cXG5cXG4ud2luZCB7XFxuICBncmlkLWFyZWE6IDQgLyAxIC8gNSAvIDM7XFxufVxcblxcbi5odW1pZGl0eSB7XFxuICBncmlkLWFyZWE6IDUgLyAxIC8gNiAvIDM7XFxufVxcblxcbi5wcmVzc3VyZSB7XFxuICBncmlkLWFyZWE6IDYgLyAxIC8gNyAvIDM7XFxufVxcblxcbi50ZW1wZXJhdHVyZSxcXG4uZmVlbHNMaWtlLFxcbi53aW5kLFxcbi5odW1pZGl0eSxcXG4ucHJlc3N1cmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnAge1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxufVxcblxcbi8qIGxvY2F0aW9uICovXFxuXFxuLmxvY2F0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uY2l0eSB7XFxuICBmb250LXNpemU6IDMuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY291bnRyeSB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLnRpbWUge1xcbiAgZm9udC1zaXplOiAyLjJyZW07XFxufVxcblxcbi8qIGZvcmVjYXN0ICovXFxuXFxuLmZvcmVjYXN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcmVjYXN0LS1jb2xvcik7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoNCwgMWZyKSAvIHJlcGVhdCgzLCAxZnIpO1xcbiAgZ2FwOiAxcmVtO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi50b2RheSxcXG4uZm9yZWNhc3Qge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm9vdGVyLS1jb2xvcik7XFxufVxcblxcbi5mb3JlY2FzdERhdGUge1xcbiAgZ3JpZC1hcmVhOiAxLyAxLyAyLyA0O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLmZvcmVjYXN0SWNvbiB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDQ7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0ZWRUZW1wZXJhdHVyZSB7XFxuICBncmlkLWFyZWE6IDMgLyAxIC8gNSAvIDI7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG4uZm9yZWNhc3RlZFJhaW4ge1xcbiAgZ3JpZC1hcmVhOiAzIC8gMiAvIDUgLyAzO1xcbn1cXG5cXG4uZm9yZWNhc3RlZEh1bWlkaXR5IHtcXG4gIGdyaWQtYXJlYTogMyAvIDMgLyA1IC8gNDtcXG59XFxuXFxuLmZvcmVjYXN0UGFyYW1JY29uIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4uZm9yZWNhc3RlZEh1bWlkaXR5LFxcbi5mb3JlY2FzdGVkUmFpbixcXG4uZm9yZWNhc3RlZFRlbXBlcmF0dXJlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4vKiBmb3JtICovXFxuXFxuLmxvY2F0aW9uRm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuYnV0dG9uI2NoZWNrIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxLjdyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYm9yZGVyLXJhZGl1czogMC45cmVtO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1mb290ZXItLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LWZhbWlseTogXFxcIk15Rm9udFxcXCIsIFxcXCJCaXRzdHJlYW0gQ2hhcnRlclxcXCIsIFxcXCJTaXRrYSBUZXh0XFxcIiwgQ2FtYnJpYSwgc2VyaWY7XFxuICBmb250LXNpemU6IDMuNHJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuXFxubGFiZWwge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3JlbTtcXG59XFxuXFxuaW5wdXQge1xcbiAgcGFkZGluZzogMC43cmVtIDEuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcmVjYXN0LS1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5lcnJvciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDY1cHg7XFxuICBsZWZ0OiAxOTBweDtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuaW5wdXQudmFsaWQge1xcbiAgYm9yZGVyOiAycHggZ3JlZW4gc29saWQ7XFxufVxcblxcbmlucHV0LmludmFsaWQge1xcbiAgYm9yZGVyOiAycHggcmVkIHNvbGlkO1xcbn1cXG5cXG4vKiBmb290ZXIgKi9cXG5cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9vdGVyLS1jb2xvcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBoZWlnaHQ6IDd2aDtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxufVxcblxcbi5naXRIdWJMb2dvIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vMTEzLnBuZ1wiOiBcIi4vc3JjL2ltYWdlL2RheS8xMTMucG5nXCIsXG5cdFwiLi8xMTYucG5nXCI6IFwiLi9zcmMvaW1hZ2UvZGF5LzExNi5wbmdcIixcblx0XCIuLzExOS5wbmdcIjogXCIuL3NyYy9pbWFnZS9kYXkvMTE5LnBuZ1wiLFxuXHRcIi4vMTIyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlL2RheS8xMjIucG5nXCIsXG5cdFwiLi8xNDMucG5nXCI6IFwiLi9zcmMvaW1hZ2UvZGF5LzE0My5wbmdcIixcblx0XCIuLzE3Ni5wbmdcIjogXCIuL3NyYy9pbWFnZS9kYXkvMTc2LnBuZ1wiLFxuXHRcIi4vMTc5LnBuZ1wiOiBcIi4vc3JjL2ltYWdlL2RheS8xNzkucG5nXCIsXG5cdFwiLi8xODIucG5nXCI6IFwiLi9zcmMvaW1hZ2UvZGF5LzE4Mi5wbmdcIixcblx0XCIuLzE4NS5wbmdcIjogXCIuL3NyYy9pbWFnZS9kYXkvMTg1LnBuZ1wiLFxuXHRcIi4vMjAwLnBuZ1wiOiBcIi4vc3JjL2ltYWdlL2RheS8yMDAucG5nXCIsXG5cdFwiLi8yMjcucG5nXCI6IFwiLi9zcmMvaW1hZ2UvZGF5LzIyNy5wbmdcIixcblx0XCIuLzIzMC5wbmdcIjogXCIuL3NyYy9pbWFnZS9kYXkvMjMwLnBuZ1wiLFxuXHRcIi4vMjQ4LnBuZ1wiOiBcIi4vc3JjL2ltYWdlL2RheS8yNDgucG5nXCIsXG5cdFwiLi8yNjAucG5nXCI6IFwiLi9zcmMvaW1hZ2UvZGF5LzI2MC5wbmdcIixcblx0XCIuLzI2My5wbmdcIjogXCIuL3NyYy9pbWFnZS9kYXkvMjYzLnBuZ1wiLFxuXHRcIi4vMjY2LnBuZ1wiOiBcIi4vc3JjL2ltYWdlL2RheS8yNjYucG5nXCIsXG5cdFwiLi8yODEucG5nXCI6IFwiLi9zcmMvaW1hZ2UvZGF5LzI4MS5wbmdcIixcblx0XCIuLzI4NC5wbmdcIjogXCIuL3NyYy9pbWFnZS9kYXkvMjg0LnBuZ1wiLFxuXHRcIi4vMjkzLnBuZ1wiOiBcIi4vc3JjL2ltYWdlL2RheS8yOTMucG5nXCIsXG5cdFwiLi8yOTYucG5nXCI6IFwiLi9zcmMvaW1hZ2UvZGF5LzI5Ni5wbmdcIixcblx0XCIuLzI5OS5wbmdcIjogXCIuL3NyYy9pbWFnZS9kYXkvMjk5LnBuZ1wiLFxuXHRcIi4vMzAyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlL2RheS8zMDIucG5nXCIsXG5cdFwiLi8zMDUucG5nXCI6IFwiLi9zcmMvaW1hZ2UvZGF5LzMwNS5wbmdcIixcblx0XCIuLzMwOC5wbmdcIjogXCIuL3NyYy9pbWFnZS9kYXkvMzA4LnBuZ1wiLFxuXHRcIi4vMzExLnBuZ1wiOiBcIi4vc3JjL2ltYWdlL2RheS8zMTEucG5nXCIsXG5cdFwiLi8zMTQucG5nXCI6IFwiLi9zcmMvaW1hZ2UvZGF5LzMxNC5wbmdcIixcblx0XCIuLzMxNy5wbmdcIjogXCIuL3NyYy9pbWFnZS9kYXkvMzE3LnBuZ1wiLFxuXHRcIi4vMzIwLnBuZ1wiOiBcIi4vc3JjL2ltYWdlL2RheS8zMjAucG5nXCIsXG5cdFwiLi8zMjMucG5nXCI6IFwiLi9zcmMvaW1hZ2UvZGF5LzMyMy5wbmdcIixcblx0XCIuLzMyNi5wbmdcIjogXCIuL3NyYy9pbWFnZS9kYXkvMzI2LnBuZ1wiLFxuXHRcIi4vMzI5LnBuZ1wiOiBcIi4vc3JjL2ltYWdlL2RheS8zMjkucG5nXCIsXG5cdFwiLi8zMzIucG5nXCI6IFwiLi9zcmMvaW1hZ2UvZGF5LzMzMi5wbmdcIixcblx0XCIuLzMzNS5wbmdcIjogXCIuL3NyYy9pbWFnZS9kYXkvMzM1LnBuZ1wiLFxuXHRcIi4vMzM4LnBuZ1wiOiBcIi4vc3JjL2ltYWdlL2RheS8zMzgucG5nXCIsXG5cdFwiLi8zNTAucG5nXCI6IFwiLi9zcmMvaW1hZ2UvZGF5LzM1MC5wbmdcIixcblx0XCIuLzM1My5wbmdcIjogXCIuL3NyYy9pbWFnZS9kYXkvMzUzLnBuZ1wiLFxuXHRcIi4vMzU2LnBuZ1wiOiBcIi4vc3JjL2ltYWdlL2RheS8zNTYucG5nXCIsXG5cdFwiLi8zNTkucG5nXCI6IFwiLi9zcmMvaW1hZ2UvZGF5LzM1OS5wbmdcIixcblx0XCIuLzM2Mi5wbmdcIjogXCIuL3NyYy9pbWFnZS9kYXkvMzYyLnBuZ1wiLFxuXHRcIi4vMzY1LnBuZ1wiOiBcIi4vc3JjL2ltYWdlL2RheS8zNjUucG5nXCIsXG5cdFwiLi8zNjgucG5nXCI6IFwiLi9zcmMvaW1hZ2UvZGF5LzM2OC5wbmdcIixcblx0XCIuLzM3MS5wbmdcIjogXCIuL3NyYy9pbWFnZS9kYXkvMzcxLnBuZ1wiLFxuXHRcIi4vMzc0LnBuZ1wiOiBcIi4vc3JjL2ltYWdlL2RheS8zNzQucG5nXCIsXG5cdFwiLi8zNzcucG5nXCI6IFwiLi9zcmMvaW1hZ2UvZGF5LzM3Ny5wbmdcIixcblx0XCIuLzM4Ni5wbmdcIjogXCIuL3NyYy9pbWFnZS9kYXkvMzg2LnBuZ1wiLFxuXHRcIi4vMzg5LnBuZ1wiOiBcIi4vc3JjL2ltYWdlL2RheS8zODkucG5nXCIsXG5cdFwiLi8zOTIucG5nXCI6IFwiLi9zcmMvaW1hZ2UvZGF5LzM5Mi5wbmdcIixcblx0XCIuLzM5NS5wbmdcIjogXCIuL3NyYy9pbWFnZS9kYXkvMzk1LnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWFnZS9kYXkgc3luYyBcXFxcLihwbmcpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi8xMTMucG5nXCI6IFwiLi9zcmMvaW1hZ2UvbmlnaHQvMTEzLnBuZ1wiLFxuXHRcIi4vMTE2LnBuZ1wiOiBcIi4vc3JjL2ltYWdlL25pZ2h0LzExNi5wbmdcIixcblx0XCIuLzExOS5wbmdcIjogXCIuL3NyYy9pbWFnZS9uaWdodC8xMTkucG5nXCIsXG5cdFwiLi8xMjIucG5nXCI6IFwiLi9zcmMvaW1hZ2UvbmlnaHQvMTIyLnBuZ1wiLFxuXHRcIi4vMTQzLnBuZ1wiOiBcIi4vc3JjL2ltYWdlL25pZ2h0LzE0My5wbmdcIixcblx0XCIuLzE3Ni5wbmdcIjogXCIuL3NyYy9pbWFnZS9uaWdodC8xNzYucG5nXCIsXG5cdFwiLi8xNzkucG5nXCI6IFwiLi9zcmMvaW1hZ2UvbmlnaHQvMTc5LnBuZ1wiLFxuXHRcIi4vMTgyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlL25pZ2h0LzE4Mi5wbmdcIixcblx0XCIuLzE4NS5wbmdcIjogXCIuL3NyYy9pbWFnZS9uaWdodC8xODUucG5nXCIsXG5cdFwiLi8yMDAucG5nXCI6IFwiLi9zcmMvaW1hZ2UvbmlnaHQvMjAwLnBuZ1wiLFxuXHRcIi4vMjI3LnBuZ1wiOiBcIi4vc3JjL2ltYWdlL25pZ2h0LzIyNy5wbmdcIixcblx0XCIuLzIzMC5wbmdcIjogXCIuL3NyYy9pbWFnZS9uaWdodC8yMzAucG5nXCIsXG5cdFwiLi8yNDgucG5nXCI6IFwiLi9zcmMvaW1hZ2UvbmlnaHQvMjQ4LnBuZ1wiLFxuXHRcIi4vMjYwLnBuZ1wiOiBcIi4vc3JjL2ltYWdlL25pZ2h0LzI2MC5wbmdcIixcblx0XCIuLzI2My5wbmdcIjogXCIuL3NyYy9pbWFnZS9uaWdodC8yNjMucG5nXCIsXG5cdFwiLi8yNjYucG5nXCI6IFwiLi9zcmMvaW1hZ2UvbmlnaHQvMjY2LnBuZ1wiLFxuXHRcIi4vMjgxLnBuZ1wiOiBcIi4vc3JjL2ltYWdlL25pZ2h0LzI4MS5wbmdcIixcblx0XCIuLzI4NC5wbmdcIjogXCIuL3NyYy9pbWFnZS9uaWdodC8yODQucG5nXCIsXG5cdFwiLi8yOTMucG5nXCI6IFwiLi9zcmMvaW1hZ2UvbmlnaHQvMjkzLnBuZ1wiLFxuXHRcIi4vMjk2LnBuZ1wiOiBcIi4vc3JjL2ltYWdlL25pZ2h0LzI5Ni5wbmdcIixcblx0XCIuLzI5OS5wbmdcIjogXCIuL3NyYy9pbWFnZS9uaWdodC8yOTkucG5nXCIsXG5cdFwiLi8zMDIucG5nXCI6IFwiLi9zcmMvaW1hZ2UvbmlnaHQvMzAyLnBuZ1wiLFxuXHRcIi4vMzA1LnBuZ1wiOiBcIi4vc3JjL2ltYWdlL25pZ2h0LzMwNS5wbmdcIixcblx0XCIuLzMwOC5wbmdcIjogXCIuL3NyYy9pbWFnZS9uaWdodC8zMDgucG5nXCIsXG5cdFwiLi8zMTEucG5nXCI6IFwiLi9zcmMvaW1hZ2UvbmlnaHQvMzExLnBuZ1wiLFxuXHRcIi4vMzE0LnBuZ1wiOiBcIi4vc3JjL2ltYWdlL25pZ2h0LzMxNC5wbmdcIixcblx0XCIuLzMxNy5wbmdcIjogXCIuL3NyYy9pbWFnZS9uaWdodC8zMTcucG5nXCIsXG5cdFwiLi8zMjAucG5nXCI6IFwiLi9zcmMvaW1hZ2UvbmlnaHQvMzIwLnBuZ1wiLFxuXHRcIi4vMzIzLnBuZ1wiOiBcIi4vc3JjL2ltYWdlL25pZ2h0LzMyMy5wbmdcIixcblx0XCIuLzMyNi5wbmdcIjogXCIuL3NyYy9pbWFnZS9uaWdodC8zMjYucG5nXCIsXG5cdFwiLi8zMjkucG5nXCI6IFwiLi9zcmMvaW1hZ2UvbmlnaHQvMzI5LnBuZ1wiLFxuXHRcIi4vMzMyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlL25pZ2h0LzMzMi5wbmdcIixcblx0XCIuLzMzNS5wbmdcIjogXCIuL3NyYy9pbWFnZS9uaWdodC8zMzUucG5nXCIsXG5cdFwiLi8zMzgucG5nXCI6IFwiLi9zcmMvaW1hZ2UvbmlnaHQvMzM4LnBuZ1wiLFxuXHRcIi4vMzUwLnBuZ1wiOiBcIi4vc3JjL2ltYWdlL25pZ2h0LzM1MC5wbmdcIixcblx0XCIuLzM1My5wbmdcIjogXCIuL3NyYy9pbWFnZS9uaWdodC8zNTMucG5nXCIsXG5cdFwiLi8zNTYucG5nXCI6IFwiLi9zcmMvaW1hZ2UvbmlnaHQvMzU2LnBuZ1wiLFxuXHRcIi4vMzU5LnBuZ1wiOiBcIi4vc3JjL2ltYWdlL25pZ2h0LzM1OS5wbmdcIixcblx0XCIuLzM2Mi5wbmdcIjogXCIuL3NyYy9pbWFnZS9uaWdodC8zNjIucG5nXCIsXG5cdFwiLi8zNjUucG5nXCI6IFwiLi9zcmMvaW1hZ2UvbmlnaHQvMzY1LnBuZ1wiLFxuXHRcIi4vMzY4LnBuZ1wiOiBcIi4vc3JjL2ltYWdlL25pZ2h0LzM2OC5wbmdcIixcblx0XCIuLzM3MS5wbmdcIjogXCIuL3NyYy9pbWFnZS9uaWdodC8zNzEucG5nXCIsXG5cdFwiLi8zNzQucG5nXCI6IFwiLi9zcmMvaW1hZ2UvbmlnaHQvMzc0LnBuZ1wiLFxuXHRcIi4vMzc3LnBuZ1wiOiBcIi4vc3JjL2ltYWdlL25pZ2h0LzM3Ny5wbmdcIixcblx0XCIuLzM4Ni5wbmdcIjogXCIuL3NyYy9pbWFnZS9uaWdodC8zODYucG5nXCIsXG5cdFwiLi8zODkucG5nXCI6IFwiLi9zcmMvaW1hZ2UvbmlnaHQvMzg5LnBuZ1wiLFxuXHRcIi4vMzkyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlL25pZ2h0LzM5Mi5wbmdcIixcblx0XCIuLzM5NS5wbmdcIjogXCIuL3NyYy9pbWFnZS9uaWdodC8zOTUucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlL25pZ2h0IHN5bmMgXFxcXC4ocG5nKSRcIjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgZmV0Y2hXZWF0aGVyIH0gZnJvbSBcIi4vd2VhdGhlckFQSVwiO1xuaW1wb3J0IHsgdXBkYXRlV2VhdGhlciwgdXBkYXRlRm9yZWNhc3QsIHVwZGF0ZUxvY2F0aW9uIH0gZnJvbSBcIi4vRE9NXCI7XG5cbmNvbnN0IG9wZW5NZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcGVuTWVudVwiKTtcbmNvbnN0IG1lbnVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51QnRuXCIpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb25Gb3JtXCIpO1xuY29uc3QgbG9jYXRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25cIik7XG5jb25zdCBlcnJvclNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yXCIpO1xuY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaGVja1wiKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBhY3RpdmF0ZURyb3Bkb3duKG1lbnVCdXR0b25zLCBvcGVuTWVudUJ0bik7XG4gIGdldFdlYXRoZXJEYXRhKFwiU2FuIEZyYW5jaXNjb1wiKTtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXZhbGlkYXRlSW5wdXQoKSkgcmV0dXJuO1xuICAgIGF3YWl0IGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uSW5wdXQudmFsdWUpO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgfSk7XG59KTtcblxubG9jYXRpb25JbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICB2YWxpZGF0ZUlucHV0KCk7XG59KTtcblxuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgaWYgKCF2YWxpZGF0ZUlucHV0KCkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFsZXJ0KFwiUGxlYXNlIHByb3ZpZGUgdmFsaWQgY2l0eSBuYW1lXCIpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gYWN0aXZhdGVEcm9wZG93bihtZW51QnR0bnMsIG9wZW5CdG4pIHtcbiAgb3BlbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1lbnVCdHRucy5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpKTtcbiAgICBvcGVuQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2dnbGVkXCIpO1xuICB9KTtcbn1cblxuY29uc3QgZ2V0V2VhdGhlckRhdGEgPSBhc3luYyBmdW5jdGlvbiAocGxhY2UpIHtcbiAgbGV0IGN1cnJlbnQ7XG4gIGxldCBmb3JlY2FzdGVkO1xuICBsZXQgbG9jYXRpb247XG4gIHRyeSB7XG4gICAgW2N1cnJlbnQsIGZvcmVjYXN0ZWQsIGxvY2F0aW9uXSA9IGF3YWl0IGZldGNoV2VhdGhlcihwbGFjZSk7XG4gICAgdXBkYXRlV2VhdGhlcihjdXJyZW50KTtcbiAgICB1cGRhdGVGb3JlY2FzdChmb3JlY2FzdGVkKTtcbiAgICB1cGRhdGVMb2NhdGlvbihsb2NhdGlvbik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHdlYXRoZXI6XCIsIGVycm9yKTtcbiAgfVxufTtcblxuY29uc3QgdmFsaWRhdGVJbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcGF0dGVybiA9IC9eW0EtWmEtel1bQS1aYS16XFxzJy1dezAsMTh9W0EtWmEtel0kLztcbiAgY29uc3QgaW5wdXRWYWx1ZSA9IGxvY2F0aW9uSW5wdXQudmFsdWUudHJpbSgpO1xuXG4gIGlmICghcGF0dGVybi50ZXN0KGlucHV0VmFsdWUpKSB7XG4gICAgZXJyb3JTcGFuLnRleHRDb250ZW50ID0gXCJJbnZhbGlkIGNpdHkgbmFtZVwiO1xuICAgIGxvY2F0aW9uSW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcInZhbGlkXCIpO1xuICAgIGxvY2F0aW9uSW5wdXQuY2xhc3NMaXN0LmFkZChcImludmFsaWRcIik7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGxvY2F0aW9uSW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImludmFsaWRcIik7XG4gIGxvY2F0aW9uSW5wdXQuY2xhc3NMaXN0LmFkZChcInZhbGlkXCIpO1xuICBlcnJvclNwYW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICByZXR1cm4gdHJ1ZTtcbn07XG4iXSwibmFtZXMiOlsiSlNPTmRhdGEiLCJyYWluSWNvbiIsInByZXNzdXJlSWNvbiIsImh1bWlkaXR5SWNvbiIsInRlbXBlcmF0dXJlSWNvbiIsImZlZWxzTGlrZUljb24iLCJ3aW5kSWNvbiIsImNvbmRpdGlvbkltZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbmRpdGlvblRvZGF5IiwidGVtcFRvZGF5IiwidGVtcEltZyIsImZlZWxzTGlrZVRvZGF5IiwiZmVlbHNMaWtlSW1nIiwid2luZFRvZGF5Iiwid2luZEltZyIsImh1bWlkaXR5VG9kYXkiLCJodW1pZGl0eUltZyIsInByZXNzdXJlVG9kYXkiLCJwcmVzc3VyZUltZyIsImNpdHkiLCJjb3VudHJ5IiwidGltZSIsInRvbW9ycm93Q29udGFpbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJmb2xsb3dpbmdEYXlDb250YWluZXIiLCJpblR3b0RheXNDb250YWluZXIiLCJmb3JlY2FzdENvbnRhaW5lcnMiLCJwdXNoIiwiZGF5SW1hZ2VzIiwiaW1wb3J0QWxsIiwicmVxdWlyZSIsImNvbnRleHQiLCJuaWdodEltYWdlcyIsInIiLCJpbWFnZXMiLCJrZXlzIiwibWFwIiwiaXRlbSIsInJlcGxhY2UiLCJmb3JtYXRJY29uRWxlbWVudCIsImVsZW1lbnQiLCJzb3VyY2UiLCJjbGFzc0xpc3QiLCJhZGQiLCJzcmMiLCJhZGRDb25kaXRpb25JbWFnZSIsIndlYXRoZXJEYXRhIiwiaXNEYXkiLCJpc2RheSIsImNvbmRpdGlvbkNvZGUiLCJjb25kaXRpb24iLCJjb2RlIiwid2VhdGhlckljb25Db2RlIiwiZmluZCIsIndlYXRoZXIiLCJpY29uIiwiZmlsbFBhcmFtZXRlclZhbHVlcyIsInRleHRDb250ZW50IiwidGV4dCIsImZlZWxzTGlrZSIsInByZXNzdXJlIiwidGVtcGVyYXR1cmUiLCJ3aW5kIiwiaHVtaWRpdHkiLCJhZGRQYXJhbWV0ZXJJY29ucyIsImFkZEZvcmVjYXN0Q29uZGl0aW9uSW1hZ2UiLCJpbWFnZSIsImZpbGxPdXRGb3JlY2FzdERhdGEiLCJyYWluIiwiZGF0ZSIsImZvcmVjYXN0RGF0YSIsImlkIiwicmFpblByb2JhYmlsaXR5IiwidG9kYXkiLCJEYXRlIiwidG9tb3Jyb3ciLCJpblR3b0RheXMiLCJpblRocmVlRGF5cyIsInNldERhdGUiLCJnZXREYXRlIiwidG9EYXRlU3RyaW5nIiwiYXBwZW5kQ29udGFpbmVyRGF0YSIsImNvbnRhaW5lciIsImRhaWx5Rm9yZWNhc3QiLCJmb3JlY2FzdERhdGUiLCJ3ZWF0aGVySW1nIiwidGVtcGVyYXR1cmVGb3JlY2FzdEljb24iLCJyYWluRm9yZWNhc3RJY29uIiwiaHVtaWRpdHlGb3JlY2FzdEljb24iLCJmb3JlY2FzdGVkVGVtcGVyYXR1cmUiLCJmb3JlY2FzdGVkUmFpbiIsImZvcmVjYXN0ZWRIdW1pZGl0eSIsInVwZGF0ZVdlYXRoZXIiLCJ1cGRhdGVGb3JlY2FzdCIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwiaW5kZXgiLCJ1cGRhdGVMb2NhdGlvbiIsImxvY2F0aW9uRGF0YSIsImxvY2FsVGltZSIsImRheSIsIm5pZ2h0IiwiZ2V0V2VhdGhlckRhdGEiLCJkYXRhIiwidGVtcF9jIiwiZmVlbHNsaWtlX2MiLCJ3aW5kX21waCIsInByZXNzdXJlX21iIiwiaXNfZGF5IiwiZ2V0Rm9yZWNhc3REYXRhIiwiZm9yZWNhc3QiLCJpIiwibGVuZ3RoIiwic2VsZWN0ZWREYXkiLCJhdmd0ZW1wX2MiLCJhdmdodW1pZGl0eSIsImRhaWx5X2NoYW5jZV9vZl9yYWluIiwiZ2V0TG9jYXRpb25EYXRhIiwibG9jYXRpb24iLCJsb2NhbHRpbWUiLCJuYW1lIiwiZmV0Y2hXZWF0aGVyIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1vZGUiLCJvayIsImFsZXJ0IiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwianNvbiIsImN1cnJlbnRXZWF0aGVyIiwiY3VycmVudCIsImZvcmVjYXN0ZWRXZWF0aGVyIiwiZm9yZWNhc3RkYXkiLCJlcnJvciIsIm1lc3NhZ2UiLCJvcGVuTWVudUJ0biIsIm1lbnVCdXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvcm0iLCJsb2NhdGlvbklucHV0IiwiZXJyb3JTcGFuIiwic3VibWl0QnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFjdGl2YXRlRHJvcGRvd24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidmFsaWRhdGVJbnB1dCIsInZhbHVlIiwicmVzZXQiLCJtZW51QnR0bnMiLCJvcGVuQnRuIiwiYnV0dG9uIiwidG9nZ2xlIiwicGxhY2UiLCJmb3JlY2FzdGVkIiwicGF0dGVybiIsImlucHV0VmFsdWUiLCJ0cmltIiwidGVzdCIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=