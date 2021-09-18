import React, { useState } from "react";
import "./Search.css";
import reactDom from "react-dom";
import ReactLoading from "react-loading";
import { useWeather } from "../../context/WeatherContext";

export default function Search({ isSearchOpen, setIsSearchOpen }) {
  const [searchInput, setSearchInput] = useState("");
  const { searchedLocations, searchCity, getWeather, searchCityLoading } =
    useWeather();

  const searchHandler = (e) => {
    e.preventDefault();
    if (searchInput.length < 1) return;
    searchCity(searchInput);
  };

  const setCity = (woeid) => {
    getWeather(woeid);
    setIsSearchOpen(false);
  };

  return reactDom.createPortal(
    <div className={`search ${isSearchOpen && "search-open"}`}>
      <div className="search-close">
        <i className="fas fa-times" onClick={() => setIsSearchOpen(false)}></i>
      </div>
      <div className="search-control">
        <form action="">
          <div className="search-input">
            <label htmlFor="search-input">
              <i className="fas fa-search"></i>
            </label>
            <input
              type="text"
              id="search-input"
              placeholder="search location"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              autoComplete="off"
            />
          </div>
          <button onClick={searchHandler}>Search</button>
        </form>
      </div>
      <div className="search-results">
        {searchCityLoading ? (
          <div className="search-loading">
            <ReactLoading type={"bubbles"} color={"white"} width={"8rem"} />
          </div>
        ) : (
          searchedLocations.map((result, index) => (
            <div
              className="search-result"
              key={result.woeid}
              onClick={() => setCity(result.woeid)}
            >
              <p>{result.title}</p>
              <i className="fas fa-chevron-right"></i>
            </div>
          ))
        )}
      </div>
    </div>,
    document.getElementById("portal")
  );
}
