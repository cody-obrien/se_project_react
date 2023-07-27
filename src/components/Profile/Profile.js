import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import "./Profile.css";

export default function Profile({
  onSelectCard,
  onCreateModal,
  clothesList,
  onDeleteCard,
}) {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
        clothesList={clothesList}
        onDeleteCard={onDeleteCard}
      />
    </div>
  );
}
