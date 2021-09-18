import React from "react";
import dateFormat from "dateformat";

import "./Day.css";

export default function Day({ weather, tomorrow = false, celciusSelected }) {
  const svgSrc = `https://www.metaweather.com/static/img/weather/${weather.weather_state_abbr}.svg`;
  const maxTemp = celciusSelected
    ? Math.round(weather.max_temp) + "°C"
    : Math.round((weather.max_temp * 9 / 5) + 32) + "°F";
  const minTemp = celciusSelected
    ? Math.round(weather.min_temp) + "°C"
    : (Math.round((weather.min_temp) * 9 / 5) + 32) + "°F";
  return (
    <div className="day">
      <p>
        {tomorrow
          ? "Tomorrow"
          : dateFormat(weather.applicable_date, "ddd, dd mmm")}
      </p>
      <img src={svgSrc} alt="" />
      <div className="temps">
        <p>{maxTemp}</p>
        <p className="min-temp">{minTemp}</p>
      </div>
    </div>
  );
}
