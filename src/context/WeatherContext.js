import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import Preloader from "../components/ui/Preloader";

// import weatherData from "../data/weather";
const cors_api_url = "https://cors-anywhere.herokuapp.com/";

const WeatherContext = createContext({
  startUpLoading: true,
  weatherNow: {},
  weatherTomorrow: {},
  location: "",
  weatherRest: [],
  searchCity: () => {},
  searchedLocations: [],
  setSearchedCity: () => {},
  gettingWeatherLoading: false,
  searchCityLoading: false,
  celciusSelected: true,
  runStart: () => {},
});

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
  const [weatherNow, setWeatherNow] = useState({});
  const [weatherTomorrow, setWeatherTomorrow] = useState({});
  const [location, setLocation] = useState("");
  const [weatherRest, setWeatherRest] = useState([]);
  const [searchedLocations, setSearchedLocations] = useState([]);
  const [startUpLoading, setStartUpLoading] = useState(true);
  const [gettingWeatherLoading, setGettingWeatherLoading] = useState(false);
  const [searchCityLoading, setSearchCityLoading] = useState(false);
  const [celciusSelected, setCelciusSelected] = useState(true);


  const getCurrentCity = async (latitude, longitude) => {
    try {
      let requestUrl =
        "https://api.opencagedata.com/geocode/v1/json?q=" +
        latitude +
        "+" +
        longitude +
        "&key=b96190c867f84419b1bc226604d7ef31";

      let response = await axios.get(requestUrl);
      let responseCity = response.data.results[0].components.city;
      let responseWoeid = await axios.get(
        cors_api_url +
          "https://www.metaweather.com/api/location/search/?query=" +
          responseCity,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(responseWoeid);
      await getWeather(responseWoeid.data[0].woeid);
      setStartUpLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const runStart = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position.coords);
          let { latitude, longitude } = position.coords;
          getCurrentCity(latitude, longitude);
        },
        (err) => {
          console.log(err);
          setStartUpLoading(false);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    runStart();
  }, []);

  const getWeather = async (woeid) => {
    setGettingWeatherLoading(true);
    try {
      let { data } = await axios.get(
        cors_api_url + "https://www.metaweather.com/api/location/" + woeid,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setWeatherNow(data.consolidated_weather[0]);
      setWeatherTomorrow(data.consolidated_weather[1]);
      setLocation(data.title);
      setWeatherRest(
        data.consolidated_weather.filter((weather, index) => index >= 2)
      );
    } catch (err) {
      console.log(err);
    }
    setGettingWeatherLoading(false);
  };

  const searchCity = async (city) => {
    setSearchCityLoading(true);
    try {
      let { data } = await axios.get(
        cors_api_url +
          "https://www.metaweather.com/api/location/search/?query=" +
          city,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setSearchedLocations(data.filter((city, index) => index < 8));
    } catch (err) {
      console.log(err);
    }
    setSearchCityLoading(false);
  };

  const value = {
    weatherNow,
    weatherTomorrow,
    location,
    weatherRest,
    searchCity,
    searchedLocations,
    gettingWeatherLoading,
    startUpLoading,
    searchCityLoading,
    getWeather,
    celciusSelected,
    setCelciusSelected,
    runStart,
  };

  return (
    <WeatherContext.Provider value={value}>
      {startUpLoading ? <Preloader /> : children}
    </WeatherContext.Provider>
  );
};
