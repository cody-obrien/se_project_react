import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

export default function Profile({
  onSelectCard,
  onCreateModal,
  clothesList,
  onDeleteCard,
  onSignOut,
  onEditProfile,
  onEditModal,
  onCardLike,
}) {
  return (
    <div className="profile">
      <SideBar onSignOut={onSignOut} onEditModal={onEditModal} />
      <ClothesSection
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
        clothesList={clothesList}
        onDeleteCard={onDeleteCard}
        onCardLike={onCardLike}
      />
    </div>
  );
}
