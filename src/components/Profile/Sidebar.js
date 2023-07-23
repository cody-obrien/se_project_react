import avatarPath from "../../images/avatar.svg";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img src={avatarPath} alt="User Avatar" />
      <span>Terrence Tegegne</span>
    </div>
  );
}
