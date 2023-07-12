import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { useEffect, useState } from "react";
import { getWeatherForecast, parseWeatherData } from "../../utils/weatherApi";

function App() {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temperature, setTemperature] = useState(0);
  const [location, setLocation] = useState("");

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
  useEffect(() => {
    getWeatherForecast().then((data) => {
      setTemperature(parseWeatherData(data).temperature);
      setLocation(parseWeatherData(data).location);
    });
  }, []);

  return (
    <div className="app">
      <Header
        date={currentDate}
        location={location}
        onCreateModal={handleCreateModal}
      />
      <Main
        temperature={temperature}
        location={location}
        onSelectCard={handleSelectedCard}
      />
      {activeModal === "create" && (
        <ModalWithForm title="New Garment" onClose={handleCloseModal}>
          <div className="modal__input-container">
            <label htmlFor="name">Name</label>
            <input
              className="modal__input"
              type="text"
              name="name"
              placeholder="Name"
            ></input>
          </div>
          <div className="modal__input-container">
            <label htmlFor="link">Image URL</label>
            <input
              className="modal__input"
              type="url"
              name="link"
              placeholder="Image URL"
            ></input>
          </div>
          <span>Select the weather type:</span>
          <div>
            <div className="modal__radio">
              <input
                className="modal__radio-button"
                type="radio"
                id="hot"
                value="hot"
                name="weatherType"
              />
              <label htmlFor="hot">Hot</label>
            </div>
            <div className="modal__radio">
              <input
                className="modal__radio-button"
                type="radio"
                id="warm"
                value="warm"
                name="weatherType"
              />

              <label htmlFor="warm">Warm</label>
            </div>
            <div className="modal__radio">
              <input
                className="modal__radio-button"
                type="radio"
                id="cold"
                value="cold"
                name="weatherType"
              />
              <label htmlFor="cold">Cold</label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal card={selectedCard} onClose={handleCloseModal} />
      )}
      <Footer />
    </div>
  );
}

export default App;
