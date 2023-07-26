import Sidebar from "./Sidebar";
import ClothesSection from "./ClothesSection";
import "./Profile.css";

export default function Profile({ onSelectCard, onCreateModal }) {
  return (
    <div className="profile">
      <Sidebar />
      <ClothesSection
        onSelectCard={onSelectCard}
        onCreateModal={onCreateModal}
      />
    </div>
  );
}
