// import logo from "../../images/Logo.svg";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import DeleteItemModal from "../DeleteItemModal/DeleteItemModal.jsx";
import EditProfileModal from "../EditProfileModal/EditProfileModal.jsx";
import {
  getForecastWeather,
  parseWeatherData,
} from "../../utils/WeatherApi.js";
import { useEffect, useState } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";
import { Switch, Route } from "react-router-dom";
import Profile from "../Profile/Profile.jsx";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import * as auth from "../../utils/auth.js";
import * as api from "../../utils/api.js";
// import { getToken } from "../../utils/token.js";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    avatar: "",
    _id: "",
  });

  const handleRegisterModal = () => {
    setActiveModal("register");
  };

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleDeleteOpenModal = () => {
    setActiveModal("delete");
  };

  const handleEditModal = () => {
    setActiveModal("edit");
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  const handleCurrentUser = () => {
    const jwt = localStorage.getItem("jwt");
    auth
      .checkToken(jwt)
      .then(({ name, avatar, email, _id }) => {
        setIsLoggedIn(true);
        setCurrentUser({ name, avatar, email, _id });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // handle Login, Logout & Sign Up

  const handleLogOut = () => {
    setIsLoggedIn(false);
    setCurrentUser({ data: {} });
  };

  const handleLogin = (data) => {
    setIsLoggedIn(true);
    handleCurrentUser(data);
  };

  const handleLoginSubmit = ({ email, password }) => {
    auth
      .signIn({ email, password })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        handleLogin(res);
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRegistration = ({ name, avatar, email, password }) => {
    auth
      .signUp({ name, avatar, email, password })
      .then(() => {
        handleLoginSubmit({ email, password });
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onAddItem = (values) => {
    const token = localStorage.getItem("jwt");
    api
      .postItems(values, token)
      .then((res) => {
        setClothingItems((items) => [res.data, ...items]);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      handleCloseModal();
    }
  };

  const handleProfileUpdate = ({ name, avatar }) => {
    const token = localStorage.getItem("jwt");
    api
      .editProfileData({ name, avatar }, token)
      .then((res) => {
        setCurrentUser(res);
        console.log(res);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteCard = () => {
    const token = localStorage.getItem("jwt");
    api
      .deleteItems(selectedCard._id, token)
      .then(() => {
        setClothingItems(
          clothingItems.filter((item) => item._id !== selectedCard._id)
        );
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleCardLike = (id, isLiked) => {
    console.log(id);
    const token = localStorage.getItem("jwt");
    const cards = clothingItems;
    // Check if this card is not currently liked
    !isLiked
      ? // if so, send a request to add the user's id to the card's likes array
        api
          // the first argument is the card's id
          .addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((card) => {
                return card._id === id ? updatedCard.data : card;
              })
            );
            console.log(cards);
          })
          .catch((err) => console.log(err))
      : // if not, send a request to remove the user's id from the card's likes array
        api
          // the first argument is the card's id
          .removeCardLike(id, token)
          .then((updatedCard) => {
            console.log(updatedCard.item);
            setClothingItems((cards) =>
              cards.map((card) => {
                return card._id === id ? updatedCard.data : card;
              })
            );
          })
          .catch((err) => console.log(err));
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    // handleCurrentUser();
    api
      .getItems()
      .then((item) => {
        setClothingItems(item);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (!activeModal) return;
    const handleKeyDown = (evt) => {
      if (evt.key === "Escape" && activeModal !== "") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModal]);

  useEffect((userData) => {
    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      return;
    }
    handleCurrentUser(userData);
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            onCreateModal={handleCreateModal}
            onRegisterModal={handleRegisterModal}
            onLoginModal={handleLoginModal}
            isLoggedIn={isLoggedIn}
          />
          <Switch>
            <Route exact path="/">
              <Main
                weatherTemp={temp}
                onSelectCard={handleSelectedCard}
                clothingItems={clothingItems}
                onCardLike={handleCardLike}
                isLoggedIn={isLoggedIn}
              />
            </Route>
            <ProtectedRoute isLoggedIn={isLoggedIn} path="/profile">
              <Profile
                onSelectCard={handleSelectedCard}
                clothingItems={clothingItems}
                onClick={handleCreateModal}
                onCardLike={handleCardLike}
                onLogOut={handleLogOut}
                onEditModal={handleEditModal}
                isLoggedIn={isLoggedIn}
              />
            </ProtectedRoute>
          </Switch>
          <Footer />
          {activeModal === "create" && (
            <AddItemModal
              handleCloseModal={handleCloseModal}
              handleClick={handleClick}
              isOpen={activeModal === "create"}
              onAddItem={onAddItem}
              buttonText={"Add Garment"}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              selectedCard={selectedCard}
              handleCloseModal={handleCloseModal}
              handleClick={handleClick}
              onClick={handleDeleteOpenModal}
              onClose={handleCloseModal}
              isLoggedIn={isLoggedIn}
            />
          )}
          {activeModal === "delete" && (
            <DeleteItemModal
              handleCloseModal={handleCloseModal}
              deleteCard={handleDeleteCard}
            />
          )}
          {activeModal === "register" && (
            <RegisterModal
              handleCloseModal={handleCloseModal}
              onLoginModal={handleLoginModal}
              handleRegistration={handleRegistration}
              isOpen={activeModal === "register"}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              handleCloseModal={handleCloseModal}
              onRegisterModal={handleRegisterModal}
              handleLogin={handleLoginSubmit}
              isOpen={activeModal === "login"}
            />
          )}
          {activeModal === "edit" && (
            <EditProfileModal
              isOpen={activeModal === "edit"}
              handleCloseModal={handleCloseModal}
              updateProfileData={handleProfileUpdate}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

// json-server --watch db.json --id _id --port 3001
export default App;
