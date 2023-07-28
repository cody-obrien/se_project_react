import "./ItemModal.css";
export default function ItemModal({ card, onClose, onDelete }) {
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
          <button onClick={onDelete} className="item-modal__delete-button">
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
}
