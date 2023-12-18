import ModalWithForm from "../ModalWithForm/ModalWithForm";
import React from "react";

const AddItemModal = ({ handleCloseModal, handleClick, onAddItem, isOpen }) => {
  return (
    <ModalWithForm
      title="New Garment"
      onClose={handleCloseModal}
      handleClick={handleClick}
      isOpen={isOpen}
      onSubmit={onAddItem}
    >
      <label className="modal__name-input">
        Name
        <input
          type="text"
          name="name"
          minlenth="1"
          maxLength="30"
          placeholder="Name"
          className="modal__name-submit"
        />
      </label>
      <label className="modal__image-input">
        Image
        <input
          type="url"
          name="link"
          minlenth="1"
          placeholder="Image URL"
          className="modal__image-submit"
        />
      </label>
      <p className="weather__text">Select the weather type:</p>
      <div>
        <div className="radio__input">
          <input
            type="radio"
            id="hot"
            value="hot"
            className="radio__button"
            name="weather-radio-button"
          />
          <label htmlFor="hot">Hot</label>
        </div>
        <div className="radio__input">
          <input
            type="radio"
            id="warm"
            value="warm"
            name="weather-radio-button"
            className="radio__button"
          />
          <label htmlFor="warm">Warm</label>
        </div>
        <div className="radio__input">
          <input
            type="radio"
            id="cold"
            value="cold"
            name="weather-radio-button"
            className="radio__button"
          />
          <label htmlFor="cold">Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
