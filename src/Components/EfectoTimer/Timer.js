import React, { useEffect, useState } from "react";
import Captura3 from "../../assets/Screenshot 2024-01-11 140346.png";
import { NavLink } from "react-router-dom";
export const Timer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);
  return (
    <div className="flex flex-col items-center px-8">
      <div >
        <NavLink to={'/efecto'}>Volver</NavLink>
      </div>
      <h1 className="text-5xl py-8">{count}</h1>
      <img src={Captura3} />
      <div className="py-8 text-left">
        <p className="text-lg">
          En este ejemplo se crea un estado count con 0 como valor inicial,
          seguido de establecer el estado creamos el useEffecto en donde
          pondremos la loogica, se envuelve el setCount en un timeout con un
          intervalo de 1 segundo para que asi pase un segundo entre cada
          ejecucion del effect, seguido de esto limmpiamos el timeout en la
          funcion de limpieza, establecemos count como dependecencia ya que todo
          el effecto depende de count
        </p>
      </div>
    </div>
  );
};
