import React from "react";
import { useWeather } from "../../context/WeatherContext";
import LocationButton from "../ui/LocationButton";
import SearchButton from "../ui/SearchButton";
import dateFormat from "dateformat";

import "./Main.css";

export default function Main({ setIsSearchOpen }) {
  const { weatherNow, location, celciusSelected, runStart } = useWeather();

  const svgSrc = `https://www.metaweather.com/static/img/weather/${weatherNow.weather_state_abbr}.svg`;

  const tempNow = celciusSelected
    ? Math.round(weatherNow.the_temp)
    : Math.round((weatherNow.the_temp * 9) / 5) + 32;
  return (
    <div className="main">
      {/* <img className="main-bg-clouds" src={bgClouds} alt="" /> */}
      <div className="main-control">
        <SearchButton onClick={() => setIsSearchOpen(true)}>
          Search for places
        </SearchButton>

        <LocationButton onClick={runStart}>
          <i className="fas fa-location-arrow"></i>
        </LocationButton>
      </div>
      <img src={svgSrc} alt="" />
      <div className="main-temp">
        <p>{tempNow}</p>
        <span>{celciusSelected ? "°C" : "°F"}</span>
      </div>
      <h3>{weatherNow.weather_state_name}</h3>
      <div className="main-footer">
        <p>Today · {dateFormat(weatherNow.applicable_date, "ddd, dS mmm")}</p>
        <p className="main-footer-location">
          <i className="fas fa-map-marker-alt"></i> {location}
        </p>
      </div>
    </div>
  );
}
