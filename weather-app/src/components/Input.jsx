import React from "react";
import { useWeather } from "../context/WeatherContext";

const Input = () => {
  let weather = useWeather();
 
  return (
    <div className="inp-field">
      <input
        placeholder="Search City"
        value={weather.searchCity}
        onChange={(e)=>weather.setSearchCity(e.target.value)}
      />
    </div>
  );
};

export default Input;
