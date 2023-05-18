import React, { useState } from "react";
import { PAISES } from "../constants";
import useClima from "../hooks/useClima";

const Formulario = () => {
  const [alerta, setAlerta] = useState("");
  const { busqueda, datosBusqueda, consultarClima } = useClima();
  const { ciudad, pais } = busqueda;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(busqueda).includes("")) {
      setAlerta("Todos los campos son obligatorios");
      return;
    }
    consultarClima(busqueda);
  };

  return (
    <div className="contenedor">
      {alerta && <p className="alerta">{alerta}</p>}
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            onChange={datosBusqueda}
            value={ciudad}
          />
        </div>
        <div className="campo">
          <label htmlFor="pais">País</label>
          <select name="pais" id="pais" onChange={datosBusqueda} value={pais}>
            <option value="">-- Seleccione un país --</option>
            {PAISES.map((pais) => (
              <option key={pais.codigo} value={pais.codigo}>
                {pais.nombre}
              </option>
            ))}
          </select>
        </div>
        <input type="submit" value="Consultar Clima" />
      </form>
    </div>
  );
};

export default Formulario;
