import React from "react";
import { NavLink } from "react-router-dom";
import Captura11 from '../assets/Screenshot 2024-01-16 113725.png'

export const Ref = () => {
  
  return (
    <div className="flex flex-col items-center">
      <div>
        <h1>El useRef hook</h1>
      </div>
      <div>
        <div className="m-2">
          <p className="rounded my-2" style={{backgroundColor:'black', color:'white'}}>
            El ref nos sirve para realizar una referencia a un valor, una etiqueta, etc.
            Esta función se utiliza para referenciar un valor en un componente.
          </p>
          <p className="rounded my-2" style={{backgroundColor:'black', color:'white'}}>
            Se puede utilizar en el caso de querer agregar acciones o estilos muy especificos a elementos del 
            DOM, sin embargo no es una buena practica abusar de este metodo.
          </p>
          <p className="rounded my-2" style={{backgroundColor:'black', color:'white'}}>
            El useRef persiste su estado entre renderizaciones, es decir, su estado se mantendra entre renderizaciones a voluntad
          </p>
        </div>
        <div className="flex items-center m-2">
          <img src={Captura11} alt="Captura useRef" />
          <div className="mx-1">
            <p>
              El useRef nos devuelve el nombre de la referencia y su estado incial
            </p>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div>
        <h3><b>Ejemplos:</b></h3>
      </div>
      <div className="flex flex-col">
        <NavLink
          className="rounded-lg my-2"
          style={{ backgroundColor: "gray", color: "white" }}
          to={"/contadorRef"}
        >
          Ejemplo de contador{" "}
        </NavLink>
        <NavLink
          className="rounded-lg my-2"
          style={{ backgroundColor: "gray", color: "white" }}
          to={"/cronometro"}
        >
          Ejemplo de cronometro{" "}
        </NavLink>
        <NavLink
          className="rounded-lg my-2"
          style={{ backgroundColor: "gray", color: "white" }}
          to={"/focus"}
        >
          Ejemplo de focus{" "}
        </NavLink>
        <NavLink
          className="rounded-lg my-2"
          style={{ backgroundColor: "gray", color: "white" }}
          to={"/mensaje"}
        >
          Ejemplo de Mensaje
        </NavLink>
      </div>
    </div>
  );
};
