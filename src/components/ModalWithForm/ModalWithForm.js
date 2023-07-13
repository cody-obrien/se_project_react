import "./ModalWithForm.css";
export default function ModalWithForm({
  title,
  name,
  buttonText = "Add Garment",
  children,
  onClose,
}) {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button
          className="modal__close-button"
          type="button"
          onClick={onClose}
        />
        <h3>{title}</h3>
        <form className="modal__form">
          {children}
          <button className="modal__submit-button" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
