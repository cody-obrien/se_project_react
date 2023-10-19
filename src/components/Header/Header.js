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
  const userData = userContext
    ? userContext
    : { user: { name: "", avatar: "" } };
  const userAvatarUrl = userData.user ? userData.user.avatar : userData.avatar;
  const userName = userData.user.name;

  return (
    <header className="header">
      <div className="header__left">
        <Link to="/">
          <img src={logoPath} alt="WTWR Logo" />
        </Link>
        <div>
          {date}, {location}
        </div>
      </div>
      <div className="header__right">
        <ToggleSwitch />
        {isLoggedIn ? (
          <div className="header__right-profile">
            <button
              onClick={onCreateModal}
              type="text"
              className="header__button"
            >
              + Add clothes
            </button>
            <span>{userName}</span>
            <Link to="/profile">
              <img
                src={userAvatarUrl}
                alt="User Avatar"
                className="header__user-avatar"
              />
            </Link>
          </div>
        ) : (
          <div className="header__right-profile">
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
