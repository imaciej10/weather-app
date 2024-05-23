import "./style.css";
import { fetchWeather } from "./weatherAPI";
import { updateWeather, updateForecast } from "./DOM";

const openNavBtn = document.querySelector(".openNav");
const menuButtons = document.querySelectorAll(".menuBtn");
const form = document.querySelector(".locationForm");
const locationInput = document.getElementById("location");

document.addEventListener("DOMContentLoaded", () => {
  function activateDropdown(menuBttns, openBtn) {
    openBtn.addEventListener("click", () => {
      menuBttns.forEach((button) => button.classList.toggle("active"));
      openBtn.classList.toggle("toggled");
    });
  }

  activateDropdown(menuButtons, openNavBtn);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    let current;
    let forecasted;
    try {
      [current, forecasted] = await fetchWeather(locationInput.value);
      console.log(current);
      console.log(forecasted);
      updateWeather(current);
      updateForecast(forecasted);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
    form.reset();
  });
});
