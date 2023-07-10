import "./ItemModal.css";
export default function ItemModal({ card, onClose }) {
  return (
    <div className={`modal`}>
      <div className="modal__content">
        <button type="button" onClick={onClose}>
          Close
        </button>
        <img src={card.link} />
        <div>{card.name}</div>
        <div>{card.weather}</div>
      </div>
    </div>
  );
}
