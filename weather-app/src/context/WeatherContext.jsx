import { createContext, useContext, useEffect, useState } from "react";
import {getWeatherData} from '../api/ApiFetch'

export let Weather = createContext(null)

export const useWeather = ()=>{
    return useContext(Weather);
}





let ContextProvider = ({ children }) => {

  let [data, setData] = useState(null)
  let [searchCity, setSearchCity] = useState("")

  // 🔥 Fetch by current location
const fetchWeatherByLocation = async (lat, lon) => {
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=06688c10d8d445b19c7191140262903&q=${lat},${lon}&aqi=no`
  );
  const result = await res.json();

  setData(result); // ✅ FIXED
};



  // 🔥 Fetch by city
const fetchData = async (city) => {
  const query = city || searchCity;

  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=06688c10d8d445b19c7191140262903&q=${query}&aqi=no`
  );
  const result = await res.json();

  setData(result); // ✅ FIXED
};


  // 🔥 Auto detect location on load
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchWeatherByLocation(
          position.coords.latitude,
          position.coords.longitude
        );
      },
      (error) => {
        console.log("Location denied", error);

        // fallback city
        fetchData("London");
      }
    );
  }, []);


  return (
    <Weather.Provider
      value={{
        fetchData,
        data,
        setData,
        searchCity,
        setSearchCity
      }}
    >
      {children}
    </Weather.Provider>
  );
};



export {ContextProvider}