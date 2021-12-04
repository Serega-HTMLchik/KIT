import React from "react";

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className="Button">
      Клик!
    </button>
  );
};

export default Button;