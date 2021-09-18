import React from "react";
import ReactLoading from "react-loading";

import "./Preloader.css";
import loadingIcon from "../../assets/favicon.svg";

export default function Preloader() {
  return (
    <div className="preloader">
      <img src={loadingIcon} alt="" />
      <ReactLoading type="bubbles" color="white" height={0} width="10%" />
    </div>
  );
}
