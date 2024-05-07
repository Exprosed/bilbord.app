import React from "react";

interface ClickerProps {}

declare global {
  interface Window {
    widget: any;
  }
}
window.widget = window.widget || {};

const Clicker: React.FC<ClickerProps> = () => {
  const alertConsole = () => {
    console.log("Clicked!");
    window.widget.showPaywall();
  };

  return <button onClick={alertConsole}>Hello there!</button>;
};

export default Clicker;
