import React from "react";
import useClima from "../hooks/useClima";

const Resultado = () => {
  const { resultado } = useClima();
  const { name, main } = resultado;
  const KELVIN = 273.15;
  return (
    <div className="contenedor clima">
      <h2>Clima de {name}</h2>
      <p>{(main.temp - KELVIN).toFixed(2)}&#x2103;</p>

      <div className="temp_min_max">
        <p>
          Mínima: {(main.temp_min - KELVIN).toFixed(2)} <span>&#x2103;</span>{" "}
        </p>

        <p>
          Máxima: {(main.temp_max - KELVIN).toFixed(2)} <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
};

export default Resultado;
