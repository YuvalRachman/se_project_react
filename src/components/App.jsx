import { useState } from "react";
import "normalize.css";

import "../blocks/App.css";
import Main from "./Main.jsx";
import Header from "./Header.jsx";

function App() {
  const [weatherData, setWeather] = useState({ type: "hot" });
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;
