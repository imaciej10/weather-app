import "./style.css";
import { fetchWeather } from "./weatherAPI";
import { updateWeather, updateForecast, updateLocation } from "./DOM";

const openNavBtn = document.querySelector(".openNav");
const menuButtons = document.querySelectorAll(".menuBtn");
const form = document.querySelector(".locationForm");
const locationInput = document.getElementById("location");
const inputField = document.getElementById("location");

document.addEventListener("DOMContentLoaded", () => {
  function activateDropdown(menuBttns, openBtn) {
    openBtn.addEventListener("click", () => {
      menuBttns.forEach((button) => button.classList.toggle("active"));
      openBtn.classList.toggle("toggled");
    });
  }

  activateDropdown(menuButtons, openNavBtn);
  setDefaultData("San Francisco");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    let current;
    let forecasted;
    let location;
    try {
      [current, forecasted, location] = await fetchWeather(locationInput.value);
      console.log(location);
      updateWeather(current);
      updateForecast(forecasted);
      updateLocation(location);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
    form.reset();
  });
});

const setDefaultData = async function (place) {
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

inputField.addEventListener("input", () => {
  const inputValue = inputField.value.trim();
  const pattern = /^[A-Za-z][A-Za-z\s'-]{2,18}[A-Za-z]$/;

  if (!pattern.test(inputValue)) {
    inputField.classList.add("invalid");
  } else {
    inputField.classList.remove("invalid");
    inputField.classList.add("valid");
  }
});
