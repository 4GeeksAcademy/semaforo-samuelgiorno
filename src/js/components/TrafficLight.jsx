import React, { useState, useEffect } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");
  const [showPurple, setShowPurple] = useState(false);

  const handleClick = (newColor) => {
    setColor(newColor);
  };

  const toggleColors = () => {
    setColor((prev) => {
      if (prev === "red") return "green";
      if (prev === "green") return "yellow";
      if (prev === "yellow") return "red";
      if (prev === "purple") return "red";
      return "red";
    });
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
        <button className="btn btn-primary me-2" onClick={toggleColors}>
          Cambiar color automáticamente
        </button>
        <button className="btn btn-secondary" onClick={addPurpleLight}>
          Añadir luz púrpura
        </button>
      </div>
    </div>
  );
};

export default TrafficLight;
