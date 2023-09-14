import "./Header.css";
import logoPath from "../../images/logo.svg";
import avatarPath from "../../images/avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Header({
  date,
  location,
  onCreateModal,
  onRegisterModal,
  onLoginModal,
  isLoggedIn,
}) {
  const userContext = useContext(CurrentUserContext);
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={logoPath} alt="WTWR Logo" />
        </Link>
        <div>
          {date}, {location}
        </div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        {isLoggedIn ? (
          <div>
            <button
              onClick={onCreateModal}
              type="text"
              className="header__button"
            >
              + Add clothes
            </button>
            <Link to="/profile">
              <img src={avatarPath} alt="User Avatar" />
            </Link>
          </div>
        ) : (
          <div>
            <button
              onClick={onRegisterModal}
              type="text"
              className="header__button"
            >
              Sign Up
            </button>
            <button
              onClick={onLoginModal}
              type="text"
              className="header__button"
            >
              Log In
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
