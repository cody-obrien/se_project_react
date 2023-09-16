import avatarPath from "../../images/avatar.svg";
import "./SideBar.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function SideBar({ onSignOut, onEditModal }) {
  const userContext = useContext(CurrentUserContext);
  const userData = userContext
    ? userContext
    : { user: { name: "", avatar: "" } };
  const userAvatarUrl = userData.user.avatar;
  const userName = userData.user.name;
  const showUserAvatar = userAvatarUrl === "" ? true : false;
  return (
    <div className="sidebar">
      <div className="sidebar__user-info">
        {showUserAvatar ? (
          <img
            className="sidebar__avatar"
            src={userAvatarUrl}
            alt="User Avatar"
          />
        ) : (
          <p className="sidebar__avatar-placeholder">
            {userName[0].toUpperCase()}
          </p>
        )}
        <span className="sidebar__username">{userName}</span>
      </div>
      <div className="sidebar__buttons">
        <button onClick={onEditModal} className="sidebar__button">
          Change profile data
        </button>
        <button onClick={onSignOut} className="sidebar__button">
          Log out
        </button>
      </div>
    </div>
  );
}
