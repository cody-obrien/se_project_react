import "./ItemCard.css";
export default function ItemCard({ item, onSelectCard, onCardLike }) {
  function handleLikeClick() {
    onCardLike();
  }
  return (
    <div>
      <div className="card__name">{item.name}</div>
      <div>
        <img
          className="card__image"
          src={item.imageUrl}
          alt={item.name}
          onClick={() => onSelectCard(item)}
        />
      </div>
    </div>
  );
}
