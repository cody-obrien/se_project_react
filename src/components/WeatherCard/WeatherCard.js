import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import { useContext } from "react";
import { CurrentTempUnitContext } from "../../contexts/CurrentTempUnitContext";

export default function WeatherCard({ day, type, temperature }) {
  const weatherSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });
  const tempContext = useContext(CurrentTempUnitContext)

  return (
    <section className="weather" id="weather">
      <div className="weather__info">{}</div>
      <img
        className="weather__image"
        src={weatherSrc[0].url}
        alt="Weather Pic"
      />
    </section>
  );
}
