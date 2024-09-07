import { useState } from "react";
import "normalize.css";
import ModalWithForm from "./ModalWithForm.jsx";
import "../blocks/App.css";
import Main from "./Main.jsx";
import Header from "./Header.jsx";

function App() {
  const [weatherData, setWeather] = useState({ type: "hot" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddClothesClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="page">
      <Header onAddClothesClick={handleAddClothesClick} />
      <Main weatherData={weatherData} />
      {isModalOpen && (
        <ModalWithForm buttonText="Add garment" title="New garment">
          <label htmlFor="name" className="modal__label">
            Name
            <input
              type="text"
              className="modal__input"
              id="name"
              placeholder="Name"
            />
          </label>
          <label htmlFor="imageUrl" className="modal__label">
            Image
            <input
              type="text"
              className="modal__input"
              id="imageUrl"
              placeholder="Image URL"
            />
          </label>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather type</legend>
            <div className="modal__radio-group">
              <input
                id="hot"
                type="radio"
                name="weather"
                className="modal__radio-input"
              />
              <label
                htmlFor="hot"
                className="modal__label modal__label_type_radio"
              >
                Hot
              </label>
            </div>
            <div className="modal__radio-group">
              <input
                id="warm"
                type="radio"
                name="weather"
                className="modal__radio-input"
              />
              <label
                htmlFor="warm"
                className="modal__label modal__label_type_radio"
              >
                Warm
              </label>
            </div>
            <div className="modal__radio-group">
              <input
                id="cold"
                type="radio"
                name="weather"
                className="modal__radio-input"
              />
              <label
                htmlFor="cold"
                className="modal__label modal__label_type_radio"
              >
                Cold
              </label>
            </div>
          </fieldset>
          <button
            type="button"
            className="modal__close"
            onClick={handleCloseModal}
          >
            Close
          </button>
        </ModalWithForm>
      )}
    </div>
  );
}

export default App;
