import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Captura12 from "../../assets/Screenshot 2024-01-16 114503.png"
import Captura13 from "../../assets/Screenshot 2024-01-16 115030.png"


export const CounterWithRef = () => {
  const myNumberControllerRef = useRef(0);
  const [number, setNumber] = useState();

  return (
    <div className="flex flex-col items-center">
      <h1>Contador con ref</h1>
      <NavLink
        style={{ backgroundColor: "gray", color: "white" }}
        className="rounded-lg my-2"
        to={"/ref"}
      >
        Volver
      </NavLink>
      <div className="flex flex-col  items-center m-3">
        <div>
          <p>
            Podemos combinar el useState y el useRef para realizar codigo que
            trabaje en conjunto como por ejemplo un contador de clicks
          </p>
        </div>
        <div div className="flex flex-col ">
          <img src={Captura12} alt="ejemplo Clicks Counter"/>
          <p className="rounded my-2" style={{backgroundColor:'black', color:'white'}}>
            -Empezmos establecinedo el useState vacido para poder trabajar libremente y el useRef en 0 que es desde donde inicara el contador de clicks
          </p>
        </div>
        <div  className="flex flex-col my-8 ">
          <img src={Captura13} alt='Codigo ejemplo de clicks counter'/>
          <p className="rounded my-2" style={{backgroundColor:'black', color:'white'}}>
            Seguidamente vamos a establecer el codigo en un controlador de eventos, para poder obetener el estado actual del ref recuerder llamar la referncia y agregar su .current, esto para acceder al estado         
          </p>
          <p className="rounded my-2" style={{backgroundColor:'black', color:'white'}}>
            Usamos el useState para ahi poder guardar la referencia y poder mostrarla en el DOM
          </p>
        </div>
      </div>
      <div className=" flex  flex-col my-8">
      <button
        className="rounded-lg my-2"
        style={{ backgroundColor: "gray", color: "white" }}
        onClick={() => {
          myNumberControllerRef.current++;
          console.log("Click: " + myNumberControllerRef.current);
          setNumber(myNumberControllerRef.current);
        }}
      >
        increment
      </button>
      <button
        style={{ backgroundColor: "gray", color: "white" }}
        className="rounded-lg my-2"
        onClick={() => {
          myNumberControllerRef.current--;
          setNumber(myNumberControllerRef.current);
          console.log("Click:" + myNumberControllerRef.current);
        }}
        disabled={number === 0}
      >
        decrement
      </button>
      <h3>Clicks: {number}</h3>
      </div>
    </div>
  );
};
