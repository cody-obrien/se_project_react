import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function ClothesSection({
  onSelectCard,
  onCreateModal,
  clothesList,
  onCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);
  const userId = currentUser.user._id;
  const userClothes = clothesList.filter((item) => {
    return item.owner === userId;
  });
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
        {userClothes.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onSelectCard={onSelectCard}
              onCardLike={onCardLike}
            />
          );
        })}
      </div>
    </div>
  );
}
