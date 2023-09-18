import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

export default function LoginModal({
  onCloseModal,
  onSubmit,
  onRegisterModal,
}) {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  function handleChangePassword(e) {
    setPasswordValue(e.target.value);
  }
  function handleChangeEmail(e) {
    setEmailValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit({ emailValue, passwordValue });
  }

  return (
    <ModalWithForm
      title="Sign In"
      onClose={onCloseModal}
      onSubmit={handleSubmit}
      buttonText="Login"
      hasRedirectButton={true}
      redirectButtonText="or Register"
      redirectButtonClick={onRegisterModal}
    >
      <div className="modal__input-container">
        <label htmlFor="name">Email</label>
        <input
          onChange={handleChangeEmail}
          className="modal__input"
          type="email"
          name="Email"
          placeholder="Email"
          value={emailValue}
        />
      </div>
      <div className="modal__input-container">
        <label htmlFor="imageUrl">Password</label>
        <input
          onChange={handleChangePassword}
          className="modal__input"
          type="password"
          name="password"
          placeholder="Password"
          value={passwordValue}
        />
      </div>
    </ModalWithForm>
  );
}
