import React from "react";

interface ClickerProps {}

const Clicker: React.FC<ClickerProps> = () => {
  const sayHi = () => {
    console.log("Hi!");
  };

  return <button onClick={sayHi}>Hello there!</button>;
};

export default Clicker;
