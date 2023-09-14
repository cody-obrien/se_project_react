import avatarPath from "../../images/avatar.svg";
import "./SideBar.css";

export default function SideBar({ onSignOut, onEditProfile }) {
  return (
    <div className="sidebar">
      <div className="sidebar__user-info">
        <img className="sidebar__avatar" src={avatarPath} alt="User Avatar" />
        <span className="sidebar__username">Terrence Tegegne</span>
      </div>
      <div className="sidebar__buttons">
        <button onClick={onEditProfile} className="sidebar__button">
          Change profile data
        </button>
        <button onClick={onSignOut} className="sidebar__button">
          Log out
        </button>
      </div>
    </div>
  );
}
