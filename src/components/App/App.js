// import logo from "../../images/Logo.svg";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import DeleteItemModal from "../DeleteItemModal/DeleteItemModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal.js";
import { getForecastWeather, parseWeatherData } from "../../utils/WeatherApi";
import { useEffect, useState } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { Switch, Route } from "react-router-dom";
import Profile from "../Profile/Profile";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as auth from "../../utils/auth.js";
import * as api from "../../utils/api.js";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({ data: {} });

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

  const handleTokencheck = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      auth
        .checkToken(jwt)
        .then((data) => {
          if (data) {
            setIsLoggedIn(true);
            setCurrentUser({ data: {} });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleLogin = (values) => {
    auth.signIn(values.email, values.password).then((data) => {
      if (data.token) {
        console.log(data.token);
        handleTokencheck();
        handleCloseModal();
      }
    });
  };

  const handleRegistration = (values) => {
    auth.signUp(values).then(() => {
      handleLogin(values).catch((err) => {
        console.log(err);
      });
    });
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setCurrentUser({ data: {} });
  };

  const onAddItem = (values) => {
    const token = localStorage.getItem("jwt");
    console.log(token);
    api
      .postItems(values, token)
      .then((res) => {
        console.log(values);
        setClothingItems((items) => [res, ...items]);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      handleCloseModal();
    }
  };

  const handleProfileUpdate = (data) => {
    const token = localStorage.getItem("jwt");
    auth.editProfileData(data, token).then((data) => {
      setCurrentUser({ data: data });
      handleCloseModal();
    });
  };

  const handleDeleteCard = () => {
    console.log(selectedCard);
    api
      .deleteItems(selectedCard._id)
      .then(() => {
        setClothingItems(
          clothingItems.filter((item) => item._id !== selectedCard._id)
        );
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    // Check if this card is not currently liked
    !isLiked
      ? // if so, send a request to add the user's id to the card's likes array
        api
          // the first argument is the card's id
          .addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      : // if not, send a request to remove the user's id from the card's likes array
        api
          // the first argument is the card's id
          .removeCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
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
    handleTokencheck();
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
                handleCardLike={handleCardLike}
              />
            </Route>
            <ProtectedRoute isLoggedIn={isLoggedIn} path="/profile">
              <Profile
                onSelectCard={handleSelectedCard}
                clothingItems={clothingItems}
                onClick={handleCreateModal}
                handleCardLike={handleCardLike}
                handleSignOut={handleSignOut}
                onEditModal={handleEditModal}
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
