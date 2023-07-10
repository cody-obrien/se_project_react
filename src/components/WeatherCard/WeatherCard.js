import "./WeatherCard.css";

const weatherOptions = [
  {
    url: require("../../images/day-sunny.svg").default,
    day: true,
    type: "sunny",
  },
  {
    url: require("../../images/day-cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  { url: require("../../images/day-fog.svg").default, day: true, type: "fog" },
  {
    url: require("../../images/day-rain.svg").default,
    day: true,
    type: "rain",
  },
  {
    url: require("../../images/day-snow.svg").default,
    day: true,
    type: "snow",
  },
  {
    url: require("../../images/day-storm.svg").default,
    day: true,
    type: "storm",
  },
  {
    url: require("../../images/night-sunny.svg").default,
    day: false,
    type: "sunny",
  },
  {
    url: require("../../images/night-sunny.svg").default,
    day: false,
    type: "cloudy",
  },
  {
    url: require("../../images/night-fog.svg").default,
    day: false,
    type: "fog",
  },
  {
    url: require("../../images/night-rain.svg").default,
    day: false,
    type: "rain",
  },
  {
    url: require("../../images/night-snow.svg").default,
    day: false,
    type: "snow",
  },
  {
    url: require("../../images/night-storm.svg").default,
    day: false,
    type: "storm",
  },
];

export default function WeatherCard({ day, type, temperature }) {
  const weatherSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  return (
    <section className="weather" id="weather">
      <div className="weather__info">{temperature}°F</div>
      <img
        className="weather__image"
        src={weatherSrc[0].url}
        alt="Weather Pic"
      />
    </section>
  );
}
