import "./EditProfileModal.css";
import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const EditProfileModal = ({ handleCloseModal, updateProfileData, isOpen }) => {
  // const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  // const [values, setValues] = useState({
  //   name: currentUser.name,
  //   avatar: currentUser.avatar,
  // });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    updateProfileData({ name, avatar });
  };

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };

  const handleAvatarChange = (evt) => {
    setAvatar(evt.target.value);
  };

  // const handleChange = (evt) => {
  //   const { name, value } = evt.target;
  //   setValues({ ...values, [name]: value });
  // };

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
        Name *
        <input
          placeholder="Name"
          type="text"
          className="modal__input"
          name="name"
          onChange={handleNameChange}
          // value={values.name}
          minLength="1"
          maxLength="30"
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
          onChange={handleAvatarChange}
          // value={values.avatar}
          minLength="1"
          maxLength="999"
          required
        ></input>
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
