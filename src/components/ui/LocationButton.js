import React from "react";

import "./LocationButton.css"

export default function LocationButton({ onClick, type, children }) {
  return (
    <button className="location-button" type={type || "button"} onClick={onClick}>
      {children}
    </button>
  );
}
