import "./ItemModal.css";

// add delete button
const ItemModal = ({ selectedCard, onClose, onClick }) => {
  return (
    <div className={"modal"}>
      <div className="modal__content modal__container_item_view">
        <button
          type="button"
          onClick={onClose}
          className="close__button-item"
        />
        <img src={selectedCard.link} alt="Garment" className="modal__image" />
        <div className="item__name">{selectedCard.name}</div>
        <div className="selected__card-weather">
          Weather: {selectedCard.weather}
        </div>
        <div className="modal__delete-btn_container">
          <button className="modal__delete-btn" onClick={onClick}>
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
