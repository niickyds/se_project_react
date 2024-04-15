import "./ItemModal.css";
import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemModal = ({ selectedCard, onClose, onClick }) => {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = selectedCard.owner === currentUser._id;
  const itemDeleteButtonClassName = `modal__delete-button ${
    isOwn ? "modal__delete-button_visible" : "modal__delete-button_hidden"
  }`;
  return (
    <div className={"modal"}>
      <div className="modal__content modal__container_item_view">
        <button
          type="button"
          onClick={onClose}
          className="close__button-item"
        />
        <img
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
          className="modal__image"
        />
        <div className="item__name">{selectedCard.name}</div>
        <div className="selected__card-weather">
          Weather: {selectedCard.weather}
        </div>
        <div className="modal__delete-button_container">
          <button className="modal__delete-button" onClick={onClick}>
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
