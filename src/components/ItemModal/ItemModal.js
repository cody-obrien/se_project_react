import "./ItemModal.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";
export default function ItemModal({ card, onClose, onDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser.user._id;
  const itemDeleteButtonClassName = `item__delete-button ${
    isOwn ? "item__delete-button_visible" : "item__delete-button_hidden"
  }`;
  return (
    <div className={`modal`}>
      <div className="item-modal__content">
        <button
          className="modal__close-button modal__item-close-button"
          type="button"
          onClick={onClose}
        ></button>
        <img
          className="item-modal__image"
          src={card.imageUrl}
          alt={card.name}
        />
        <div className="item-modal__footer">
          <div className="item-modal__description">
            <div>{card.name}</div>
            <div>Weather: {card.weather}</div>
          </div>
          <button onClick={onDelete} className={itemDeleteButtonClassName}>
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
}
