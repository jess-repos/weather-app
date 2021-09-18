import React from "react";

import "./SearchButton.css"

export default function SearchButton({ onClick, type, children }) {
  return (
    <button className="search-button" type={type || "button"} onClick={onClick}>
      {children}
    </button>
  );
}
