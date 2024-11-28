import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("Toronto");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = process.env.REACT_APP_API_KEY;
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

      try {
        const response = await axios.get(url);
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="app">
      <h1>Weather App</h1>
      <SearchBar setCity={setCity} />
      {weather ? <WeatherCard data={weather} /> : <p>Loading...</p>}
    </div>
  );
};

export default App;