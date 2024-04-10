import { userState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ handleCloseModal, handleLogin, onRegisterModal }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    handleLogin(values);
  };
};
