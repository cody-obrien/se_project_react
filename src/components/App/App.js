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
import {
  getItems,
  postItem,
  deleteItem,
  editProfile,
  addCardLike,
  removeCardLike,
} from "../../utils/api";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import { signUp, signIn, checkToken } from "../../utils/auth";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
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
        setClothingItems([res.item, ...clothingItems]);
      })
      .then((res) => {
        handleCloseModal();
      })
      .catch((err) => {
        console.error("Error. The request has failed: ", err);
      });
  };

  const handleDeleteItem = () => {
    deleteItem(selectedCard._id)
      .then(() => {
        setClothingItems(
          clothingItems.filter((item) => {
            return item._id !== selectedCard._id;
          })
        );
      })
      .then(() => {
        handleCloseModal();
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
    signUp({
      name: nameValue,
      avatar: avatarValue,
      email: emailValue,
      password: passwordValue,
    })
      .then((res) => {
        setCurrentUser(res);
        handleSignIn({
          emailValue: emailValue,
          passwordValue: passwordValue,
        });
      })
      .catch((err) => {
        console.error("Registration failed: ", err);
      });
  };

  const handleSignIn = ({ emailValue, passwordValue }) => {
    signIn({ email: emailValue, password: passwordValue })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setToken(localStorage.getItem("jwt"));

        setIsLoggedIn(true);
      })
      .then(() => {
        handleCloseModal();
      })
      .catch((err) => {
        console.error("Sign In failed: ", err);
      });
  };

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  const handleEditProfile = (data) => {
    editProfile({ name: data.name, avatar: data.avatar })
      .then((res) => {
        setCurrentUser(res);
      })
      .then(() => {
        handleCloseModal();
      })
      .catch((err) => {
        console.error("Error editing profile:", err);
      });
  };

  const handleEditModal = () => {
    setActiveModal("edit");
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
          setIsLoggedIn(true);
          setCurrentUser(res);
        })
        .catch((err) => console.error("Invalid token: ", err));
    }
  }, [token]);

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTempUnit("C")
      : setCurrentTempUnit("F");
  };

  const handleLikeClick = ({ id, isLiked, user }) => {
    const token = localStorage.getItem("jwt");
    // Check if this card is now liked
    !isLiked
      ? // if so, send a request to add the user's id to the card's likes array

        // the first argument is the card's id
        addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((c) => (c._id === id ? updatedCard.item : c))
            );
          })
          .catch((err) => console.log(err))
      : // if not, send a request to remove the user's id from the card's likes array

        // the first argument is the card's id
        removeCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((c) => (c._id === id ? updatedCard.item : c))
            );
          })
          .catch((err) => console.log(err));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
            isLoggedIn={isLoggedIn}
          />
          <Switch>
            <Route exact path="/">
              <Main
                temperature={temperature}
                location={location}
                onSelectCard={handleSelectedCard}
                clothesList={clothingItems}
                onCardLike={handleLikeClick}
              />
            </Route>
            <ProtectedRoute path="/profile" loggedIn={isLoggedIn}>
              <Route path="/profile">
                <Profile
                  onSelectCard={handleSelectedCard}
                  onCreateModal={handleCreateModal}
                  clothesList={clothingItems}
                  onSignOut={handleSignOut}
                  onEditProfile={handleEditProfile}
                  onEditModal={handleEditModal}
                  onCardLike={handleLikeClick}
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
              onLoginModal={handleLoginModal}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              onCloseModal={handleCloseModal}
              onSubmit={handleSignIn}
              onRegisterModal={handleRegisterModal}
            />
          )}

          {activeModal === "edit" && (
            <EditProfileModal
              onCloseModal={handleCloseModal}
              onSubmit={handleEditProfile}
            />
          )}

          <Footer />
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
