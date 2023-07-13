import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

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
