import { userState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({
  handleCloseModal,
  isOpen,
  onLoginModal,
  handleRegistration,
}) => {
  const [values, setValues] = useState({
    name: "",
    avatar: "",
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegistration(values);
  };

  return (
    <ModalWithForm
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      title="Sign Up"
      name="Register"
      buttonText="Register"
    >
      <label className="modal__input-label">
        Name
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="modal__input"
          value={values.name}
          onChange={handleChange}
          required
        ></input>
      </label>
      <label className="modal__input-label">
        Avatar URL
        <input
          name="avatar"
          type="url"
          placeholder="Avatar URL"
          className="modal__input"
          value={values.avatar}
          onChange={handleChange}
          required
        ></input>
      </label>
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
      <button className="modal__signup" type="button" onClick={onLoginModal}>
        or Login
      </button>
    </ModalWithForm>
  );
};
