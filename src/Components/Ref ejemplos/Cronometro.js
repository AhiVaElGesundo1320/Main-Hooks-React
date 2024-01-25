import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Captura14 from "../../assets/Screenshot 2024-01-16 120935.png";

export const Cronometro = () => {
  const timer = useRef(0);

  const [count, setCount] = useState(0);

  useEffect(() => {
    timer.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  const handleStopCounter = () => {
    clearInterval(timer.current);
    timer.current = 0;
    
  };

  return (
    <div className="flex flex-col items-center m-8">
        <NavLink
          style={{ backgroundColor: "gray", color: "white" }}
          className="rounded-lg my-2"
          to={"/ref"}
        >
          Volver
        </NavLink>
      <div className="flex flex-col items-center">
        <h2>Cronometro con useState, useEffect y useRef</h2>
        <div className="flex flex-col">
          <img src={Captura14} alt="ejemplo crono " />
          <div className="flex flex-col justify-around mx-2">
          <p className="rounded my-2" style={{backgroundColor:'black', color:'white'}}>
            Iniciamos establecinedo los estados del useRef y el useState en 0
          </p>
          <p className="rounded my-2" style={{backgroundColor:'black', color:'white'}}>
            Seguido en el useEffect llamamos a la referencia junto con su
            propiedad current, dentro de la referencia crearemos un setinterval,
            dentro del interval llamaremos la funcion actualizadora del estado y
            establecemos que el estado actual sea igual al estado actual + 1
          </p>
          <p className="rounded my-2" style={{backgroundColor:'black', color:'white'}}>
            Por ultimo se crea una funcion para el controlador de eventos  en la que se hara la limpieza de la referencia y del estado para asi volver establecerlo en 0 o solamente detenerlo
          </p>
          </div>
        </div>
      </div>
      <div>
        <h1>Contador: {count}</h1>
        <button
          style={{ backgroundColor: "gray", color: "white" }}
          className="rounded-lg my-2"
          onClick={handleStopCounter}
        >
          Parar Contador
        </button>
      </div>
    </div>
  );
};
