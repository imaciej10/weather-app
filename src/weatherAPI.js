const getWeatherData = function (data) {
  const weather = {
    condition: data.condition,
    temperature: data.temp_c,
    feelsLike: data.feelslike_c,
    wind: data.wind_mph,
    pressure: data.pressure_mb,
    humidity: data.humidity,
    isday: data.is_day,
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
      rainProbability: selectedDay.daily_chance_of_rain,
    };

    forecast.push(day);
  }
  return forecast;
};

const getLocationData = function (data) {
  const location = {
    country: data.country,
    localTime: data.localtime,
    city: data.name,
  };

  return location;
};

export const fetchWeather = async function (location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=2f8de12621774ad2bad70438242305&q=${location}&days=4`,
      { mode: "cors" }
    );

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
