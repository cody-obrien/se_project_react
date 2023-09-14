import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

export default function AddItemModal({ isOpen, onCloseModal, onAddItem }) {
  const [nameValue, setNameValue] = useState("");
  const [linkValue, setLinkValue] = useState("");
  const [weatherValue, setWeatherValue] = useState("");

  useEffect(() => {
    setLinkValue("");
    setNameValue("");
    setWeatherValue("");
  }, [isOpen]);

  function handleChangeName(e) {
    setNameValue(e.target.value);
  }
  function handleChangeLink(e) {
    setLinkValue(e.target.value);
  }
  function handleChangeWeather(e) {
    setWeatherValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onAddItem({
      name: nameValue,
      imageUrl: linkValue,
      weather: weatherValue,
    });
    onCloseModal();
  }
  return (
    <ModalWithForm
      title="New Garment"
      onClose={onCloseModal}
      onSubmit={handleSubmit}
      buttonText="Add Garment"
    >
      <div className="modal__input-container">
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChangeName}
          className="modal__input"
          type="text"
          name="name"
          placeholder="Name"
          value={nameValue}
        />
      </div>
      <div className="modal__input-container">
        <label htmlFor="imageUrl">Image URL</label>
        <input
          onChange={handleChangeLink}
          className="modal__input"
          type="url"
          name="imageUrl"
          placeholder="Image URL"
          value={linkValue}
        />
      </div>
      <span>Select the weather type:</span>
      <div>
        <div className="modal__radio">
          <input
            onChange={handleChangeWeather}
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
            onChange={handleChangeWeather}
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
            onChange={handleChangeWeather}
            className="modal__radio-button"
            type="radio"
            id="cold"
            value="cold"
            name="weatherType"
          />
          <label htmlFor="cold">Cold</label>
        </div>
        <button className="modal__submit-button" type="submit">
          Add Garment
        </button>
      </div>
    </ModalWithForm>
  );
}
