import "./ModalWithForm.css";

const ModalWithForm = ({ children, buttonText, title, onClose, name }) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button type="button" onClick={onClose} className="modal__close" />
        <h3 className="modal__title">{title}</h3>
        <form>
          {children}
          <button type="submit" className="modal__submit">
            {(buttonText = "Add Garment")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
