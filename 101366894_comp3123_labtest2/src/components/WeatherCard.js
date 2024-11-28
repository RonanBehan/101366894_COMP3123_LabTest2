import React from "react";

const WeatherCard = ({ data }) => {
  const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <h1>{data.name}</h1>
      <h3>{data.weather[0].description}</h3>
      <img src={iconUrl} alt="weather icon" />
      <p>Temperature: {(data.main.temp - 273.15).toFixed(2)}°C</p>
      <p>Feels Like: {(data.main.feels_like - 273.15).toFixed(2)}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;