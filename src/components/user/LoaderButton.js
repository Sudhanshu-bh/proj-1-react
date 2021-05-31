import React from "react";
// import Button from "react-bootstrap/Button";
// import { BsArrowRepeat } from "react-icons/bs";
import "./LoaderButton.css";

export default function LoaderButton({
  isLoading,
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <button
      disabled={disabled || isLoading}
      className={`LoaderButton d-flex btn btn-lg btn-outline-primary px-4 py-2 loader-button-css ${className}`}
      {...props}
    >
      <div className="col-2">
        {isLoading && <div className="spinner-border spinner-border-sm" role="status"></div>}
        &nbsp;
      </div>
      <div className="col-8">
        {props.children}
      </div>
    </button>
  );
}