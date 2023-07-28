import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
// import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useEffect, useState } from "react";
import { getWeatherForecast, parseWeatherData } from "../../utils/weatherApi";
import { Route, Switch } from "react-router-dom";
// import { defaultClothingItems } from "../../utils/constants";
import AddItemModal from "../AddItemModal/AddItemModal";
import { getItems, postItem, deleteItem } from "../../utils/api";

function App() {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temperature, setTemperature] = useState(0);
  const [location, setLocation] = useState("");
  const [currentTemperatureUnit, setCurrentTempUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
    setSelectedCard({});
  };
  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  const handleAddItemSubmit = (newItem) => {
    const addFakeId = { id: clothingItems.length + 1, ...newItem };
    postItem(addFakeId)
      .then(() => {
        setClothingItems([addFakeId, ...clothingItems]);
      })
      .catch((err) => {
        console.error("Error. The request has failed: ", err);
      });
  };

  const handleDeleteItem = () => {
    deleteItem(selectedCard.id)
      .then(() => {
        setClothingItems(
          clothingItems.filter((item) => {
            return item.id !== selectedCard.id;
          })
        );
        setActiveModal("");
      })
      .catch((err) => {
        console.error("Error. The request has failed: ", err);
      });
  };
  let weatherData = {};

  useEffect(() => {
    getWeatherForecast()
      .then((data) => {
        weatherData = parseWeatherData(data).temperature;
        setTemperature(weatherData[currentTemperatureUnit]);
        setLocation(parseWeatherData(data).location);
      })
      .catch((err) => {
        console.error("Error. The request has failed: ", err);
      });
  }, [currentTemperatureUnit]);

  useEffect(() => {
    getItems()
      .then((res) => {
        setClothingItems(res);
      })
      .catch((err) => {
        console.error("Error. The request has failed: ", err);
      });
  }, []);

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTempUnit("C")
      : setCurrentTempUnit("F");
  };

  return (
    <div className="app">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header
          date={currentDate}
          location={location}
          onCreateModal={handleCreateModal}
        />
        <Switch>
          <Route exact path="/">
            <Main
              temperature={temperature}
              location={location}
              onSelectCard={handleSelectedCard}
              clothesList={clothingItems}
            />
          </Route>
          <Route path="/profile">
            <Profile
              onSelectCard={handleSelectedCard}
              onCreateModal={handleCreateModal}
              clothesList={clothingItems}
            />
          </Route>
        </Switch>
        {activeModal === "create" && (
          <AddItemModal
            onCloseModal={handleCloseModal}
            onAddItem={handleAddItemSubmit}
            isOpen={activeModal === "create"}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            card={selectedCard}
            onClose={handleCloseModal}
            onDelete={handleDeleteItem}
          />
        )}
        <Footer />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
