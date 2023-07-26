import avatarPath from "../../images/avatar.svg";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatarPath} alt="User Avatar" />
      <span className="sidebar__username">Terrence Tegegne</span>
    </div>
  );
}
