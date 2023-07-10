import "./App.css";
import Header from "../Header/Header";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/utils";

function App() {
  const temp = "75° F";
  return (
    <div>
      <Header />
      <main className="main">
        <WeatherCard day={false} type={"fog"} temp={temp} />
        <section className="card__section" id="card-section">
          Today is {temp} / You may want to wear:
          <div className="card__items">
            {defaultClothingItems.map((x) => {
              return <ItemCard x={x} />;
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
