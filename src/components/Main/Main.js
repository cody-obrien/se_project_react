import { defaultClothingItems } from "../../utils/constants";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentTempUnitContext } from "../../contexts/CurrentTempUnitContext";

import { useMemo, useContext } from "react";

export default function Main({ temperature, onSelectCard }) {
  const tempContext = useContext(CurrentTempUnitContext);
  const weatherType = useMemo(() => {
    if (temperature >= 86) {
      return "hot";
    } else if (temperature >= 66 && temperature <= 85) {
      return "warm";
    } else if (temperature <= 65) {
      return "cold";
    }
  }, [temperature]);
  console.log(weatherType);
  console.log(temperature);

  const filteredCards = defaultClothingItems.filter((item) => {
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
