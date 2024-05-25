import "./style.css";
import { fetchWeather } from "./weatherAPI";
import { updateWeather, updateForecast, updateLocation } from "./DOM";

const openMenuBtn = document.querySelector(".openMenu");
const menuButtons = document.querySelectorAll(".menuBtn");
const form = document.querySelector(".locationForm");
const locationInput = document.getElementById("location");
const errorSpan = document.querySelector(".error");
const submitButton = document.querySelector("#check");

document.addEventListener("DOMContentLoaded", () => {
  activateDropdown(menuButtons, openMenuBtn);
  getWeatherData("San Francisco");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!validateInput()) return;
    await getWeatherData(locationInput.value);
    form.reset();
  });
});

locationInput.addEventListener("input", () => {
  validateInput();
});

submitButton.addEventListener("click", (event) => {
  if (!validateInput()) {
    event.preventDefault();
    alert("Please provide valid city name");
  }
});

function activateDropdown(menuBttns, openBtn) {
  openBtn.addEventListener("click", () => {
    menuBttns.forEach((button) => button.classList.toggle("active"));
    openBtn.classList.toggle("toggled");
  });
}

const getWeatherData = async function (place) {
  let current;
  let forecasted;
  let location;
  try {
    [current, forecasted, location] = await fetchWeather(place);
    updateWeather(current);
    updateForecast(forecasted);
    updateLocation(location);
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
