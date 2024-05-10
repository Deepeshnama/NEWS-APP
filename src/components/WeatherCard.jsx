import React, { useContext } from "react";
import ThemeContext from "../Context/theme/ThemeContext";

const WeatherCard = () => {

  const {darkMode} = useContext(ThemeContext)

  return (
    <div className="col-md-4 col-sm-12">
      <div className={darkMode ? "card p-5 bg-primary text-light" : "card p-5"}>
        <h3 className="text-secondary">Today's Weather</h3>
        <span className="d-flex align-items-center justify-content-between">
          <span>
            <h1>26°C</h1>
            <h2>Indore</h2>
          </span>

          <span>
            <img src="//cdn.weatherapi.com/weather/64x64/day/113.png" alt="" />
            <p>Sunny</p>
          </span>
        </span>
      </div>
    </div>
  );
};

export default WeatherCard;
