import ModalWithForm from "../ModalWithForm/ModalWithForm";
import React, { useState } from "react";

const AddItemModal = ({ handleCloseModal, handleClick, onAddItem, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (evt) => {
    console.log(evt.target.value);
    setName(evt.target.value);
  };

  const [imageUrl, setUrl] = useState("");
  const handleUrlChange = (evt) => {
    console.log(evt.target.value);
    setUrl(evt.target.value);
  };

  const [weather, setWeatherType] = useState("");
  const handleRadioChange = (e) => {
    // console.log(e.target.value);
    setWeatherType(e.target.value);
  };

  // const generateUniqueId = () => {
  //   const timeStamp = new Date().getTime();
  //   const randomNumber = Math.random().toString(20).substring(1, 4);
  //   return `${timeStamp}-${randomNumber}`;
  // };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAddItem({ name, imageUrl, weather });
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
          required
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
          value={imageUrl}
          onChange={handleUrlChange}
          required
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
