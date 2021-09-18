import React from "react";
import Day from "./Day";
import { useWeather } from "../../context/WeatherContext";

import "./Future.css";
import { useWindowDimensions } from "../../hooks/useDimensions";

export default function Future() {
  const { weatherTomorrow, weatherRest, celciusSelected, setCelciusSelected } =
    useWeather();
  const { width } = useWindowDimensions();
  return (
    <div className="weather-future">
      {width > 654 && (
        <div className="future-control">
          <span
            className={celciusSelected ? "selected" : ""}
            onClick={() => setCelciusSelected(true)}
          >
            °C
          </span>
          <span
            className={!celciusSelected ? "selected" : ""}
            onClick={() => setCelciusSelected(false)}
          >
            °F
          </span>
        </div>
      )}
      <div className="future-days">
        <Day
          weather={weatherTomorrow}
          tomorrow
          celciusSelected={celciusSelected}
        />
        {weatherRest.map((weather) => (
          <Day
            key={weather.id}
            weather={weather}
            celciusSelected={celciusSelected}
          />
        ))}
      </div>
    </div>
  );
}
