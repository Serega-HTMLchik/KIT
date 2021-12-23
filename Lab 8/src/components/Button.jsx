import React from "react";

const Button = (props) => {
  return (
    <div className="button">
      <button onClick={props.onClick} className="btn btn-secondary">
        {props.label}
      </button>
    </div>
  );
};

export default Button;