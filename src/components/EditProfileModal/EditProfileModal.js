import "./EditProfileModal.css";
import { useContext, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function EditProfileModal({ onCloseModal, onSubmit }) {
  const userContext = useContext(CurrentUserContext);
  const userData = userContext
    ? userContext
    : { user: { name: "", avatar: "" } };
  const userAvatarUrl = userData.user.avatar;
  const userName = userData.user.name;
  const [nameValue, setNameValue] = useState(userName);
  const [linkValue, setLinkValue] = useState(userAvatarUrl);

  function handleChangeName(e) {
    setNameValue(e.target.value);
  }
  function handleChangeLink(e) {
    setLinkValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ name: nameValue, avatar: linkValue });
    onCloseModal();
  }
  return (
    <ModalWithForm
      title="Edit Profile"
      onClose={onCloseModal}
      onSubmit={handleSubmit}
    >
      <div className="modal__input-container">
        <label htmlFor="name">Name</label>
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
        <label htmlFor="imageUrl">Image URL</label>
        <input
          onChange={handleChangeLink}
          className="modal__input"
          type="url"
          name="imageUrl"
          placeholder="Image URL"
          value={linkValue}
        />
        <button className="modal__submit-button" type="submit">
          Save
        </button>
      </div>
    </ModalWithForm>
  );
}
