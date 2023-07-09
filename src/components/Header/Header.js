import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src="./images/logo.svg" alt="WTWR Logo" />
        </div>
        <div>Date</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button type="text">Add New Clothes</button>
        </div>
        <div>UserName</div>
        <div>
          <img src="./images/avatar.svg" alt="User Avatar" />
        </div>
      </div>
    </header>
  );
}
