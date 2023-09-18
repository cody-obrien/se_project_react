import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";
import { signUp } from "../../utils/auth";

export default function RegisterModal({
  onCloseModal,
  onSubmit,
  onLoginModal,
}) {
  const [nameValue, setNameValue] = useState("");
  const [avatarValue, setAvatarValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  function handleChangeName(e) {
    setNameValue(e.target.value);
  }
  function handleChangeAvatar(e) {
    setAvatarValue(e.target.value);
  }
  function handleChangePassword(e) {
    setPasswordValue(e.target.value);
  }
  function handleChangeEmail(e) {
    setEmailValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ nameValue, avatarValue, emailValue, passwordValue });
  }
  return (
    <ModalWithForm
      title="Sign Up"
      onClose={onCloseModal}
      onSubmit={handleSubmit}
      buttonText="Register"
      hasRedirectButton={true}
      redirectButtonText="or Login"
      redirectButtonClick={onLoginModal}
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
      <div className="modal__input-container">
        <label htmlFor="imageUrl">Name</label>
        <input
          onChange={handleChangeName}
          className="modal__input"
          type="text"
          name="name"
          placeholder="Name"
          value={nameValue}
        />
      </div>
      <div className="modal__input-container">
        <label htmlFor="avatarURL">Avatar URL</label>
        <input
          onChange={handleChangeAvatar}
          className="modal__input"
          type="url"
          name="avatarURL"
          placeholder="Avatar URL"
          value={avatarValue}
        />
      </div>
    </ModalWithForm>
  );
}
