// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}
const APIkey = "4c380131831981e8bc0a56308e02dda2";
const latitude = 42.360081;
const longitude = -71.058884;

function getWeatherForecast() {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  return weatherApi;
}

function parseWeatherData(data) {
  // console.log(data);
  return { temperature: {F:Math.round(data.main.temp), C:Math.round((data.main.temp - 32) * 5/9)}, location: data.name };
}

export { getWeatherForecast, parseWeatherData };
