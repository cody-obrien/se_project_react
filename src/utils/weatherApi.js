// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}

import { APIkey, latitude, longitude } from "./constants";
import { checkResponse } from "./utils";

function getWeatherForecast() {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(checkResponse);
  return weatherApi;
}

function parseWeatherData(data) {
  return {
    temperature: {
      F: Math.round(data.main.temp),
      C: Math.round(((data.main.temp - 32) * 5) / 9),
    },
    location: data.name,
  };
}

export { getWeatherForecast, parseWeatherData };
