import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img
          src={require('../../Home/Footer/shape-bg.png')}
          alt="no internet connection"
        ></img>
      </div>
    </div>
  );
}
