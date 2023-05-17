import React from "react";
import { PAISES } from "../constants";

const Formulario = () => {
  return (
    <div className="contenedor">
      <form>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input type="text" id="ciudad" name="ciudad" />
        </div>
        <div className="campo">
          <label htmlFor="pais">País</label>
          <select name="pais" id="pais">
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
