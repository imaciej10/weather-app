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
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=2f8de12621774ad2bad70438242305&q=${location}&days=4`, {
      mode: "cors"
    });
    if (!response.ok) {
      alert("Something went wrong");
      throw new Error("Something went wrong" + response.statusText);
    }
    const data = await response.json();
    console.log(data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxPQUFPLFlBQVksTUFBTSxXQUFXLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLFdBQVcsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFNBQVMsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFP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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3JFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVB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O0lBQzFCMUQsb0RBQWMsQ0FBQ3FCLFFBQVEsQ0FBQztFQUMxQixDQUFDLENBQUMsT0FBT2dCLEtBQUssRUFBRTtJQUNkekMsT0FBTyxDQUFDeUMsS0FBSyxDQUFDLHlCQUF5QixFQUFFQSxLQUFLLENBQUM7RUFDakQ7QUFDRixDQUFDO0FBRUQsTUFBTWEsYUFBYSxHQUFHLFNBQUFBLENBQUEsRUFBWTtFQUNoQyxNQUFNUyxPQUFPLEdBQUcsc0NBQXNDO0VBQ3RELE1BQU1DLFVBQVUsR0FBR2pCLGFBQWEsQ0FBQ1EsS0FBSyxDQUFDVSxJQUFJLENBQUMsQ0FBQztFQUU3QyxJQUFJLENBQUNGLE9BQU8sQ0FBQ0csSUFBSSxDQUFDRixVQUFVLENBQUMsRUFBRTtJQUM3QmhCLFNBQVMsQ0FBQ3JGLFdBQVcsR0FBRyxtQkFBbUI7SUFDM0NvRixhQUFhLENBQUNuRyxTQUFTLENBQUN1SCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ3ZDcEIsYUFBYSxDQUFDbkcsU0FBUyxDQUFDQyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBQ3RDLE9BQU8sS0FBSztFQUNkO0VBQ0FrRyxhQUFhLENBQUNuRyxTQUFTLENBQUN1SCxNQUFNLENBQUMsU0FBUyxDQUFDO0VBQ3pDcEIsYUFBYSxDQUFDbkcsU0FBUyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO0VBQ3BDbUcsU0FBUyxDQUFDckYsV0FBVyxHQUFHLEVBQUU7RUFDMUIsT0FBTyxJQUFJO0FBQ2IsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2pzb25EQVRBLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3dlYXRoZXJBUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2ltYWdlL2RheS8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZykkIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2ltYWdlL25pZ2h0LyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nKSQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSlNPTmRhdGEgfSBmcm9tIFwiLi9qc29uREFUQVwiO1xuaW1wb3J0IHJhaW5JY29uIGZyb20gXCIuL2ltYWdlL2ljb24vcmFpbi5zdmdcIjtcbmltcG9ydCBwcmVzc3VyZUljb24gZnJvbSBcIi4vaW1hZ2UvaWNvbi9wcmVzc3VyZS5zdmdcIjtcbmltcG9ydCBodW1pZGl0eUljb24gZnJvbSBcIi4vaW1hZ2UvaWNvbi9odW1pZGl0eS5zdmdcIjtcbmltcG9ydCB0ZW1wZXJhdHVyZUljb24gZnJvbSBcIi4vaW1hZ2UvaWNvbi90ZW1wZXJhdHVyZS5zdmdcIjtcbmltcG9ydCBmZWVsc0xpa2VJY29uIGZyb20gXCIuL2ltYWdlL2ljb24vZmVlbHNsaWtlLnN2Z1wiO1xuaW1wb3J0IHdpbmRJY29uIGZyb20gXCIuL2ltYWdlL2ljb24vd2luZC5zdmdcIjtcblxuY29uc3QgY29uZGl0aW9uSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25kaXRpb25JbWdcIik7XG5jb25zdCBjb25kaXRpb25Ub2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29uZGl0aW9uVG9kYXlcIik7XG5jb25zdCB0ZW1wVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBUb2RheVwiKTtcbmNvbnN0IHRlbXBJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXBJbWdcIik7XG5jb25zdCBmZWVsc0xpa2VUb2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmVlbHNMaWtlVG9kYXlcIik7XG5jb25zdCBmZWVsc0xpa2VJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWxzTGlrZUltZ1wiKTtcbmNvbnN0IHdpbmRUb2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZFRvZGF5XCIpO1xuY29uc3Qgd2luZEltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZEltZ1wiKTtcbmNvbnN0IGh1bWlkaXR5VG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bWlkaXR5VG9kYXlcIik7XG5jb25zdCBodW1pZGl0eUltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRpdHlJbWdcIik7XG5jb25zdCBwcmVzc3VyZVRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVzc3VyZVRvZGF5XCIpO1xuY29uc3QgcHJlc3N1cmVJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByZXNzdXJlSW1nXCIpO1xuXG5jb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXR5XCIpO1xuY29uc3QgY291bnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY291bnRyeVwiKTtcbmNvbnN0IHRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWVcIik7XG5cbmNvbnN0IHRvbW9ycm93Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b21vcnJvd1wiKTtcbmNvbnN0IGZvbGxvd2luZ0RheUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9sbG93aW5nRGF5XCIpO1xuY29uc3QgaW5Ud29EYXlzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpblR3b0RheXNcIik7XG5cbmNvbnN0IGZvcmVjYXN0Q29udGFpbmVycyA9IFtdO1xuZm9yZWNhc3RDb250YWluZXJzLnB1c2goXG4gIHRvbW9ycm93Q29udGFpbmVyLFxuICBmb2xsb3dpbmdEYXlDb250YWluZXIsXG4gIGluVHdvRGF5c0NvbnRhaW5lclxuKTtcblxuY29uc3QgZGF5SW1hZ2VzID0gaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dChcIi4vaW1hZ2UvZGF5XCIsIGZhbHNlLCAvXFwuKHBuZykkLykpO1xuXG5jb25zdCBuaWdodEltYWdlcyA9IGltcG9ydEFsbChcbiAgcmVxdWlyZS5jb250ZXh0KFwiLi9pbWFnZS9uaWdodFwiLCBmYWxzZSwgL1xcLihwbmcpJC8pXG4pO1xuXG5mdW5jdGlvbiBpbXBvcnRBbGwocikge1xuICBsZXQgaW1hZ2VzID0ge307XG4gIHIua2V5cygpLm1hcCgoaXRlbSkgPT4ge1xuICAgIGltYWdlc1tpdGVtLnJlcGxhY2UoXCIuL1wiLCBcIlwiKV0gPSByKGl0ZW0pO1xuICB9KTtcbiAgcmV0dXJuIGltYWdlcztcbn1cblxuY29uc3QgZm9ybWF0SWNvbkVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgc291cmNlKSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIndlYXRoZXJJY29uXCIpO1xuICBlbGVtZW50LnNyYyA9IHNvdXJjZTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5jb25zdCBhZGRDb25kaXRpb25JbWFnZSA9IGZ1bmN0aW9uICh3ZWF0aGVyRGF0YSkge1xuICBjb25zdCBpc0RheSA9IHdlYXRoZXJEYXRhLmlzZGF5ID8gdHJ1ZSA6IGZhbHNlO1xuICBjb25zdCBjb25kaXRpb25Db2RlID0gd2VhdGhlckRhdGEuY29uZGl0aW9uLmNvZGU7XG4gIGxldCB3ZWF0aGVySWNvbkNvZGU7XG5cbiAgSlNPTmRhdGEuZmluZCgod2VhdGhlcikgPT4ge1xuICAgIGlmICh3ZWF0aGVyLmNvZGUgPT09IGNvbmRpdGlvbkNvZGUpIHtcbiAgICAgIHdlYXRoZXJJY29uQ29kZSA9IHdlYXRoZXIuaWNvbjtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChpc0RheSkge1xuICAgIGNvbmRpdGlvbkltZy5zcmMgPSBkYXlJbWFnZXNbYCR7d2VhdGhlckljb25Db2RlfS5wbmdgXTtcbiAgfSBlbHNlIHtcbiAgICBjb25kaXRpb25JbWcuc3JjID0gbmlnaHRJbWFnZXNbYCR7d2VhdGhlckljb25Db2RlfS5wbmdgXTtcbiAgfVxufTtcblxuY29uc3QgZmlsbFBhcmFtZXRlclZhbHVlcyA9IGZ1bmN0aW9uICh3ZWF0aGVyRGF0YSkge1xuICBjb25kaXRpb25Ub2RheS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmNvbmRpdGlvbi50ZXh0O1xuICBmZWVsc0xpa2VUb2RheS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmZlZWxzTGlrZSArIFwiIMKwQ1wiO1xuICBwcmVzc3VyZVRvZGF5LnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEucHJlc3N1cmUgKyBcIiBoUGFcIjtcbiAgdGVtcFRvZGF5LnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEudGVtcGVyYXR1cmUgKyBcIiDCsENcIjtcbiAgd2luZFRvZGF5LnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEud2luZCArIFwiIGttL2hcIjtcbiAgaHVtaWRpdHlUb2RheS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmh1bWlkaXR5ICsgXCIgJVwiO1xufTtcblxuY29uc3QgYWRkUGFyYW1ldGVySWNvbnMgPSBmdW5jdGlvbiAoKSB7XG4gIGZvcm1hdEljb25FbGVtZW50KGZlZWxzTGlrZUltZywgZmVlbHNMaWtlSWNvbik7XG4gIGZvcm1hdEljb25FbGVtZW50KHByZXNzdXJlSW1nLCBwcmVzc3VyZUljb24pO1xuICBmb3JtYXRJY29uRWxlbWVudCh3aW5kSW1nLCB3aW5kSWNvbik7XG4gIGZvcm1hdEljb25FbGVtZW50KHRlbXBJbWcsIHRlbXBlcmF0dXJlSWNvbik7XG4gIGZvcm1hdEljb25FbGVtZW50KGh1bWlkaXR5SW1nLCBodW1pZGl0eUljb24pO1xufTtcblxuY29uc3QgYWRkRm9yZWNhc3RDb25kaXRpb25JbWFnZSA9IGZ1bmN0aW9uIChpbWFnZSwgY29kZSkge1xuICBsZXQgd2VhdGhlckljb25Db2RlO1xuICBKU09OZGF0YS5maW5kKCh3ZWF0aGVyKSA9PiB7XG4gICAgaWYgKHdlYXRoZXIuY29kZSA9PT0gY29kZSkge1xuICAgICAgd2VhdGhlckljb25Db2RlID0gd2VhdGhlci5pY29uO1xuICAgIH1cbiAgICBpbWFnZS5zcmMgPSBkYXlJbWFnZXNbYCR7d2VhdGhlckljb25Db2RlfS5wbmdgXTtcbiAgfSk7XG59O1xuXG5jb25zdCBmaWxsT3V0Rm9yZWNhc3REYXRhID0gZnVuY3Rpb24gKFxuICB0ZW1wZXJhdHVyZSxcbiAgcmFpbixcbiAgaHVtaWRpdHksXG4gIGRhdGUsXG4gIGZvcmVjYXN0RGF0YSxcbiAgaWRcbikge1xuICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IGZvcmVjYXN0RGF0YS50ZW1wZXJhdHVyZSArIFwiIMKwQ1wiO1xuICByYWluLnRleHRDb250ZW50ID0gZm9yZWNhc3REYXRhLnJhaW5Qcm9iYWJpbGl0eSArIFwiICVcIjtcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBmb3JlY2FzdERhdGEuaHVtaWRpdHkgKyBcIiAlXCI7XG5cbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCB0b21vcnJvdyA9IG5ldyBEYXRlKHRvZGF5KTtcbiAgY29uc3QgaW5Ud29EYXlzID0gbmV3IERhdGUodG9kYXkpO1xuICBjb25zdCBpblRocmVlRGF5cyA9IG5ldyBEYXRlKHRvZGF5KTtcbiAgdG9tb3Jyb3cuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKyAxKTtcbiAgaW5Ud29EYXlzLnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICsgMik7XG4gIGluVGhyZWVEYXlzLnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICsgMyk7XG5cbiAgaWYgKGlkID09PSBcInRvbW9ycm93XCIpIGRhdGUudGV4dENvbnRlbnQgPSB0b21vcnJvdy50b0RhdGVTdHJpbmcoKTtcbiAgZWxzZSBpZiAoaWQgPT09IFwiZm9sbG93aW5nRGF5XCIpIGRhdGUudGV4dENvbnRlbnQgPSBpblR3b0RheXMudG9EYXRlU3RyaW5nKCk7XG4gIGVsc2UgaWYgKGlkID09PSBcImluVHdvRGF5c1wiKSBkYXRlLnRleHRDb250ZW50ID0gaW5UaHJlZURheXMudG9EYXRlU3RyaW5nKCk7XG59O1xuXG5jb25zdCBhcHBlbmRDb250YWluZXJEYXRhID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgZGFpbHlGb3JlY2FzdCkge1xuICBjb25zdCBjb25kaXRpb25Db2RlID0gZGFpbHlGb3JlY2FzdC5jb25kaXRpb24uY29kZTtcbiAgY29uc3QgZm9yZWNhc3REYXRlID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuZm9yZWNhc3REYXRlXCIpO1xuICBjb25zdCB3ZWF0aGVySW1nID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuZm9yZWNhc3RJY29uXCIpO1xuICBjb25zdCB0ZW1wZXJhdHVyZUZvcmVjYXN0SWNvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI2ZvcmVjYXN0ZWRUZW1wZXJhdHVyZUltZ1wiXG4gICk7XG4gIGNvbnN0IHJhaW5Gb3JlY2FzdEljb24gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIiNmb3JlY2FzdGVkUmFpbkltZ1wiKTtcbiAgY29uc3QgaHVtaWRpdHlGb3JlY2FzdEljb24gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIiNmb3JlY2FzdGVkSHVtaWRpdHlcIik7XG4gIGNvbnN0IGZvcmVjYXN0ZWRUZW1wZXJhdHVyZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuICAgIFwicC5mb3JlY2FzdGVkVGVtcGVyYXR1cmVcIlxuICApO1xuICBjb25zdCBmb3JlY2FzdGVkUmFpbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwicC5mb3JlY2FzdGVkUmFpblwiKTtcbiAgY29uc3QgZm9yZWNhc3RlZEh1bWlkaXR5ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJwLmZvcmVjYXN0ZWRIdW1pZGl0eVwiKTtcblxuICBmb3JtYXRJY29uRWxlbWVudCh0ZW1wZXJhdHVyZUZvcmVjYXN0SWNvbiwgdGVtcGVyYXR1cmVJY29uKTtcbiAgZm9ybWF0SWNvbkVsZW1lbnQocmFpbkZvcmVjYXN0SWNvbiwgcmFpbkljb24pO1xuICBmb3JtYXRJY29uRWxlbWVudChodW1pZGl0eUZvcmVjYXN0SWNvbiwgaHVtaWRpdHlJY29uKTtcbiAgYWRkRm9yZWNhc3RDb25kaXRpb25JbWFnZSh3ZWF0aGVySW1nLCBjb25kaXRpb25Db2RlKTtcbiAgZmlsbE91dEZvcmVjYXN0RGF0YShcbiAgICBmb3JlY2FzdGVkVGVtcGVyYXR1cmUsXG4gICAgZm9yZWNhc3RlZFJhaW4sXG4gICAgZm9yZWNhc3RlZEh1bWlkaXR5LFxuICAgIGZvcmVjYXN0RGF0ZSxcbiAgICBkYWlseUZvcmVjYXN0LFxuICAgIGNvbnRhaW5lci5pZFxuICApO1xufTtcbmV4cG9ydCBjb25zdCB1cGRhdGVXZWF0aGVyID0gZnVuY3Rpb24gKHdlYXRoZXJEYXRhKSB7XG4gIGFkZENvbmRpdGlvbkltYWdlKHdlYXRoZXJEYXRhKTtcbiAgZmlsbFBhcmFtZXRlclZhbHVlcyh3ZWF0aGVyRGF0YSk7XG4gIGFkZFBhcmFtZXRlckljb25zKCk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlRm9yZWNhc3QgPSBmdW5jdGlvbiAod2VhdGhlckRhdGEpIHtcbiAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICBmb3JlY2FzdENvbnRhaW5lcnMuZm9yRWFjaCgoY29udGFpbmVyLCBpbmRleCkgPT5cbiAgICBhcHBlbmRDb250YWluZXJEYXRhKGNvbnRhaW5lciwgd2VhdGhlckRhdGFbaW5kZXhdKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUxvY2F0aW9uID0gZnVuY3Rpb24gKGxvY2F0aW9uRGF0YSkge1xuICBjaXR5LnRleHRDb250ZW50ID0gbG9jYXRpb25EYXRhLmNpdHk7XG4gIGNvdW50cnkudGV4dENvbnRlbnQgPSBsb2NhdGlvbkRhdGEuY291bnRyeTtcbiAgdGltZS50ZXh0Q29udGVudCA9IGxvY2F0aW9uRGF0YS5sb2NhbFRpbWU7XG59O1xuIiwiZXhwb3J0IGNvbnN0IEpTT05kYXRhID0gW1xuICB7XG4gICAgY29kZTogMTAwMCxcbiAgICBkYXk6IFwiU3VubnlcIixcbiAgICBuaWdodDogXCJDbGVhclwiLFxuICAgIGljb246IDExMyxcbiAgfSxcbiAge1xuICAgIGNvZGU6IDEwMDMsXG4gICAgZGF5OiBcIlBhcnRseSBjbG91ZHlcIixcbiAgICBuaWdodDogXCJQYXJ0bHkgY2xvdWR5XCIsXG4gICAgaWNvbjogMTE2LFxuICB9LFxuICB7XG4gICAgY29kZTogMTAwNixcbiAgICBkYXk6IFwiQ2xvdWR5XCIsXG4gICAgbmlnaHQ6IFwiQ2xvdWR5XCIsXG4gICAgaWNvbjogMTE5LFxuICB9LFxuICB7XG4gICAgY29kZTogMTAwOSxcbiAgICBkYXk6IFwiT3ZlcmNhc3RcIixcbiAgICBuaWdodDogXCJPdmVyY2FzdFwiLFxuICAgIGljb246IDEyMixcbiAgfSxcbiAge1xuICAgIGNvZGU6IDEwMzAsXG4gICAgZGF5OiBcIk1pc3RcIixcbiAgICBuaWdodDogXCJNaXN0XCIsXG4gICAgaWNvbjogMTQzLFxuICB9LFxuICB7XG4gICAgY29kZTogMTA2MyxcbiAgICBkYXk6IFwiUGF0Y2h5IHJhaW4gcG9zc2libGVcIixcbiAgICBuaWdodDogXCJQYXRjaHkgcmFpbiBwb3NzaWJsZVwiLFxuICAgIGljb246IDE3NixcbiAgfSxcbiAge1xuICAgIGNvZGU6IDEwNjYsXG4gICAgZGF5OiBcIlBhdGNoeSBzbm93IHBvc3NpYmxlXCIsXG4gICAgbmlnaHQ6IFwiUGF0Y2h5IHNub3cgcG9zc2libGVcIixcbiAgICBpY29uOiAxNzksXG4gIH0sXG4gIHtcbiAgICBjb2RlOiAxMDY5LFxuICAgIGRheTogXCJQYXRjaHkgc2xlZXQgcG9zc2libGVcIixcbiAgICBuaWdodDogXCJQYXRjaHkgc2xlZXQgcG9zc2libGVcIixcbiAgICBpY29uOiAxODIsXG4gIH0sXG4gIHtcbiAgICBjb2RlOiAxMDcyLFxuICAgIGRheTogXCJQYXRjaHkgZnJlZXppbmcgZHJpenpsZSBwb3NzaWJsZVwiLFxuICAgIG5pZ2h0OiBcIlBhdGNoeSBmcmVlemluZyBkcml6emxlIHBvc3NpYmxlXCIsXG4gICAgaWNvbjogMTg1LFxuICB9LFxuICB7XG4gICAgY29kZTogMTA4NyxcbiAgICBkYXk6IFwiVGh1bmRlcnkgb3V0YnJlYWtzIHBvc3NpYmxlXCIsXG4gICAgbmlnaHQ6IFwiVGh1bmRlcnkgb3V0YnJlYWtzIHBvc3NpYmxlXCIsXG4gICAgaWNvbjogMjAwLFxuICB9LFxuICB7XG4gICAgY29kZTogMTExNCxcbiAgICBkYXk6IFwiQmxvd2luZyBzbm93XCIsXG4gICAgbmlnaHQ6IFwiQmxvd2luZyBzbm93XCIsXG4gICAgaWNvbjogMjI3LFxuICB9LFxuICB7XG4gICAgY29kZTogMTExNyxcbiAgICBkYXk6IFwiQmxpenphcmRcIixcbiAgICBuaWdodDogXCJCbGl6emFyZFwiLFxuICAgIGljb246IDIzMCxcbiAgfSxcbiAge1xuICAgIGNvZGU6IDExMzUsXG4gICAgZGF5OiBcIkZvZ1wiLFxuICAgIG5pZ2h0OiBcIkZvZ1wiLFxuICAgIGljb246IDI0OCxcbiAgfSxcbiAge1xuICAgIGNvZGU6IDExNDcsXG4gICAgZGF5OiBcIkZyZWV6aW5nIGZvZ1wiLFxuICAgIG5pZ2h0OiBcIkZyZWV6aW5nIGZvZ1wiLFxuICAgIGljb246IDI2MCxcbiAgfSxcbiAge1xuICAgIGNvZGU6IDExNTAsXG4gICAgZGF5OiBcIlBhdGNoeSBsaWdodCBkcml6emxlXCIsXG4gICAgbmlnaHQ6IFwiUGF0Y2h5IGxpZ2h0IGRyaXp6bGVcIixcbiAgICBpY29uOiAyNjMsXG4gIH0sXG4gIHtcbiAgICBjb2RlOiAxMTUzLFxuICAgIGRheTogXCJMaWdodCBkcml6emxlXCIsXG4gICAgbmlnaHQ6IFwiTGlnaHQgZHJpenpsZVwiLFxuICAgIGljb246IDI2NixcbiAgfSxcbiAge1xuICAgIGNvZGU6IDExNjgsXG4gICAgZGF5OiBcIkZyZWV6aW5nIGRyaXp6bGVcIixcbiAgICBuaWdodDogXCJGcmVlemluZyBkcml6emxlXCIsXG4gICAgaWNvbjogMjgxLFxuICB9LFxuICB7XG4gICAgY29kZTogMTE3MSxcbiAgICBkYXk6IFwiSGVhdnkgZnJlZXppbmcgZHJpenpsZVwiLFxuICAgIG5pZ2h0OiBcIkhlYXZ5IGZyZWV6aW5nIGRyaXp6bGVcIixcbiAgICBpY29uOiAyODQsXG4gIH0sXG4gIHtcbiAgICBjb2RlOiAxMTgwLFxuICAgIGRheTogXCJQYXRjaHkgbGlnaHQgcmFpblwiLFxuICAgIG5pZ2h0OiBcIlBhdGNoeSBsaWdodCByYWluXCIsXG4gICAgaWNvbjogMjkzLFxuICB9LFxuICB7XG4gICAgY29kZTogMTE4MyxcbiAgICBkYXk6IFwiTGlnaHQgcmFpblwiLFxuICAgIG5pZ2h0OiBcIkxpZ2h0IHJhaW5cIixcbiAgICBpY29uOiAyOTYsXG4gIH0sXG4gIHtcbiAgICBjb2RlOiAxMTg2LFxuICAgIGRheTogXCJNb2RlcmF0ZSByYWluIGF0IHRpbWVzXCIsXG4gICAgbmlnaHQ6IFwiTW9kZXJhdGUgcmFpbiBhdCB0aW1lc1wiLFxuICAgIGljb246IDI5OSxcbiAgfSxcbiAge1xuICAgIGNvZGU6IDExODksXG4gICAgZGF5OiBcIk1vZGVyYXRlIHJhaW5cIixcbiAgICBuaWdodDogXCJNb2RlcmF0ZSByYWluXCIsXG4gICAgaWNvbjogMzAyLFxuICB9LFxuICB7XG4gICAgY29kZTogMTE5MixcbiAgICBkYXk6IFwiSGVhdnkgcmFpbiBhdCB0aW1lc1wiLFxuICAgIG5pZ2h0OiBcIkhlYXZ5IHJhaW4gYXQgdGltZXNcIixcbiAgICBpY29uOiAzMDUsXG4gIH0sXG4gIHtcbiAgICBjb2RlOiAxMTk1LFxuICAgIGRheTogXCJIZWF2eSByYWluXCIsXG4gICAgbmlnaHQ6IFwiSGVhdnkgcmFpblwiLFxuICAgIGljb246IDMwOCxcbiAgfSxcbiAge1xuICAgIGNvZGU6IDExOTgsXG4gICAgZGF5OiBcIkxpZ2h0IGZyZWV6aW5nIHJhaW5cIixcbiAgICBuaWdodDogXCJMaWdodCBmcmVlemluZyByYWluXCIsXG4gICAgaWNvbjogMzExLFxuICB9LFxuICB7XG4gICAgY29kZTogMTIwMSxcbiAgICBkYXk6IFwiTW9kZXJhdGUgb3IgaGVhdnkgZnJlZXppbmcgcmFpblwiLFxuICAgIG5pZ2h0OiBcIk1vZGVyYXRlIG9yIGhlYXZ5IGZyZWV6aW5nIHJhaW5cIixcbiAgICBpY29uOiAzMTQsXG4gIH0sXG4gIHtcbiAgICBjb2RlOiAxMjA0LFxuICAgIGRheTogXCJMaWdodCBzbGVldFwiLFxuICAgIG5pZ2h0OiBcIkxpZ2h0IHNsZWV0XCIsXG4gICAgaWNvbjogMzE3LFxuICB9LFxuICB7XG4gICAgY29kZTogMTIwNyxcbiAgICBkYXk6IFwiTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXRcIixcbiAgICBuaWdodDogXCJNb2RlcmF0ZSBvciBoZWF2eSBzbGVldFwiLFxuICAgIGljb246IDMyMCxcbiAgfSxcbiAge1xuICAgIGNvZGU6IDEyMTAsXG4gICAgZGF5OiBcIlBhdGNoeSBsaWdodCBzbm93XCIsXG4gICAgbmlnaHQ6IFwiUGF0Y2h5IGxpZ2h0IHNub3dcIixcbiAgICBpY29uOiAzMjMsXG4gIH0sXG4gIHtcbiAgICBjb2RlOiAxMjEzLFxuICAgIGRheTogXCJMaWdodCBzbm93XCIsXG4gICAgbmlnaHQ6IFwiTGlnaHQgc25vd1wiLFxuICAgIGljb246IDMyNixcbiAgfSxcbiAge1xuICAgIGNvZGU6IDEyMTYsXG4gICAgZGF5OiBcIlBhdGNoeSBtb2RlcmF0ZSBzbm93XCIsXG4gICAgbmlnaHQ6IFwiUGF0Y2h5IG1vZGVyYXRlIHNub3dcIixcbiAgICBpY29uOiAzMjksXG4gIH0sXG4gIHtcbiAgICBjb2RlOiAxMjE5LFxuICAgIGRheTogXCJNb2RlcmF0ZSBzbm93XCIsXG4gICAgbmlnaHQ6IFwiTW9kZXJhdGUgc25vd1wiLFxuICAgIGljb246IDMzMixcbiAgfSxcbiAge1xuICAgIGNvZGU6IDEyMjIsXG4gICAgZGF5OiBcIlBhdGNoeSBoZWF2eSBzbm93XCIsXG4gICAgbmlnaHQ6IFwiUGF0Y2h5IGhlYXZ5IHNub3dcIixcbiAgICBpY29uOiAzMzUsXG4gIH0sXG4gIHtcbiAgICBjb2RlOiAxMjI1LFxuICAgIGRheTogXCJIZWF2eSBzbm93XCIsXG4gICAgbmlnaHQ6IFwiSGVhdnkgc25vd1wiLFxuICAgIGljb246IDMzOCxcbiAgfSxcbiAge1xuICAgIGNvZGU6IDEyMzcsXG4gICAgZGF5OiBcIkljZSBwZWxsZXRzXCIsXG4gICAgbmlnaHQ6IFwiSWNlIHBlbGxldHNcIixcbiAgICBpY29uOiAzNTAsXG4gIH0sXG4gIHtcbiAgICBjb2RlOiAxMjQwLFxuICAgIGRheTogXCJMaWdodCByYWluIHNob3dlclwiLFxuICAgIG5pZ2h0OiBcIkxpZ2h0IHJhaW4gc2hvd2VyXCIsXG4gICAgaWNvbjogMzUzLFxuICB9LFxuICB7XG4gICAgY29kZTogMTI0MyxcbiAgICBkYXk6IFwiTW9kZXJhdGUgb3IgaGVhdnkgcmFpbiBzaG93ZXJcIixcbiAgICBuaWdodDogXCJNb2RlcmF0ZSBvciBoZWF2eSByYWluIHNob3dlclwiLFxuICAgIGljb246IDM1NixcbiAgfSxcbiAge1xuICAgIGNvZGU6IDEyNDYsXG4gICAgZGF5OiBcIlRvcnJlbnRpYWwgcmFpbiBzaG93ZXJcIixcbiAgICBuaWdodDogXCJUb3JyZW50aWFsIHJhaW4gc2hvd2VyXCIsXG4gICAgaWNvbjogMzU5LFxuICB9LFxuICB7XG4gICAgY29kZTogMTI0OSxcbiAgICBkYXk6IFwiTGlnaHQgc2xlZXQgc2hvd2Vyc1wiLFxuICAgIG5pZ2h0OiBcIkxpZ2h0IHNsZWV0IHNob3dlcnNcIixcbiAgICBpY29uOiAzNjIsXG4gIH0sXG4gIHtcbiAgICBjb2RlOiAxMjUyLFxuICAgIGRheTogXCJNb2RlcmF0ZSBvciBoZWF2eSBzbGVldCBzaG93ZXJzXCIsXG4gICAgbmlnaHQ6IFwiTW9kZXJhdGUgb3IgaGVhdnkgc2xlZXQgc2hvd2Vyc1wiLFxuICAgIGljb246IDM2NSxcbiAgfSxcbiAge1xuICAgIGNvZGU6IDEyNTUsXG4gICAgZGF5OiBcIkxpZ2h0IHNub3cgc2hvd2Vyc1wiLFxuICAgIG5pZ2h0OiBcIkxpZ2h0IHNub3cgc2hvd2Vyc1wiLFxuICAgIGljb246IDM2OCxcbiAgfSxcbiAge1xuICAgIGNvZGU6IDEyNTgsXG4gICAgZGF5OiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNub3cgc2hvd2Vyc1wiLFxuICAgIG5pZ2h0OiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNub3cgc2hvd2Vyc1wiLFxuICAgIGljb246IDM3MSxcbiAgfSxcbiAge1xuICAgIGNvZGU6IDEyNjEsXG4gICAgZGF5OiBcIkxpZ2h0IHNob3dlcnMgb2YgaWNlIHBlbGxldHNcIixcbiAgICBuaWdodDogXCJMaWdodCBzaG93ZXJzIG9mIGljZSBwZWxsZXRzXCIsXG4gICAgaWNvbjogMzc0LFxuICB9LFxuICB7XG4gICAgY29kZTogMTI2NCxcbiAgICBkYXk6IFwiTW9kZXJhdGUgb3IgaGVhdnkgc2hvd2VycyBvZiBpY2UgcGVsbGV0c1wiLFxuICAgIG5pZ2h0OiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHNob3dlcnMgb2YgaWNlIHBlbGxldHNcIixcbiAgICBpY29uOiAzNzcsXG4gIH0sXG4gIHtcbiAgICBjb2RlOiAxMjczLFxuICAgIGRheTogXCJQYXRjaHkgbGlnaHQgcmFpbiB3aXRoIHRodW5kZXJcIixcbiAgICBuaWdodDogXCJQYXRjaHkgbGlnaHQgcmFpbiB3aXRoIHRodW5kZXJcIixcbiAgICBpY29uOiAzODYsXG4gIH0sXG4gIHtcbiAgICBjb2RlOiAxMjc2LFxuICAgIGRheTogXCJNb2RlcmF0ZSBvciBoZWF2eSByYWluIHdpdGggdGh1bmRlclwiLFxuICAgIG5pZ2h0OiBcIk1vZGVyYXRlIG9yIGhlYXZ5IHJhaW4gd2l0aCB0aHVuZGVyXCIsXG4gICAgaWNvbjogMzg5LFxuICB9LFxuICB7XG4gICAgY29kZTogMTI3OSxcbiAgICBkYXk6IFwiUGF0Y2h5IGxpZ2h0IHNub3cgd2l0aCB0aHVuZGVyXCIsXG4gICAgbmlnaHQ6IFwiUGF0Y2h5IGxpZ2h0IHNub3cgd2l0aCB0aHVuZGVyXCIsXG4gICAgaWNvbjogMzkyLFxuICB9LFxuICB7XG4gICAgY29kZTogMTI4MixcbiAgICBkYXk6IFwiTW9kZXJhdGUgb3IgaGVhdnkgc25vdyB3aXRoIHRodW5kZXJcIixcbiAgICBuaWdodDogXCJNb2RlcmF0ZSBvciBoZWF2eSBzbm93IHdpdGggdGh1bmRlclwiLFxuICAgIGljb246IDM5NSxcbiAgfSxcbl07XG4iLCJjb25zdCBnZXRXZWF0aGVyRGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIGNvbnN0IHdlYXRoZXIgPSB7XG4gICAgY29uZGl0aW9uOiBkYXRhLmNvbmRpdGlvbixcbiAgICB0ZW1wZXJhdHVyZTogZGF0YS50ZW1wX2MsXG4gICAgZmVlbHNMaWtlOiBkYXRhLmZlZWxzbGlrZV9jLFxuICAgIHdpbmQ6IGRhdGEud2luZF9tcGgsXG4gICAgcHJlc3N1cmU6IGRhdGEucHJlc3N1cmVfbWIsXG4gICAgaHVtaWRpdHk6IGRhdGEuaHVtaWRpdHksXG4gICAgaXNkYXk6IGRhdGEuaXNfZGF5LFxuICB9O1xuICByZXR1cm4gd2VhdGhlcjtcbn07XG5cbmNvbnN0IGdldEZvcmVjYXN0RGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIGNvbnN0IGZvcmVjYXN0ID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWREYXkgPSBkYXRhW2ldLmRheTtcblxuICAgIGNvbnN0IGRheSA9IHtcbiAgICAgIGNvbmRpdGlvbjogc2VsZWN0ZWREYXkuY29uZGl0aW9uLFxuICAgICAgdGVtcGVyYXR1cmU6IHNlbGVjdGVkRGF5LmF2Z3RlbXBfYyxcbiAgICAgIGh1bWlkaXR5OiBzZWxlY3RlZERheS5hdmdodW1pZGl0eSxcbiAgICAgIHJhaW5Qcm9iYWJpbGl0eTogc2VsZWN0ZWREYXkuZGFpbHlfY2hhbmNlX29mX3JhaW4sXG4gICAgfTtcblxuICAgIGZvcmVjYXN0LnB1c2goZGF5KTtcbiAgfVxuICByZXR1cm4gZm9yZWNhc3Q7XG59O1xuXG5jb25zdCBnZXRMb2NhdGlvbkRhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xuICBjb25zdCBsb2NhdGlvbiA9IHtcbiAgICBjb3VudHJ5OiBkYXRhLmNvdW50cnksXG4gICAgbG9jYWxUaW1lOiBkYXRhLmxvY2FsdGltZSxcbiAgICBjaXR5OiBkYXRhLm5hbWUsXG4gIH07XG5cbiAgcmV0dXJuIGxvY2F0aW9uO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoV2VhdGhlciA9IGFzeW5jIGZ1bmN0aW9uIChsb2NhdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0yZjhkZTEyNjIxNzc0YWQyYmFkNzA0MzgyNDIzMDUmcT0ke2xvY2F0aW9ufSZkYXlzPTRgLFxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgKTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIGFsZXJ0KFwiU29tZXRoaW5nIHdlbnQgd3JvbmdcIik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBnZXRXZWF0aGVyRGF0YShkYXRhLmN1cnJlbnQpO1xuICAgIGNvbnN0IGZvcmVjYXN0ZWRXZWF0aGVyID0gZ2V0Rm9yZWNhc3REYXRhKGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXkpO1xuICAgIGNvbnN0IGxvY2F0aW9uRGF0YSA9IGdldExvY2F0aW9uRGF0YShkYXRhLmxvY2F0aW9uKTtcblxuICAgIHJldHVybiBbY3VycmVudFdlYXRoZXIsIGZvcmVjYXN0ZWRXZWF0aGVyLCBsb2NhdGlvbkRhdGFdO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJUaGVyZSB3YXMgYSBwcm9ibGVtXCIsIGVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFNvbWV0aGluZyB3ZW50IHdyb25nLCAke2Vycm9yLm1lc3NhZ2V9IGFwcGVhcmVkYCk7XG4gIH1cbn07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9NYW5yb3BlW3dnaHRdLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk15Rm9udFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG46cm9vdCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IENoYXJ0ZXIsIFwiQml0c3RyZWFtIENoYXJ0ZXJcIiwgXCJTaXRrYSBUZXh0XCIsIENhbWJyaWEsIHNlcmlmO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICAtLW5hdi1jb2xvcjogIzc5YWRkYztcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZlZTkzO1xuICAtLWZvcmVjYXN0LS1jb2xvcjogI2ZjZjVjNztcbiAgLS1sb2NhdGlvbi0tY29sb3I6ICNmMGE4Njg7XG4gIC0tZm9vdGVyLS1jb2xvcjogI2YwYTg2ODtcbiAgLS1oZWFkZXItLWNvbG9yOiAjZmZjMDlmO1xuICAtLWFjY2VudC1jb2xvcjogI2U0ZmYxYTtcbn1cblxuYnV0dG9uI2NoZWNrOmhvdmVyLFxuYnV0dG9uLm9wZW5OYXY6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5naXRIdWJMb2dvOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbm5hdiAqOmhvdmVyIHtcbiAgY29sb3I6IHJlZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ud2VhdGhlckljb24sXG4uY29uZGl0aW9uSW1nLFxuLmZvcmVjYXN0SWNvbiB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLyogaGVhZGVyICovXG5cbm5hdiB7XG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtY29sb3IpO1xufVxuXG4ubWVudUJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE1Y2g7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG4ubWVudUJ0biB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xufVxuLm1lbnVCdG4uYWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cblxuYnV0dG9uLm9wZW5NZW51IHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMmNoO1xufVxuXG4ub3Blbk1lbnUge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi8qIG1haW4gKi9cblxuYm9keSB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbn1cblxuLnNlYXJjaCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMnJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjMwcHg7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci0tY29sb3IpO1xuICBib3gtc2hhZG93OiAwcmVtIDAuMXJlbSAwLjdyZW0gdmFyKC0taGVhZGVyLS1jb2xvcik7XG59XG5cbi53ZWF0aGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogMnJlbTtcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDIsIDFmcikgLyByZXBlYXQoMywgMWZyKTtcbiAgZ2FwOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgaGVpZ2h0OiA4NXZoO1xuICB3aWR0aDogMTAwdnc7XG59XG5cbi5sb2NhdGlvbiB7XG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG9jYXRpb24tLWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuXG4jdG9tb3Jyb3cge1xuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XG59XG5cbiNmb2xsb3dpbmdEYXkge1xuICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XG59XG5cbiNpblR3b0RheXMge1xuICBncmlkLWFyZWE6IDIgLyAzIC8gMyAvIDQ7XG59XG5cbi8qIHRvZGF5ICovXG5cbi50b2RheSB7XG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9yZWNhc3QtLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgZ2FwOiAxLjVyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCg2LCAxZnIpIC8gcmVwZWF0KDIsIDFmcik7XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xufVxuXG4uY29uZGl0aW9uVG9kYXkge1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZ3JpZC1yb3c6IDEtMztcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLndlYXRoZXJJY29uIHtcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogYXV0bztcbn1cblxuLmRhdGUge1xuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XG59XG5cbi5jb25kaXRpb25JbWcge1xuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xufVxuXG4udGVtcGVyYXR1cmUge1xuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDM7XG59XG5cbi5mZWVsc0xpa2Uge1xuICBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDM7XG59XG5cbi53aW5kIHtcbiAgZ3JpZC1hcmVhOiA0IC8gMSAvIDUgLyAzO1xufVxuXG4uaHVtaWRpdHkge1xuICBncmlkLWFyZWE6IDUgLyAxIC8gNiAvIDM7XG59XG5cbi5wcmVzc3VyZSB7XG4gIGdyaWQtYXJlYTogNiAvIDEgLyA3IC8gMztcbn1cblxuLnRlbXBlcmF0dXJlLFxuLmZlZWxzTGlrZSxcbi53aW5kLFxuLmh1bWlkaXR5LFxuLnByZXNzdXJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxLjdyZW07XG59XG5cbi8qIGxvY2F0aW9uICovXG5cbi5sb2NhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG59XG5cbi5jaXR5IHtcbiAgZm9udC1zaXplOiAzLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY291bnRyeSB7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG4udGltZSB7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xufVxuXG4vKiBmb3JlY2FzdCAqL1xuXG4uZm9yZWNhc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JlY2FzdC0tY29sb3IpO1xuICBwYWRkaW5nOiAycmVtO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoNCwgMWZyKSAvIHJlcGVhdCgzLCAxZnIpO1xuICBnYXA6IDFyZW07XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udG9kYXksXG4uZm9yZWNhc3Qge1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb290ZXItLWNvbG9yKTtcbn1cblxuLmZvcmVjYXN0RGF0ZSB7XG4gIGdyaWQtYXJlYTogMS8gMS8gMi8gNDtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuXG4uZm9yZWNhc3RJY29uIHtcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyA0O1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLmZvcmVjYXN0ZWRUZW1wZXJhdHVyZSB7XG4gIGdyaWQtYXJlYTogMyAvIDEgLyA1IC8gMjtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLmZvcmVjYXN0ZWRSYWluIHtcbiAgZ3JpZC1hcmVhOiAzIC8gMiAvIDUgLyAzO1xufVxuXG4uZm9yZWNhc3RlZEh1bWlkaXR5IHtcbiAgZ3JpZC1hcmVhOiAzIC8gMyAvIDUgLyA0O1xufVxuXG4uZm9yZWNhc3RQYXJhbUljb24ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4uZm9yZWNhc3RlZEh1bWlkaXR5LFxuLmZvcmVjYXN0ZWRSYWluLFxuLmZvcmVjYXN0ZWRUZW1wZXJhdHVyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLyogZm9ybSAqL1xuXG4ubG9jYXRpb25Gb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAycmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmJ1dHRvbiNjaGVjayB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxLjdyZW07XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyLXJhZGl1czogMC45cmVtO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1mb290ZXItLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG59XG5cbmgxIHtcbiAgZm9udC1mYW1pbHk6IFwiTXlGb250XCIsIFwiQml0c3RyZWFtIENoYXJ0ZXJcIiwgXCJTaXRrYSBUZXh0XCIsIENhbWJyaWEsIHNlcmlmO1xuICBmb250LXNpemU6IDMuNHJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3JlbTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbmxhYmVsIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcmVtO1xufVxuXG5pbnB1dCB7XG4gIHBhZGRpbmc6IDAuN3JlbSAxLjVyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcmVjYXN0LS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZXJyb3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjVweDtcbiAgbGVmdDogMTkwcHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG5pbnB1dC52YWxpZCB7XG4gIGJvcmRlcjogMnB4IGdyZWVuIHNvbGlkO1xufVxuXG5pbnB1dC5pbnZhbGlkIHtcbiAgYm9yZGVyOiAycHggcmVkIHNvbGlkO1xufVxuXG4vKiBmb290ZXIgKi9cblxuZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9vdGVyLS1jb2xvcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBoZWlnaHQ6IDd2aDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcbn1cblxuLmdpdEh1YkxvZ28ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsK0RBQXdEO0VBQ3hELGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUVBQXVFO0VBQ3ZFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsd0JBQXdCO0VBQ3hCLHdCQUF3QjtFQUN4Qix1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFx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QWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjtBQUNBLFNBQVM7O0FBRVQ7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0Usd0VBQXdFO0VBQ3hFLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGFBQWE7RUFDYix3Q0FBd0M7RUFDeEMscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLHNDQUFzQztFQUN0QyxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGFBQWE7RUFDYixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNeUZvbnRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vZm9udHMvTWFucm9wZVt3Z2h0XS50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG46cm9vdCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LWZhbWlseTogQ2hhcnRlciwgXFxcIkJpdHN0cmVhbSBDaGFydGVyXFxcIiwgXFxcIlNpdGthIFRleHRcXFwiLCBDYW1icmlhLCBzZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAtLW5hdi1jb2xvcjogIzc5YWRkYztcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogI2ZmZWU5MztcXG4gIC0tZm9yZWNhc3QtLWNvbG9yOiAjZmNmNWM3O1xcbiAgLS1sb2NhdGlvbi0tY29sb3I6ICNmMGE4Njg7XFxuICAtLWZvb3Rlci0tY29sb3I6ICNmMGE4Njg7XFxuICAtLWhlYWRlci0tY29sb3I6ICNmZmMwOWY7XFxuICAtLWFjY2VudC1jb2xvcjogI2U0ZmYxYTtcXG59XFxuXFxuYnV0dG9uI2NoZWNrOmhvdmVyLFxcbmJ1dHRvbi5vcGVuTmF2OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmdpdEh1YkxvZ286aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5uYXYgKjpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ud2VhdGhlckljb24sXFxuLmNvbmRpdGlvbkltZyxcXG4uZm9yZWNhc3RJY29uIHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4vKiBoZWFkZXIgKi9cXG5cXG5uYXYge1xcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1jb2xvcik7XFxufVxcblxcbi5tZW51QnRuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxNWNoO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbi5tZW51QnRuIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXG59XFxuLm1lbnVCdG4uYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcblxcbmJ1dHRvbi5vcGVuTWVudSB7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICB3aWR0aDogMmNoO1xcbn1cXG5cXG4ub3Blbk1lbnUge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLyogbWFpbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG4uc2VhcmNoIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjMwcHg7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLS1jb2xvcik7XFxuICBib3gtc2hhZG93OiAwcmVtIDAuMXJlbSAwLjdyZW0gdmFyKC0taGVhZGVyLS1jb2xvcik7XFxufVxcblxcbi53ZWF0aGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDIsIDFmcikgLyByZXBlYXQoMywgMWZyKTtcXG4gIGdhcDogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgaGVpZ2h0OiA4NXZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4ubG9jYXRpb24ge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG9jYXRpb24tLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbiN0b21vcnJvdyB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxufVxcblxcbiNmb2xsb3dpbmdEYXkge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xcbn1cXG5cXG4jaW5Ud29EYXlzIHtcXG4gIGdyaWQtYXJlYTogMiAvIDMgLyAzIC8gNDtcXG59XFxuXFxuLyogdG9kYXkgKi9cXG5cXG4udG9kYXkge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9yZWNhc3QtLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBnYXA6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiByZXBlYXQoNiwgMWZyKSAvIHJlcGVhdCgyLCAxZnIpO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4uY29uZGl0aW9uVG9kYXkge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBncmlkLXJvdzogMS0zO1xcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLndlYXRoZXJJY29uIHtcXG4gIGhlaWdodDogNzBweDtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4uZGF0ZSB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxufVxcblxcbi5jb25kaXRpb25JbWcge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAzO1xcbn1cXG5cXG4uZmVlbHNMaWtlIHtcXG4gIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMztcXG59XFxuXFxuLndpbmQge1xcbiAgZ3JpZC1hcmVhOiA0IC8gMSAvIDUgLyAzO1xcbn1cXG5cXG4uaHVtaWRpdHkge1xcbiAgZ3JpZC1hcmVhOiA1IC8gMSAvIDYgLyAzO1xcbn1cXG5cXG4ucHJlc3N1cmUge1xcbiAgZ3JpZC1hcmVhOiA2IC8gMSAvIDcgLyAzO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUsXFxuLmZlZWxzTGlrZSxcXG4ud2luZCxcXG4uaHVtaWRpdHksXFxuLnByZXNzdXJlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5wIHtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG5cXG4vKiBsb2NhdGlvbiAqL1xcblxcbi5sb2NhdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLmNpdHkge1xcbiAgZm9udC1zaXplOiAzLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNvdW50cnkge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi50aW1lIHtcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcbn1cXG5cXG4vKiBmb3JlY2FzdCAqL1xcblxcbi5mb3JlY2FzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JlY2FzdC0tY29sb3IpO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDQsIDFmcikgLyByZXBlYXQoMywgMWZyKTtcXG4gIGdhcDogMXJlbTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4udG9kYXksXFxuLmZvcmVjYXN0IHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvb3Rlci0tY29sb3IpO1xcbn1cXG5cXG4uZm9yZWNhc3REYXRlIHtcXG4gIGdyaWQtYXJlYTogMS8gMS8gMi8gNDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblxcbi5mb3JlY2FzdEljb24ge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyA0O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdGVkVGVtcGVyYXR1cmUge1xcbiAgZ3JpZC1hcmVhOiAzIC8gMSAvIDUgLyAyO1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXFxuLmZvcmVjYXN0ZWRSYWluIHtcXG4gIGdyaWQtYXJlYTogMyAvIDIgLyA1IC8gMztcXG59XFxuXFxuLmZvcmVjYXN0ZWRIdW1pZGl0eSB7XFxuICBncmlkLWFyZWE6IDMgLyAzIC8gNSAvIDQ7XFxufVxcblxcbi5mb3JlY2FzdFBhcmFtSWNvbiB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuLmZvcmVjYXN0ZWRIdW1pZGl0eSxcXG4uZm9yZWNhc3RlZFJhaW4sXFxuLmZvcmVjYXN0ZWRUZW1wZXJhdHVyZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLyogZm9ybSAqL1xcblxcbi5sb2NhdGlvbkZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmJ1dHRvbiNjaGVjayB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMS43cmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuOXJlbTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tZm9vdGVyLS1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNeUZvbnRcXFwiLCBcXFwiQml0c3RyZWFtIENoYXJ0ZXJcXFwiLCBcXFwiU2l0a2EgVGV4dFxcXCIsIENhbWJyaWEsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAzLjRyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC4zcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxufVxcblxcbmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjNyZW07XFxufVxcblxcbmlucHV0IHtcXG4gIHBhZGRpbmc6IDAuN3JlbSAxLjVyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JlY2FzdC0tY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA2NXB4O1xcbiAgbGVmdDogMTkwcHg7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbmlucHV0LnZhbGlkIHtcXG4gIGJvcmRlcjogMnB4IGdyZWVuIHNvbGlkO1xcbn1cXG5cXG5pbnB1dC5pbnZhbGlkIHtcXG4gIGJvcmRlcjogMnB4IHJlZCBzb2xpZDtcXG59XFxuXFxuLyogZm9vdGVyICovXFxuXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvb3Rlci0tY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBnYXA6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgaGVpZ2h0OiA3dmg7XFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcbn1cXG5cXG4uZ2l0SHViTG9nbyB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwidmFyIG1hcCA9IHtcblx0XCIuLzExMy5wbmdcIjogXCIuL3NyYy9pbWFnZS9kYXkvMTEzLnBuZ1wiLFxuXHRcIi4vMTE2LnBuZ1wiOiBcIi4vc3JjL2ltYWdlL2RheS8xMTYucG5nXCIsXG5cdFwiLi8xMTkucG5nXCI6IFwiLi9zcmMvaW1hZ2UvZGF5LzExOS5wbmdcIixcblx0XCIuLzEyMi5wbmdcIjogXCIuL3NyYy9pbWFnZS9kYXkvMTIyLnBuZ1wiLFxuXHRcIi4vMTQzLnBuZ1wiOiBcIi4vc3JjL2ltYWdlL2RheS8xNDMucG5nXCIsXG5cdFwiLi8xNzYucG5nXCI6IFwiLi9zcmMvaW1hZ2UvZGF5LzE3Ni5wbmdcIixcblx0XCIuLzE3OS5wbmdcIjogXCIuL3NyYy9pbWFnZS9kYXkvMTc5LnBuZ1wiLFxuXHRcIi4vMTgyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlL2RheS8xODIucG5nXCIsXG5cdFwiLi8xODUucG5nXCI6IFwiLi9zcmMvaW1hZ2UvZGF5LzE4NS5wbmdcIixcblx0XCIuLzIwMC5wbmdcIjogXCIuL3NyYy9pbWFnZS9kYXkvMjAwLnBuZ1wiLFxuXHRcIi4vMjI3LnBuZ1wiOiBcIi4vc3JjL2ltYWdlL2RheS8yMjcucG5nXCIsXG5cdFwiLi8yMzAucG5nXCI6IFwiLi9zcmMvaW1hZ2UvZGF5LzIzMC5wbmdcIixcblx0XCIuLzI0OC5wbmdcIjogXCIuL3NyYy9pbWFnZS9kYXkvMjQ4LnBuZ1wiLFxuXHRcIi4vMjYwLnBuZ1wiOiBcIi4vc3JjL2ltYWdlL2RheS8yNjAucG5nXCIsXG5cdFwiLi8yNjMucG5nXCI6IFwiLi9zcmMvaW1hZ2UvZGF5LzI2My5wbmdcIixcblx0XCIuLzI2Ni5wbmdcIjogXCIuL3NyYy9pbWFnZS9kYXkvMjY2LnBuZ1wiLFxuXHRcIi4vMjgxLnBuZ1wiOiBcIi4vc3JjL2ltYWdlL2RheS8yODEucG5nXCIsXG5cdFwiLi8yODQucG5nXCI6IFwiLi9zcmMvaW1hZ2UvZGF5LzI4NC5wbmdcIixcblx0XCIuLzI5My5wbmdcIjogXCIuL3NyYy9pbWFnZS9kYXkvMjkzLnBuZ1wiLFxuXHRcIi4vMjk2LnBuZ1wiOiBcIi4vc3JjL2ltYWdlL2RheS8yOTYucG5nXCIsXG5cdFwiLi8yOTkucG5nXCI6IFwiLi9zcmMvaW1hZ2UvZGF5LzI5OS5wbmdcIixcblx0XCIuLzMwMi5wbmdcIjogXCIuL3NyYy9pbWFnZS9kYXkvMzAyLnBuZ1wiLFxuXHRcIi4vMzA1LnBuZ1wiOiBcIi4vc3JjL2ltYWdlL2RheS8zMDUucG5nXCIsXG5cdFwiLi8zMDgucG5nXCI6IFwiLi9zcmMvaW1hZ2UvZGF5LzMwOC5wbmdcIixcblx0XCIuLzMxMS5wbmdcIjogXCIuL3NyYy9pbWFnZS9kYXkvMzExLnBuZ1wiLFxuXHRcIi4vMzE0LnBuZ1wiOiBcIi4vc3JjL2ltYWdlL2RheS8zMTQucG5nXCIsXG5cdFwiLi8zMTcucG5nXCI6IFwiLi9zcmMvaW1hZ2UvZGF5LzMxNy5wbmdcIixcblx0XCIuLzMyMC5wbmdcIjogXCIuL3NyYy9pbWFnZS9kYXkvMzIwLnBuZ1wiLFxuXHRcIi4vMzIzLnBuZ1wiOiBcIi4vc3JjL2ltYWdlL2RheS8zMjMucG5nXCIsXG5cdFwiLi8zMjYucG5nXCI6IFwiLi9zcmMvaW1hZ2UvZGF5LzMyNi5wbmdcIixcblx0XCIuLzMyOS5wbmdcIjogXCIuL3NyYy9pbWFnZS9kYXkvMzI5LnBuZ1wiLFxuXHRcIi4vMzMyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlL2RheS8zMzIucG5nXCIsXG5cdFwiLi8zMzUucG5nXCI6IFwiLi9zcmMvaW1hZ2UvZGF5LzMzNS5wbmdcIixcblx0XCIuLzMzOC5wbmdcIjogXCIuL3NyYy9pbWFnZS9kYXkvMzM4LnBuZ1wiLFxuXHRcIi4vMzUwLnBuZ1wiOiBcIi4vc3JjL2ltYWdlL2RheS8zNTAucG5nXCIsXG5cdFwiLi8zNTMucG5nXCI6IFwiLi9zcmMvaW1hZ2UvZGF5LzM1My5wbmdcIixcblx0XCIuLzM1Ni5wbmdcIjogXCIuL3NyYy9pbWFnZS9kYXkvMzU2LnBuZ1wiLFxuXHRcIi4vMzU5LnBuZ1wiOiBcIi4vc3JjL2ltYWdlL2RheS8zNTkucG5nXCIsXG5cdFwiLi8zNjIucG5nXCI6IFwiLi9zcmMvaW1hZ2UvZGF5LzM2Mi5wbmdcIixcblx0XCIuLzM2NS5wbmdcIjogXCIuL3NyYy9pbWFnZS9kYXkvMzY1LnBuZ1wiLFxuXHRcIi4vMzY4LnBuZ1wiOiBcIi4vc3JjL2ltYWdlL2RheS8zNjgucG5nXCIsXG5cdFwiLi8zNzEucG5nXCI6IFwiLi9zcmMvaW1hZ2UvZGF5LzM3MS5wbmdcIixcblx0XCIuLzM3NC5wbmdcIjogXCIuL3NyYy9pbWFnZS9kYXkvMzc0LnBuZ1wiLFxuXHRcIi4vMzc3LnBuZ1wiOiBcIi4vc3JjL2ltYWdlL2RheS8zNzcucG5nXCIsXG5cdFwiLi8zODYucG5nXCI6IFwiLi9zcmMvaW1hZ2UvZGF5LzM4Ni5wbmdcIixcblx0XCIuLzM4OS5wbmdcIjogXCIuL3NyYy9pbWFnZS9kYXkvMzg5LnBuZ1wiLFxuXHRcIi4vMzkyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlL2RheS8zOTIucG5nXCIsXG5cdFwiLi8zOTUucG5nXCI6IFwiLi9zcmMvaW1hZ2UvZGF5LzM5NS5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2UvZGF5IHN5bmMgXFxcXC4ocG5nKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vMTEzLnBuZ1wiOiBcIi4vc3JjL2ltYWdlL25pZ2h0LzExMy5wbmdcIixcblx0XCIuLzExNi5wbmdcIjogXCIuL3NyYy9pbWFnZS9uaWdodC8xMTYucG5nXCIsXG5cdFwiLi8xMTkucG5nXCI6IFwiLi9zcmMvaW1hZ2UvbmlnaHQvMTE5LnBuZ1wiLFxuXHRcIi4vMTIyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlL25pZ2h0LzEyMi5wbmdcIixcblx0XCIuLzE0My5wbmdcIjogXCIuL3NyYy9pbWFnZS9uaWdodC8xNDMucG5nXCIsXG5cdFwiLi8xNzYucG5nXCI6IFwiLi9zcmMvaW1hZ2UvbmlnaHQvMTc2LnBuZ1wiLFxuXHRcIi4vMTc5LnBuZ1wiOiBcIi4vc3JjL2ltYWdlL25pZ2h0LzE3OS5wbmdcIixcblx0XCIuLzE4Mi5wbmdcIjogXCIuL3NyYy9pbWFnZS9uaWdodC8xODIucG5nXCIsXG5cdFwiLi8xODUucG5nXCI6IFwiLi9zcmMvaW1hZ2UvbmlnaHQvMTg1LnBuZ1wiLFxuXHRcIi4vMjAwLnBuZ1wiOiBcIi4vc3JjL2ltYWdlL25pZ2h0LzIwMC5wbmdcIixcblx0XCIuLzIyNy5wbmdcIjogXCIuL3NyYy9pbWFnZS9uaWdodC8yMjcucG5nXCIsXG5cdFwiLi8yMzAucG5nXCI6IFwiLi9zcmMvaW1hZ2UvbmlnaHQvMjMwLnBuZ1wiLFxuXHRcIi4vMjQ4LnBuZ1wiOiBcIi4vc3JjL2ltYWdlL25pZ2h0LzI0OC5wbmdcIixcblx0XCIuLzI2MC5wbmdcIjogXCIuL3NyYy9pbWFnZS9uaWdodC8yNjAucG5nXCIsXG5cdFwiLi8yNjMucG5nXCI6IFwiLi9zcmMvaW1hZ2UvbmlnaHQvMjYzLnBuZ1wiLFxuXHRcIi4vMjY2LnBuZ1wiOiBcIi4vc3JjL2ltYWdlL25pZ2h0LzI2Ni5wbmdcIixcblx0XCIuLzI4MS5wbmdcIjogXCIuL3NyYy9pbWFnZS9uaWdodC8yODEucG5nXCIsXG5cdFwiLi8yODQucG5nXCI6IFwiLi9zcmMvaW1hZ2UvbmlnaHQvMjg0LnBuZ1wiLFxuXHRcIi4vMjkzLnBuZ1wiOiBcIi4vc3JjL2ltYWdlL25pZ2h0LzI5My5wbmdcIixcblx0XCIuLzI5Ni5wbmdcIjogXCIuL3NyYy9pbWFnZS9uaWdodC8yOTYucG5nXCIsXG5cdFwiLi8yOTkucG5nXCI6IFwiLi9zcmMvaW1hZ2UvbmlnaHQvMjk5LnBuZ1wiLFxuXHRcIi4vMzAyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlL25pZ2h0LzMwMi5wbmdcIixcblx0XCIuLzMwNS5wbmdcIjogXCIuL3NyYy9pbWFnZS9uaWdodC8zMDUucG5nXCIsXG5cdFwiLi8zMDgucG5nXCI6IFwiLi9zcmMvaW1hZ2UvbmlnaHQvMzA4LnBuZ1wiLFxuXHRcIi4vMzExLnBuZ1wiOiBcIi4vc3JjL2ltYWdlL25pZ2h0LzMxMS5wbmdcIixcblx0XCIuLzMxNC5wbmdcIjogXCIuL3NyYy9pbWFnZS9uaWdodC8zMTQucG5nXCIsXG5cdFwiLi8zMTcucG5nXCI6IFwiLi9zcmMvaW1hZ2UvbmlnaHQvMzE3LnBuZ1wiLFxuXHRcIi4vMzIwLnBuZ1wiOiBcIi4vc3JjL2ltYWdlL25pZ2h0LzMyMC5wbmdcIixcblx0XCIuLzMyMy5wbmdcIjogXCIuL3NyYy9pbWFnZS9uaWdodC8zMjMucG5nXCIsXG5cdFwiLi8zMjYucG5nXCI6IFwiLi9zcmMvaW1hZ2UvbmlnaHQvMzI2LnBuZ1wiLFxuXHRcIi4vMzI5LnBuZ1wiOiBcIi4vc3JjL2ltYWdlL25pZ2h0LzMyOS5wbmdcIixcblx0XCIuLzMzMi5wbmdcIjogXCIuL3NyYy9pbWFnZS9uaWdodC8zMzIucG5nXCIsXG5cdFwiLi8zMzUucG5nXCI6IFwiLi9zcmMvaW1hZ2UvbmlnaHQvMzM1LnBuZ1wiLFxuXHRcIi4vMzM4LnBuZ1wiOiBcIi4vc3JjL2ltYWdlL25pZ2h0LzMzOC5wbmdcIixcblx0XCIuLzM1MC5wbmdcIjogXCIuL3NyYy9pbWFnZS9uaWdodC8zNTAucG5nXCIsXG5cdFwiLi8zNTMucG5nXCI6IFwiLi9zcmMvaW1hZ2UvbmlnaHQvMzUzLnBuZ1wiLFxuXHRcIi4vMzU2LnBuZ1wiOiBcIi4vc3JjL2ltYWdlL25pZ2h0LzM1Ni5wbmdcIixcblx0XCIuLzM1OS5wbmdcIjogXCIuL3NyYy9pbWFnZS9uaWdodC8zNTkucG5nXCIsXG5cdFwiLi8zNjIucG5nXCI6IFwiLi9zcmMvaW1hZ2UvbmlnaHQvMzYyLnBuZ1wiLFxuXHRcIi4vMzY1LnBuZ1wiOiBcIi4vc3JjL2ltYWdlL25pZ2h0LzM2NS5wbmdcIixcblx0XCIuLzM2OC5wbmdcIjogXCIuL3NyYy9pbWFnZS9uaWdodC8zNjgucG5nXCIsXG5cdFwiLi8zNzEucG5nXCI6IFwiLi9zcmMvaW1hZ2UvbmlnaHQvMzcxLnBuZ1wiLFxuXHRcIi4vMzc0LnBuZ1wiOiBcIi4vc3JjL2ltYWdlL25pZ2h0LzM3NC5wbmdcIixcblx0XCIuLzM3Ny5wbmdcIjogXCIuL3NyYy9pbWFnZS9uaWdodC8zNzcucG5nXCIsXG5cdFwiLi8zODYucG5nXCI6IFwiLi9zcmMvaW1hZ2UvbmlnaHQvMzg2LnBuZ1wiLFxuXHRcIi4vMzg5LnBuZ1wiOiBcIi4vc3JjL2ltYWdlL25pZ2h0LzM4OS5wbmdcIixcblx0XCIuLzM5Mi5wbmdcIjogXCIuL3NyYy9pbWFnZS9uaWdodC8zOTIucG5nXCIsXG5cdFwiLi8zOTUucG5nXCI6IFwiLi9zcmMvaW1hZ2UvbmlnaHQvMzk1LnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWFnZS9uaWdodCBzeW5jIFxcXFwuKHBuZykkXCI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGZldGNoV2VhdGhlciB9IGZyb20gXCIuL3dlYXRoZXJBUElcIjtcbmltcG9ydCB7IHVwZGF0ZVdlYXRoZXIsIHVwZGF0ZUZvcmVjYXN0LCB1cGRhdGVMb2NhdGlvbiB9IGZyb20gXCIuL0RPTVwiO1xuXG5jb25zdCBvcGVuTWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3Blbk1lbnVcIik7XG5jb25zdCBtZW51QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudUJ0blwiKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uRm9ybVwiKTtcbmNvbnN0IGxvY2F0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uXCIpO1xuY29uc3QgZXJyb3JTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvclwiKTtcbmNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hlY2tcIik7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgYWN0aXZhdGVEcm9wZG93bihtZW51QnV0dG9ucywgb3Blbk1lbnVCdG4pO1xuICBnZXRXZWF0aGVyRGF0YShcIlNhbiBGcmFuY2lzY29cIik7XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCF2YWxpZGF0ZUlucHV0KCkpIHJldHVybjtcbiAgICBhd2FpdCBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbklucHV0LnZhbHVlKTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gIH0pO1xufSk7XG5cbmxvY2F0aW9uSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgdmFsaWRhdGVJbnB1dCgpO1xufSk7XG5cbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gIGlmICghdmFsaWRhdGVJbnB1dCgpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBhbGVydChcIlBsZWFzZSBwcm92aWRlIHZhbGlkIGNpdHkgbmFtZVwiKTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGFjdGl2YXRlRHJvcGRvd24obWVudUJ0dG5zLCBvcGVuQnRuKSB7XG4gIG9wZW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtZW51QnR0bnMuZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKSk7XG4gICAgb3BlbkJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwidG9nZ2xlZFwiKTtcbiAgfSk7XG59XG5cbmNvbnN0IGdldFdlYXRoZXJEYXRhID0gYXN5bmMgZnVuY3Rpb24gKHBsYWNlKSB7XG4gIGxldCBjdXJyZW50O1xuICBsZXQgZm9yZWNhc3RlZDtcbiAgbGV0IGxvY2F0aW9uO1xuICB0cnkge1xuICAgIFtjdXJyZW50LCBmb3JlY2FzdGVkLCBsb2NhdGlvbl0gPSBhd2FpdCBmZXRjaFdlYXRoZXIocGxhY2UpO1xuICAgIHVwZGF0ZVdlYXRoZXIoY3VycmVudCk7XG4gICAgdXBkYXRlRm9yZWNhc3QoZm9yZWNhc3RlZCk7XG4gICAgdXBkYXRlTG9jYXRpb24obG9jYXRpb24pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB3ZWF0aGVyOlwiLCBlcnJvcik7XG4gIH1cbn07XG5cbmNvbnN0IHZhbGlkYXRlSW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHBhdHRlcm4gPSAvXltBLVphLXpdW0EtWmEtelxccyctXXswLDE4fVtBLVphLXpdJC87XG4gIGNvbnN0IGlucHV0VmFsdWUgPSBsb2NhdGlvbklucHV0LnZhbHVlLnRyaW0oKTtcblxuICBpZiAoIXBhdHRlcm4udGVzdChpbnB1dFZhbHVlKSkge1xuICAgIGVycm9yU3Bhbi50ZXh0Q29udGVudCA9IFwiSW52YWxpZCBjaXR5IG5hbWVcIjtcbiAgICBsb2NhdGlvbklucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJ2YWxpZFwiKTtcbiAgICBsb2NhdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkXCIpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBsb2NhdGlvbklucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZhbGlkXCIpO1xuICBsb2NhdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoXCJ2YWxpZFwiKTtcbiAgZXJyb3JTcGFuLnRleHRDb250ZW50ID0gXCJcIjtcbiAgcmV0dXJuIHRydWU7XG59O1xuIl0sIm5hbWVzIjpbIkpTT05kYXRhIiwicmFpbkljb24iLCJwcmVzc3VyZUljb24iLCJodW1pZGl0eUljb24iLCJ0ZW1wZXJhdHVyZUljb24iLCJmZWVsc0xpa2VJY29uIiwid2luZEljb24iLCJjb25kaXRpb25JbWciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb25kaXRpb25Ub2RheSIsInRlbXBUb2RheSIsInRlbXBJbWciLCJmZWVsc0xpa2VUb2RheSIsImZlZWxzTGlrZUltZyIsIndpbmRUb2RheSIsIndpbmRJbWciLCJodW1pZGl0eVRvZGF5IiwiaHVtaWRpdHlJbWciLCJwcmVzc3VyZVRvZGF5IiwicHJlc3N1cmVJbWciLCJjaXR5IiwiY291bnRyeSIsInRpbWUiLCJ0b21vcnJvd0NvbnRhaW5lciIsImdldEVsZW1lbnRCeUlkIiwiZm9sbG93aW5nRGF5Q29udGFpbmVyIiwiaW5Ud29EYXlzQ29udGFpbmVyIiwiZm9yZWNhc3RDb250YWluZXJzIiwicHVzaCIsImRheUltYWdlcyIsImltcG9ydEFsbCIsInJlcXVpcmUiLCJjb250ZXh0IiwibmlnaHRJbWFnZXMiLCJyIiwiaW1hZ2VzIiwia2V5cyIsIm1hcCIsIml0ZW0iLCJyZXBsYWNlIiwiZm9ybWF0SWNvbkVsZW1lbnQiLCJlbGVtZW50Iiwic291cmNlIiwiY2xhc3NMaXN0IiwiYWRkIiwic3JjIiwiYWRkQ29uZGl0aW9uSW1hZ2UiLCJ3ZWF0aGVyRGF0YSIsImlzRGF5IiwiaXNkYXkiLCJjb25kaXRpb25Db2RlIiwiY29uZGl0aW9uIiwiY29kZSIsIndlYXRoZXJJY29uQ29kZSIsImZpbmQiLCJ3ZWF0aGVyIiwiaWNvbiIsImZpbGxQYXJhbWV0ZXJWYWx1ZXMiLCJ0ZXh0Q29udGVudCIsInRleHQiLCJmZWVsc0xpa2UiLCJwcmVzc3VyZSIsInRlbXBlcmF0dXJlIiwid2luZCIsImh1bWlkaXR5IiwiYWRkUGFyYW1ldGVySWNvbnMiLCJhZGRGb3JlY2FzdENvbmRpdGlvbkltYWdlIiwiaW1hZ2UiLCJmaWxsT3V0Rm9yZWNhc3REYXRhIiwicmFpbiIsImRhdGUiLCJmb3JlY2FzdERhdGEiLCJpZCIsInJhaW5Qcm9iYWJpbGl0eSIsInRvZGF5IiwiRGF0ZSIsInRvbW9ycm93IiwiaW5Ud29EYXlzIiwiaW5UaHJlZURheXMiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsInRvRGF0ZVN0cmluZyIsImFwcGVuZENvbnRhaW5lckRhdGEiLCJjb250YWluZXIiLCJkYWlseUZvcmVjYXN0IiwiZm9yZWNhc3REYXRlIiwid2VhdGhlckltZyIsInRlbXBlcmF0dXJlRm9yZWNhc3RJY29uIiwicmFpbkZvcmVjYXN0SWNvbiIsImh1bWlkaXR5Rm9yZWNhc3RJY29uIiwiZm9yZWNhc3RlZFRlbXBlcmF0dXJlIiwiZm9yZWNhc3RlZFJhaW4iLCJmb3JlY2FzdGVkSHVtaWRpdHkiLCJ1cGRhdGVXZWF0aGVyIiwidXBkYXRlRm9yZWNhc3QiLCJjb25zb2xlIiwibG9nIiwiZm9yRWFjaCIsImluZGV4IiwidXBkYXRlTG9jYXRpb24iLCJsb2NhdGlvbkRhdGEiLCJsb2NhbFRpbWUiLCJkYXkiLCJuaWdodCIsImdldFdlYXRoZXJEYXRhIiwiZGF0YSIsInRlbXBfYyIsImZlZWxzbGlrZV9jIiwid2luZF9tcGgiLCJwcmVzc3VyZV9tYiIsImlzX2RheSIsImdldEZvcmVjYXN0RGF0YSIsImZvcmVjYXN0IiwiaSIsImxlbmd0aCIsInNlbGVjdGVkRGF5IiwiYXZndGVtcF9jIiwiYXZnaHVtaWRpdHkiLCJkYWlseV9jaGFuY2Vfb2ZfcmFpbiIsImdldExvY2F0aW9uRGF0YSIsImxvY2F0aW9uIiwibG9jYWx0aW1lIiwibmFtZSIsImZldGNoV2VhdGhlciIsInJlc3BvbnNlIiwiZmV0Y2giLCJtb2RlIiwib2siLCJhbGVydCIsIkVycm9yIiwic3RhdHVzVGV4dCIsImpzb24iLCJjdXJyZW50V2VhdGhlciIsImN1cnJlbnQiLCJmb3JlY2FzdGVkV2VhdGhlciIsImZvcmVjYXN0ZGF5IiwiZXJyb3IiLCJtZXNzYWdlIiwib3Blbk1lbnVCdG4iLCJtZW51QnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JtIiwibG9jYXRpb25JbnB1dCIsImVycm9yU3BhbiIsInN1Ym1pdEJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJhY3RpdmF0ZURyb3Bkb3duIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInZhbGlkYXRlSW5wdXQiLCJ2YWx1ZSIsInJlc2V0IiwibWVudUJ0dG5zIiwib3BlbkJ0biIsImJ1dHRvbiIsInRvZ2dsZSIsInBsYWNlIiwiZm9yZWNhc3RlZCIsInBhdHRlcm4iLCJpbnB1dFZhbHVlIiwidHJpbSIsInRlc3QiLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9