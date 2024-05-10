import "./LoginModal.css";
import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ handleCloseModal, handleLogin, onRegisterModal }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    handleLogin(values);
  };

  return (
    <ModalWithForm
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
      title="Login"
      name="Login"
      buttonText="Login"
    >
      <label className="modal__input-label">
        Email
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="modal__input"
          value={values.email}
          onChange={handleChange}
          required
        ></input>
      </label>
      <label className="modal__input-label">
        Password
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="modal__input"
          value={values.password}
          onChange={handleChange}
          required
        ></input>
      </label>
      <button className="modal__signup" type="button" onClick={onRegisterModal}>
        or Sign Up
      </button>
    </ModalWithForm>
  );
};

export default LoginModal;
