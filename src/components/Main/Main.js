import { defaultClothingItems } from "../../utils/constants";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

import { useContext } from "react";

export default function Main({ temperature, onSelectCard, clothesList }) {
  const tempContext = useContext(CurrentTemperatureUnitContext);
  const getWeatherType = () => {
    if (tempContext.currentTemperatureUnit === "F") {
      if (temperature >= 86) {
        return "hot";
      } else if (temperature >= 66 && temperature <= 85) {
        return "warm";
      } else if (temperature <= 65) {
        return "cold";
      }
    }
    if (tempContext.currentTemperatureUnit === "C") {
      if (temperature >= 30) {
        return "hot";
      } else if (temperature >= 19 && temperature <= 29) {
        return "warm";
      } else if (temperature <= 18) {
        return "cold";
      }
    }
  };
  const weatherType = getWeatherType();

  const filteredCards = clothesList.filter((item) => {
    return item.weather === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={true} type={"sunny"} temperature={temperature} />
      <div>
        Today is {temperature}°{tempContext.currentTemperatureUnit}/ You may
        want to wear:
      </div>
      <section className="card__section" id="card-section">
        <div className="card__items">
          {filteredCards.map((item) => {
            return (
              <ItemCard
                key={item._id}
                item={item}
                onSelectCard={onSelectCard}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
