import "./ItemCard.css";
export default function ItemCard({ x }) {
  return (
    <div>
      <div className="card__name">{x.name}</div>
      <div>
        <img className="card__image" src={x.link} />
      </div>
    </div>
  );
}
