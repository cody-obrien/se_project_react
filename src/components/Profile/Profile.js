import Sidebar from "./Sidebar";
import ClothesSection from "./ClothesSection";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile">
      <Sidebar />
      <ClothesSection />
    </div>
  );
}
