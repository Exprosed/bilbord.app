import React from "react";
import AutoComplete from "./AutoComplete";
import Clicker from "./Clicker";
import Flicker from "./Flicker";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Welcome to Bilbord</h1>
      <p>This is my first React application.</p>
      <AutoComplete />
      <Clicker />
      <Flicker />
    </div>
  );
};

export default App;
