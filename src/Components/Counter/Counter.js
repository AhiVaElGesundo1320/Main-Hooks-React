import React, { useState } from "react";
import Captura6 from "../../assets/Screenshot 2024-01-11 212210.png";
import { NavLink } from "react-router-dom";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex flex-col items-center">
        <NavLink style={{color:'gray'}} to={'/estado'}>Volver</NavLink>
      <h1 className="py-8">Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>

      <div className="py-8">
        <img src={Captura6} alt="img counter" />
      </div>
      <div  className="px-9">
        <p>
          Este es un ejemplo basico y sencillo que explica muy bien como
          funciona el useState, creamos un estado con un valor inicial 0, el
          cual en el controlador de eventos se llama en el onClick donde en el
          setState se setea el state y se le da la logica para que incremente un
          numero en cada click
        </p>
      </div>
    </div>
  );
};
