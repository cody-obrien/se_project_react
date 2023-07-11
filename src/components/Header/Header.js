import "./Header.css";

export default function Header({ date, location, onCreateModal }) {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require("../../images/logo.svg").default} alt="WTWR Logo" />
        </div>
        <div>
          {date}, {location}
        </div>
      </div>
      <div className="header__avatar-logo">
        <div>
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
          <img
            src={require("../../images/avatar.svg").default}
            alt="User Avatar"
          />
        </div>
      </div>
    </header>
  );
}
