import ModalWithForm from "../ModalWithForm/ModalWithForm";
import React, { useState } from "react";

const AddItemModal = ({ handleCloseModal, handleClick, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (evt) => {
    console.log(evt.target.value);
    setName(evt.target.value);
  };

  const [link, setUrl] = useState("");
  const handleUrlChange = (evt) => {
    console.log(evt.target.value);
    setUrl(evt.target.value);
  };

  const [weatherType, setWeatherType] = useState("");
  const handleRadioChange = (e) => {
    console.log(e.target.value);
    setWeatherType(e.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAddItem({ name, link, weatherType });
  };

  return (
    <ModalWithForm
      title="New Garment"
      onClose={handleCloseModal}
      handleClick={handleClick}
      isOpen={isOpen}
      onSubmit={handleSubmit}
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
          value={name}
          onChange={handleNameChange}
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
          value={link}
          onChange={handleUrlChange}
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
            name="weatherType"
            onChange={handleRadioChange}
          />
          <label htmlFor="hot">Hot</label>
        </div>
        <div className="radio__input">
          <input
            type="radio"
            id="warm"
            value="warm"
            name="weatherType"
            className="radio__button"
            onChange={handleRadioChange}
          />
          <label htmlFor="warm">Warm</label>
        </div>
        <div className="radio__input">
          <input
            type="radio"
            id="cold"
            value="cold"
            name="weatherType"
            className="radio__button"
            onChange={handleRadioChange}
          />
          <label htmlFor="cold">Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
