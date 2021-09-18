import React from "react";
import { useWeather } from "../../context/WeatherContext";

import "./WeatherNow.css";

export default function WeatherNow() {
  const { weatherNow, celciusSelected } = useWeather();
  const compassStyle = {
    transform: `rotate(${weatherNow.wind_direction - 45}deg)`,
  };
  const humidityStyle = {
    width: weatherNow.humidity + "%",
  };
  const windSpeed = Math.round(
    weatherNow.wind_speed * (celciusSelected ? 1.609 : 1)
  );
  const visibility = Math.round(
    weatherNow.visibility * (celciusSelected ? 1.609 : 1)
  );
  return (
    <div className="weather-now">
      <h2>Today's Highlights</h2>
      <div className="highlights">
        <div className="weather-now-card wind-status">
          <p>Wind Status</p>
          <h3>
            {windSpeed}
            <span>{celciusSelected ? "kph" : "mph"}</span>
          </h3>
          <p>
            <i className="fas fa-location-arrow" style={compassStyle}></i>
            {weatherNow.wind_direction_compass}
          </p>
        </div>
        <div className="weather-now-card humidity">
          <p>Humidity</p>
          <h3>
            {weatherNow.humidity}
            <span>%</span>
          </h3>
          <div className="humidity-progress">
            <div className="humidity-percentage">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
            <div className="humidity-bar">
              <div className="humidity-width" style={humidityStyle}></div>
            </div>
          </div>
        </div>
        <div className="weather-now-card visibility">
          <p>Visibility</p>
          <h3>
            {visibility}
            <span> {celciusSelected ? "km" : "miles"}</span>
          </h3>
        </div>
        <div className="weather-now-card air-pressure">
          <p>Air Pressure</p>
          <h3>
            {Math.round(weatherNow.air_pressure)}
            <span> mb</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
