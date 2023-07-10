import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require("../../images/logo.svg").default} alt="WTWR Logo" />
        </div>
        <div>Date</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button type="text">Add New Clothes</button>
        </div>
        <div>UserName</div>
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
