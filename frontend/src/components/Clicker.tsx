import React from "react";
import "./Clicker.scss";

interface ClickerProps {}

const Clicker: React.FC<ClickerProps> = () => {
  const sayHi = () => {
    console.log("Hi!");
  };

  const myName = "Clicker";

  return (
    <button onClick={sayHi} className="clickerButton">
      Hello there! I'm {myName}.
    </button>
  );
};

export default Clicker;
