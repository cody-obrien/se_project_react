import "./ItemCard.css";
export default function ItemCard({ item, onSelectCard }) {
  return (
    <div>
      <div className="card__name">{item.name}</div>
      <div>
        <img
          className="card__image"
          src={item.link}
          alt="clothing"
          onClick={() => onSelectCard(item)}
        />
      </div>
    </div>
  );
}
