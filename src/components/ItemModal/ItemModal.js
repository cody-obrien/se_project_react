import "./ItemModal.css";
export default function ItemModal({ card, onClose }) {
  return (
    <div className={`modal`}>
      <div className="item-modal__content">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <img className="item-modal__image" src={card.link} alt={card.name} />
        <div className="item-modal__description">
          <div>{card.name}</div>
          <div>Weather: {card.weather}</div>
        </div>
      </div>
    </div>
  );
}
