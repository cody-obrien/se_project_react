import "./ModalWithForm.css";
export default function ModalWithForm({
  title,
  name,
  buttonText,
  children,
  onClose,
  onSubmit,
  hasRedirectButton,
  redirectButtonText,
  redirectButtonClick,
}) {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button
          className="modal__close-button modal__add-close-button"
          type="button"
          onClick={onClose}
        />
        <h3>{title}</h3>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <div className="modal__button-container">
            <button className="modal__submit-button" type="submit">
              {buttonText}
            </button>
            {hasRedirectButton && (
              <button
                className="modal__redirect-button"
                onClick={redirectButtonClick}
              >
                {redirectButtonText}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
