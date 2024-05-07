import React from "react";
import Clicker from "./Clicker";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Welcome to Bilbord</h1>
      <Clicker />
    </div>
  );
};

export default App;
