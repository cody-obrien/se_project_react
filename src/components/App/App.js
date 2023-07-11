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
            <label for="name">Name</label>
            <input className="modal__input" type="text" name="name"></input>
          </div>
          <div className="modal__input-container">
            <label for="link">Image URL</label>
            <input className="modal__input" type="url" name="link"></input>
          </div>
          <p>Select the weather type</p>
          <div>
            <div>
              <input type="radio" id="hot" value="hot" />
              <label>Hot</label>
            </div>
            <div>
              <input type="radio" id="warm" value="warm" />
              <label>Warm</label>
            </div>
            <div>
              <input type="radio" id="cold" value="cold" />
              <label>Cold</label>
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
