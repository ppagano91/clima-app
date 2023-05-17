import { useContext } from "react";

import ClimaContext from "../context/ClimaContext";

const useClima = () => {
  return useContext(ClimaContext);
};

export default useClima;
