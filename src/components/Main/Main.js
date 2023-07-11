import { defaultClothingItems } from "../../utils/constants";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo } from "react";

export default function Main({ temperature, onSelectCard }) {
  const weatherType = useMemo(() => {
    if (temperature >= 86) {
      return "hot";
    } else if (temperature >= 66 && temperature <= 85) {
      return "warm";
    } else if (temperature <= 65) {
      return "cold";
    }
  }, [temperature]);
  // console.log(weatherType);

  const filteredCards = defaultClothingItems.filter((item) => {
    // console.log(item);
    return item.weather.toLowerCase() === weatherType;
  });
  // console.log(filteredCards);

  return (
    <main className="main">
      <WeatherCard day={false} type={"fog"} temperature={temperature} />
      <section className="card__section" id="card-section">
        Today is {temperature}°F / You may want to wear:
        <div className="card__items">
          {filteredCards.map((item) => {
            return <ItemCard item={item} onSelectCard={onSelectCard} />;
          })}
        </div>
      </section>
    </main>
  );
}
