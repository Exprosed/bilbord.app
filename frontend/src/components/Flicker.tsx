import React, { useEffect } from "react";
import { useState } from "react";
import "./Flicker.scss";

interface FlickerProps {}

const Flicker: React.FC<FlickerProps> = () => {
  const [isDay, setIsDay] = useState(true);

  // Randomly assign it to be night or day on-render.
  useEffect(() => {
    setIsDay(Math.random() < 0.5);
  }, []);

  return (
    <div>
      <div className={isDay ? "dayTime" : "nightTime"}></div>
      {isDay && <p>It's daytime!</p>}
    </div>
  );
};

export default Flicker;
