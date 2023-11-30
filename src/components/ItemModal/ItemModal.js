import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose }) => {
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
      </div>
    </div>
  );
};

export default ItemModal;
