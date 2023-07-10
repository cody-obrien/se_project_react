import { defaultClothingItems } from "../../utils/constants";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
export default function Main({ temp, onSelectCard }) {
  return (
    <main className="main">
      <WeatherCard day={false} type={"fog"} temp={temp} />
      <section className="card__section" id="card-section">
        Today is {temp} / You may want to wear:
        <div className="card__items">
          {defaultClothingItems.map((item) => {
            return <ItemCard item={item} onSelectCard={onSelectCard} />;
          })}
        </div>
      </section>
    </main>
  );
}
