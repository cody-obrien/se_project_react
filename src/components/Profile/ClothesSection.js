import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

export default function ClothesSection() {
  return (
    <div className="cards">
      {defaultClothingItems.map((item) => {
        return <ItemCard key={item._id} item={item} />;
      })}
    </div>
  );
}
