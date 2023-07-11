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
        <button type="button" onClick={onClose}>
          Close
        </button>
        <h3>{title}</h3>
        <form className="modal__form">{children}</form>
        <button type="submit">{buttonText}</button>
      </div>
    </div>
  );
}
