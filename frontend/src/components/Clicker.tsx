import React from "react";

interface ClickerProps {}

const Clicker: React.FC<ClickerProps> = () => {
  const alertConsole = () => {
    console.log("Clicked!");
  };

  return <button onClick={alertConsole}>Hello there!</button>;
};

export default Clicker;
