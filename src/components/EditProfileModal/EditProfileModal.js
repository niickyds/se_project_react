import "./EditProfileModal.css";
import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const EditProfileModal = ({ handleCloseModal, updateProfileData, isOpen }) => {
  const currentUser = React.useContext(CurrentUserContext);
  const [values, setValues] = useState({
    name: currentUser.data.name,
    avatar: currentUser.data.avatar,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    updateProfileData(values);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <ModalWithForm
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      name="edit"
      title="Edit Profile"
      buttonText="Save"
    >
      <label className="modal__input-label">
        Name
        <input
          placeholder="Name"
          type="text"
          className="modal__input"
          name="name"
          onChange={handleChange}
          value={values.name}
          required
        ></input>
      </label>
      <label className="modal__input-label">
        Avatar *
        <input
          placeholder="Avatar URL"
          type="url"
          className="modal__input"
          name="avatar"
          onChange={handleChange}
          value={values.avatar}
          required
        ></input>
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
