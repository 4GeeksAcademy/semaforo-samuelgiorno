import React, { useState, useEffect } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("green");
  const [showPurple, setShowPurple] = useState(false);
  const getNextColor = (currentColor) => {
    const baseColors = ["green", "yellow", "red"];
    const colors = showPurple ? [...baseColors, "purple"] : baseColors;
    const currentIndex = colors.indexOf(currentColor);
    return colors[(currentIndex + 1) % colors.length];
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColor((prevColor) => getNextColor(prevColor));
    }, 5000);

    return () => clearInterval(intervalId);
  }, [showPurple]);

  const handleClick = (newColor) => {
    setColor(newColor);
  };

  const addPurpleLight = () => {
    setShowPurple(true);
  };

  return (
    <div className="text-center mt-5">
      <div className="traffic-light bg-dark p-3 d-inline-block rounded">
        <div
          className={`light red ${color === "red" ? "glow" : ""}`}
          onClick={() => handleClick("red")}
        ></div>
        <div
          className={`light yellow ${color === "yellow" ? "glow" : ""}`}
          onClick={() => handleClick("yellow")}
        ></div>
        <div
          className={`light green ${color === "green" ? "glow" : ""}`}
          onClick={() => handleClick("green")}
        ></div>
        {showPurple && (
          <div
            className={`light purple ${color === "purple" ? "glow" : ""}`}
            onClick={() => handleClick("purple")}
          ></div>
        )}
      </div>

      <div className="mt-4">
        <button className="btn btn-secondary" onClick={addPurpleLight}>
          Añadir luz púrpura
        </button>
      </div>
    </div>
  );
};

export default TrafficLight;
