import "./Header.css";

export default function Header({ date, onCreateModal }) {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require("../../images/logo.svg").default} alt="WTWR Logo" />
        </div>
        <div>{date}</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button onClick={onCreateModal} type="text">
            Add New Clothes
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
