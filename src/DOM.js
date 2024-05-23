import { JSONdata } from "./jsonDATA";

function createIconElement(className, source) {
  const cover = document.createElement("img");
  cover.classList.add(className);

  cover.src = source;
  return cover;
}

function createDivElement(className, text) {
  const div = document.createElement("div");
  div.textContent = text;
  div.classList.add(className);
  return div;
}

export const updateWeather = function (weatherData) {
  console.log(weatherData);
};

export const updateForecast = function (weatherData) {
  console.log(weatherData);
};

function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const dayImages = importAll(require.context("./image/day", false, /\.(png)$/));

const nightImages = importAll(
  require.context("./image/night", false, /\.(png)$/)
);

console.log(dayImages);
console.log(nightImages);
