import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

export default function ClothesSection({
  onSelectCard,
  onCreateModal,
  clothesList,
}) {
  return (
    <div className="clothes__section">
      <div className="clothes__section-title-wrapper">
        <span className="clothes__section-title">Your Items</span>
        <button
          type="submit"
          className="clothes__section-button"
          onClick={onCreateModal}
        >
          + Add new
        </button>
      </div>
      <div className="clothes__section-cards">
        {clothesList.map((item) => {
          return (
            <ItemCard key={item.id} item={item} onSelectCard={onSelectCard} />
          );
        })}
      </div>
    </div>
  );
}