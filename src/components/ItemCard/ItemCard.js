import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./ItemCard.css";
import activeLikePath from "../../images/like-active.svg";
import inactiveLikePath from "../../images/like_inactive.svg";
export default function ItemCard({ item, onSelectCard, onCardLike }) {
  const userContext = useContext(CurrentUserContext);
  const userData = userContext
    ? userContext
    : { user: { name: "", avatar: "" } };
  const currentUser = userData.user;
  const isLiked = item.likes.some((id) => id === currentUser._id);
  const likeButtonPath = isLiked ? activeLikePath : inactiveLikePath;
  const likeButtonClassName = userContext
    ? "card__like-button"
    : "card__like-button card__like-button-inactive";
  const cardId = item._id;
  function handleLikeClick() {
    onCardLike({ id: cardId, isLiked: isLiked, user: currentUser });
  }

  return (
    <div>
      <div className="card__image-container">
        <div className="card__header">
          <div className="card__name">{item.name}</div>
          <button className={likeButtonClassName} onClick={handleLikeClick}>
            <img src={likeButtonPath} alt="Like Button" />
          </button>
        </div>

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
