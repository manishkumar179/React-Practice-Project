import React from "react";
import { useWeather } from "../context//WeatherContext";

const Card = () => {
  const weather = useWeather();

  return (
    <div className="card">
      <img src={weather?.data?.current?.condition?.icon} alt="no image" />
      <h2>
        {" "}
        {weather.data ? (
          weather.data?.current?.temp_c
        ) : (
          <p>Loading Data</p>
        )}{" "}
      </h2>
      <h5>
        {weather?.data?.location?.name} , {weather.data?.location?.region}{" "}
      </h5>
    </div>
  );
};

export default Card;
