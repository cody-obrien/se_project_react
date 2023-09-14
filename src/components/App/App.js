import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
// import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { useEffect, useState } from "react";
import { getWeatherForecast, parseWeatherData } from "../../utils/weatherApi";
import { Route, Switch } from "react-router-dom";
// import { defaultClothingItems } from "../../utils/constants";
import AddItemModal from "../AddItemModal/AddItemModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { getItems, postItem, deleteItem } from "../../utils/api";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import { signUp, signIn, checkToken } from "../../utils/auth";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function App() {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temperature, setTemperature] = useState(0);
  const [location, setLocation] = useState("");
  const [currentTemperatureUnit, setCurrentTempUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleRegisterModal = () => {
    setActiveModal("register");
  };
  const handleLoginModal = () => {
    setActiveModal("login");
  };
  const handleCloseModal = () => {
    setActiveModal("");
    setSelectedCard({});
  };
  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  const handleAddItemSubmit = (newItem) => {
    postItem(newItem)
      .then((res) => {
        const newItemWithId = { id: res.id, ...newItem };

        setClothingItems([newItemWithId, ...clothingItems]);
      })
      .catch((err) => {
        console.error("Error. The request has failed: ", err);
      });
  };

  const handleDeleteItem = () => {
    deleteItem(selectedCard.id)
      .then(() => {
        setClothingItems(
          clothingItems.filter((item) => {
            return item.id !== selectedCard.id;
          })
        );
        setActiveModal("");
      })
      .catch((err) => {
        console.error("Error. The request has failed: ", err);
      });
  };

  const handleRegistration = ({
    nameValue,
    avatarValue,
    emailValue,
    passwordValue,
  }) => {
    // console.log(nameValue, avatarValue, emailValue, passwordValue);
    signUp({
      name: nameValue,
      avatar: avatarValue,
      email: emailValue,
      password: passwordValue,
    })
      .then((res) => {
        // console.log(nameValue, avatarValue, emailValue, passwordValue);
        localStorage.setItem("jwt", res.token);
        handleSignIn({ emailValue, passwordValue }).then((res) => {
          setCurrentUser(res);
          setIsLoggedIn(true);
        });
      })
      .catch((err) => {
        console.error("Registration failed: ", err);
      });
  };

  const handleSignIn = ({ email, password }) => {
    signIn({ email, password })
      .then((res) => res.json())
      .then((res) => {
        checkToken(res.token).then((data) => {
          localStorage.setItem("jwt", data.token);
          setIsLoggedIn(true);
          setCurrentUser(data);
        });
      })
      .catch((err) => {
        console.error("Sign In failed: ", err);
      });
  };
  let weatherData = {};

  useEffect(() => {
    getWeatherForecast()
      .then((data) => {
        weatherData = parseWeatherData(data).temperature;
        setTemperature(weatherData[currentTemperatureUnit]);
        setLocation(parseWeatherData(data).location);
      })
      .catch((err) => {
        console.error("Error. The request has failed: ", err);
      });
  }, [currentTemperatureUnit]);

  useEffect(() => {
    getItems()
      .then((res) => {
        setClothingItems(res);
      })
      .catch((err) => {
        console.error("Error. The request has failed: ", err);
      });
  }, []);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      setToken(jwt);
      checkToken(jwt)
        .then((res) => {
          return res;
        })
        .catch((err) => console.error("Invalid token: ", err));
    }
  }, []);

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTempUnit("C")
      : setCurrentTempUnit("F");
  };

  return (
    <CurrentUsertContext.Provder value={currentUser}>
      <div className="app">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            date={currentDate}
            location={location}
            onCreateModal={handleCreateModal}
            onRegisterModal={handleRegisterModal}
            onLoginModal={handleLoginModal}
          />
          <Switch>
            <Route exact path="/">
              <Main
                temperature={temperature}
                location={location}
                onSelectCard={handleSelectedCard}
                clothesList={clothingItems}
              />
            </Route>
            <ProtectedRoute path="/profile" loggedIn={isLoggedIn}>
              <Route path="/profile">
                <Profile
                  onSelectCard={handleSelectedCard}
                  onCreateModal={handleCreateModal}
                  clothesList={clothingItems}
                />
              </Route>
            </ProtectedRoute>
          </Switch>
          {activeModal === "create" && (
            <AddItemModal
              onCloseModal={handleCloseModal}
              onAddItem={handleAddItemSubmit}
              isOpen={activeModal === "create"}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              card={selectedCard}
              onClose={handleCloseModal}
              onDelete={handleDeleteItem}
            />
          )}
          {activeModal === "register" && (
            <RegisterModal
              onCloseModal={handleCloseModal}
              onSubmit={handleRegistration}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              onCloseModal={handleCloseModal}
              onSubmit={handleSignIn}
            />
          )}
          <Footer />
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUsertContext.Provder>
  );
}

export default App;
