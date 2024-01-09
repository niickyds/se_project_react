// import logo from "../../images/Logo.svg";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/WeatherApi";
import { useEffect, useState } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { Switch, Route } from "react-router-dom";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import DeleteItemModal from "../DeleteItemModal/DeleteItemModal";
import { getItems, postItems, deleteItems } from "../../utils/api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

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

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  const handleDeleteCard = () => {
    console.log(selectedCard);
    deleteItems(selectedCard._id)
      .then(() => {
        setClothingItems(
          clothingItems.filter((item) => item._id !== selectedCard._id)
        );
        // setSelectedCard({});
        handleCloseModal();
      })
      .catch((err) => console.error(err));
  };

  const onAddItem = (values) => {
    postItems(values)
      .then((res) => {
        console.log(values);
        setClothingItems((items) => [res, ...items]);
        handleCloseModal();
      })
      .catch((err) => console.error(err));
  };

  const handleClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      handleCloseModal("");
    }
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((item) => {
        setClothingItems(item);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.key === "Escape" && activeModal !== "") {
        handleCloseModal("");
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModal]);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <Header onCreateModal={handleCreateModal} />
      <Switch>
        <Route exact path="/">
          <Main
            weatherTemp={temp}
            onSelectCard={handleSelectedCard}
            clothingItems={clothingItems}
          />
        </Route>
        <Route path="/profile">
          <Profile
            onSelectCard={handleSelectedCard}
            clothingItems={clothingItems}
            onCreate={handleCreateModal}
          />
        </Route>
      </Switch>
      <Footer />
      {activeModal === "create" && (
        <AddItemModal
          handleCloseModal={handleCloseModal}
          handleClick={handleClick}
          isOpen={activeModal === "create"}
          onAddItem={onAddItem}
        />
      )}
      {activeModal === "preview" && (
        <ItemModal
          selectedCard={selectedCard}
          onClose={handleCloseModal}
          handleClick={handleClick}
          onClick={handleDeleteOpenModal}
        />
      )}
      {activeModal === "delete" && (
        <DeleteItemModal
          onClose={handleCloseModal}
          deleteCard={handleDeleteCard}
        />
      )}
    </CurrentTemperatureUnitContext.Provider>
  );
}

// json-server --watch db.json --id _id --port 3001
export default App;
