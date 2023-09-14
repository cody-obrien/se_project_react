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
}) {
  return (
    <div className="profile">
      <SideBar onSignOut={onSignOut} onEditProfile={onEditProfile} />
      <ClothesSection
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
        clothesList={clothesList}
        onDeleteCard={onDeleteCard}
      />
    </div>
  );
}
