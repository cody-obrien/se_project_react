import { defaultClothingItems } from "../../utils/constants";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentTempUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

import { useMemo, useContext } from "react";

export default function Main({ temperature, onSelectCard, clothesList }) {
  const tempContext = useContext(CurrentTempUnitContext);
  const weatherType = useMemo(() => {
    if (tempContext.currentTempUnit === "F") {
      if (temperature >= 86) {
        return "hot";
      } else if (temperature >= 66 && temperature <= 85) {
        return "warm";
      } else if (temperature <= 65) {
        return "cold";
      }
    }

    if (temperature >= 30) {
      return "hot";
    } else if (temperature >= 19 && temperature <= 29) {
      return "warm";
    } else if (temperature <= 18) {
      return "cold";
    }
  }, [temperature]);
  // console.log(temperature);
  // console.log(weatherType);

  const filteredCards = clothesList.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={true} type={"sunny"} temperature={temperature} />
      <div>
        Today is {temperature}°{tempContext.currentTempUnit}/ You may want to
        wear:
      </div>
      <section className="card__section" id="card-section">
        <div className="card__items">
          {filteredCards.map((item) => {
            return (
              <ItemCard key={item.id} item={item} onSelectCard={onSelectCard} />
            );
          })}
        </div>
      </section>
    </main>
  );
}
