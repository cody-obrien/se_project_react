import "./Header.css";
import logoPath from "../../images/logo.svg";
import avatarPath from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";


export default function Header({ date, location, onCreateModal }) {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={logoPath} alt="WTWR Logo" />
        </div>
        <div>
          {date}, {location}
        </div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <ToggleSwitch />
          <button
            onClick={onCreateModal}
            type="text"
            className="header__button"
          >
            + Add clothes
          </button>
        </div>
        <div>Terrence Tegegne</div>
        <div>
          <img src={avatarPath} alt="User Avatar" />
        </div>
      </div>
    </header>
  );
}
