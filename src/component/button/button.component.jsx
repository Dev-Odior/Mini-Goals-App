import React from "react";
import "./button.styles.css";

const Button = ({ children }) => {
  return (
    <button type="click" className="button">
      {children}
    </button>
  );
};

export default Button;
